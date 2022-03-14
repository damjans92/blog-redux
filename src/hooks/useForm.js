import { useState, useEffect } from "react";

const useForm = (initialState, validate, onSubmit) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setValues(initialState);
  }, [initialState.title, initialState.text, initialState.category]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(validate(values)).length === 0) {
      onSubmit();
      setErrors({});
    } else {
      setErrors(validate(values));
    }
  };
  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
