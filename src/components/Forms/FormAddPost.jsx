import React from "react";
import { useDispatch } from "react-redux";
import { addNewPost } from "../../redux/blogSlice";
import useForm from "../../hooks/useForm";
import validate from "../../hooks/validatePostData";

const FormAddPost = () => {
  const dispatch = useDispatch();
  const onSubmit = () => {
    let categoryNum = parseInt(values.category);
    dispatch(
      addNewPost({
        title: values.title,
        text: values.text,
        category: categoryNum,
      })
    );
  };

  const { handleChange, values, handleSubmit, errors } = useForm(
    {
      title: "",
      text: "",
      category: "",
    },
    validate,
    onSubmit
  );

  return (
    <>
      <div className="blog-header">
        <h3 style={{ textAlign: "center" }}>Add Post</h3>
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
          <label htmlFor="title">Category</label>
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
          Post
        </button>
      </form>
    </>
  );
};

export default FormAddPost;
