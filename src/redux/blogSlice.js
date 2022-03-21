import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import blogApi from "../components/api/blogApi";

export const getAllPosts = createAsyncThunk(
  "blog/getAllPosts",
  async (_, thunkAPI) => {
    try {
      const response = await blogApi.get("/posts");

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const searchPosts = createAsyncThunk(
  "blog/searchPosts",
  async (searchTerm, thunkAPI) => {
    try {
      const response = await blogApi.get(`/posts?q=${searchTerm}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllCategories = createAsyncThunk(
  "blog/getAllCategories",
  async (_, thunkAPI) => {
    try {
      const response = await blogApi.get("/categories");

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getPostsByCategory = createAsyncThunk(
  "blog/getPostsByCategory",
  async (catId, thunkAPI) => {
    try {
      const response = await blogApi.get(`/posts?category=${catId}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addNewPost = createAsyncThunk(
  "blog/addNewPost",
  async (payload, thunkAPI) => {
    try {
      const response = await blogApi.post("/posts", {
        title: payload.title,
        text: payload.text,
        category: payload.category,
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deletePost = createAsyncThunk(
  "blog/deletePost",
  async (id, thunkAPI) => {
    try {
      const response = await blogApi.delete(`/posts/${id}`);

      return { id };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editPost = createAsyncThunk(
  "blog/editPost",
  async (payload, thunkAPI) => {
    try {
      const response = await blogApi.patch(`/posts/${payload.id}`, {
        title: payload.title,
        text: payload.text,
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  posts: [],
  categories: [],
  isLoading: false,
  isModalOpen: false,
  messageSuccess: "",
  messageError: "",
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    clearNotificationMsg: (state) => {
      state.messageSuccess = "";
      state.messageError = "";
    },
  },
  extraReducers: {
    [getAllPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
    },
    [getAllPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.messageError = action.payload;
    },

    [searchPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [searchPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
    },
    [searchPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.messageError = "Search error: " + action.payload;
    },

    [getAllCategories.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllCategories.fulfilled]: (state, action) => {
      state.categories = action.payload;
      state.isLoading = false;
      console.log("Categories fetched successfully!");
    },
    [getAllCategories.rejected]: (state, action) => {
      state.isLoading = false;
      state.messageError = "Fetching categories error: " + action.payload;
    },

    [getPostsByCategory.pending]: (state) => {
      state.isLoading = true;
    },
    [getPostsByCategory.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
      console.log("Fetched successfully!");
    },
    [getPostsByCategory.rejected]: (state, action) => {
      state.isLoading = false;
      state.messageError = "Fetching posts error: " + action.payload;
    },

    [addNewPost.pending]: (state) => {
      console.log("Add new post pending...");
    },
    [addNewPost.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.posts.push(action.payload);
      state.messageSuccess = "New post added!";
    },
    [addNewPost.rejected]: (state, action) => {
      state.messageError = "Add post error: " + action.payload;
    },

    [deletePost.fulfilled]: (state, action) => {
      console.log("Post deleted!");
      console.log(action.payload);
      state.posts = state.posts.filter((post) => post.id !== action.payload.id);
      state.messageSuccess = "Post deleted!";
    },
    [deletePost.rejected]: (state, action) => {
      state.messageError = "Delete post error: " + action.payload;
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
    [editPost.rejected]: (state, action) => {
      state.messageError = "Edit post error: " + action.payload;
    },
  },
});

export const { clearNotificationMsg } = blogSlice.actions;
export default blogSlice.reducer;
