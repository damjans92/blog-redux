import { useDispatch } from "react-redux";
import { deletePost } from "../redux/blogSlice";

import EditPost from "./EditPost";

function BlogItem({ id, title, text, category }) {
  const dispatch = useDispatch();

  return (
    <article className="blog-post">
      <div className="blog-body">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="btns">
        <EditPost
          postId={id}
          postTitle={title}
          postText={text}
          postCategory={category}
        />
        <button className="btn red" onClick={() => dispatch(deletePost(id))}>
          Delete
        </button>
      </div>
    </article>
  );
}

export default BlogItem;
