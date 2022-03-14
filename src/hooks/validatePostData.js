export default function validatePostForm(values) {
  let errors = {};

  if (values.title.trim() === "") {
    errors.title = "Title is required";
  }
  if (values.text.trim() === "") {
    errors.text = "Text is required";
  }
  if (!values.category) {
    errors.category = "Category is required";
  }

  return errors;
}
