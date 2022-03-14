import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import blogApi from "../components/api/blogApi";

export const getAllPosts = createAsyncThunk("blog/getAllPosts", async () => {
  try {
    const response = await blogApi.get("/posts");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const searchPosts = createAsyncThunk(
  "blog/searchPosts",
  async (searchTerm) => {
    try {
      const response = await blogApi.get(`/posts?q=${searchTerm}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getAllCategories = createAsyncThunk(
  "blog/getAllCategories",
  async () => {
    try {
      const response = await blogApi.get("/categories");
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getPostsByCategory = createAsyncThunk(
  "blog/getPostsByCategory",
  async (catId) => {
    try {
      const response = await blogApi.get(`/posts?category=${catId}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addNewPost = createAsyncThunk(
  "blog/addNewPost",
  async (payload) => {
    try {
      const response = await blogApi.post("/posts", {
        title: payload.title,
        text: payload.text,
        category: payload.category,
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deletePost = createAsyncThunk("blog/deletePost", async (id) => {
  try {
    const response = await blogApi.delete(`/posts/${id}`);

    console.log("deletePost " + response);
    return { id };
  } catch (error) {
    console.log(error);
  }
});

export const editPost = createAsyncThunk("blog/editPost", async (payload) => {
  try {
    const response = await blogApi.patch(`/posts/${payload.id}`, {
      title: payload.title,
      text: payload.text,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  posts: [],
  postsByCat: [],
  categories: [],
  isLoading: false,
  isModalOpen: false,
  messageSuccess: "",
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    toggleModal: (state, action) => {
      console.log("toggle modal");
      state.isModalOpen = action.payload;
    },
    clearNotificationMsg: (state) => {
      state.messageSuccess = "";
    },
  },
  extraReducers: {
    [getAllPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
      state.messageSuccess = "Posts fetched successfully!";
    },
    [searchPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [searchPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
      state.messageSuccess = "Posts fetched successfully!";
    },
    [getAllCategories.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllCategories.fulfilled]: (state, action) => {
      state.categories = action.payload;
      state.isLoading = false;
      console.log("Fetched successfully!");
    },
    [getPostsByCategory.pending]: (state) => {
      state.isLoading = true;
    },
    [getPostsByCategory.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
      console.log("Fetched successfully!");
    },
    [addNewPost.pending]: (state) => {
      console.log("Add new post pending...");
    },
    [addNewPost.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.posts.push(action.payload);
      state.messageSuccess = "New post added!";
    },
    [deletePost.fulfilled]: (state, action) => {
      console.log("Post deleted!");
      console.log(action.payload);
      state.posts = state.posts.filter((post) => post.id !== action.payload.id);
      state.messageSuccess = "Post deleted!";
    },
    [editPost.fulfilled]: (state, action) => {
      console.log("Post edited!");
      console.log(action.payload);
      let updatedPost = action.payload;
      let postIndex = state.posts.findIndex(
        (post) => post.id === updatedPost.id
      );
      state.posts[postIndex] = updatedPost;
      state.messageSuccess = "Post updated!";
    },
  },
});

export const { clearNotificationMsg } = blogSlice.actions;
export default blogSlice.reducer;
