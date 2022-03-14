import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../redux/blogSlice";
import BlogItem from "./BlogItem";

function Home() {
  const posts = useSelector((state) => state.blog.posts);
  const isLoading = useSelector((state) => state.blog.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);
  return (
    <div className="main">
      <div className="container">
        {posts.map((post, index) => (
          <BlogItem
            id={post.id}
            title={post.title}
            text={post.text}
            key={index}
            category={post.category}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
