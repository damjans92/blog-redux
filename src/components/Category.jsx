import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPostsByCategory } from "../redux/blogSlice";
import BlogItem from "./BlogItem";

function Category() {
  const dispatch = useDispatch();
  const { categoryId } = useParams();
  const posts = useSelector((state) => state.blog.posts);

  useEffect(() => {
    dispatch(getPostsByCategory(categoryId));
  }, [dispatch, categoryId]);

  return (
    <div className="main">
      <div className="container">
        <h1>Category {categoryId}</h1>
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <BlogItem
              id={post.id}
              title={post.title}
              text={post.text}
              key={index}
              category={post.category}
            />
          ))
        ) : (
          <p>No posts in this category</p>
        )}
      </div>
    </div>
  );
}

export default Category;
