import { useDispatch } from "react-redux";
import { editPost } from "../../redux/blogSlice";
import PropTypes from "prop-types";
import useForm from "../../hooks/useForm";
import validate from "../../hooks/validatePostData";

const FormEditPost = ({ postId, postTitle, postText, postCategory }) => {
  const dispatch = useDispatch();
  const onSubmit = () => {
    let categoryNum = parseInt(values.category);
    dispatch(
      editPost({
        id: postId,
        title: values.title,
        text: values.text,
        category: categoryNum,
      })
    );
  };

  const { handleChange, values, handleSubmit, errors } = useForm(
    {
      title: postTitle,
      text: postText,
      category: postCategory,
    },
    validate,
    onSubmit
  );

  return (
    <>
      <div className="blog-header">
        <h3 style={{ textAlign: "center" }}>Edit Post</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={handleChange}
            value={values.title}
          />
          {errors.title && <p className="form-error">{errors.title}</p>}
        </div>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <textarea
            name="text"
            id="text"
            cols="30"
            rows="10"
            onChange={handleChange}
            value={values.text}
          ></textarea>
          {errors.text && <p className="form-error">{errors.text}</p>}
        </div>
        <div className="form-control">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            onChange={handleChange}
            value={values.category}
          />
          {errors.category && <p className="form-error">{errors.category}</p>}
        </div>
        <button type="submit" className="btn blue">
          Send
        </button>
      </form>
    </>
  );
};

FormEditPost.propTypes = {
  postId: PropTypes.number,
  postTitle: PropTypes.string,
  postText: PropTypes.string,
  postCategory: PropTypes.number,
};

export default FormEditPost;
