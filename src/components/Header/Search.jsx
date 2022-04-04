import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchPosts, getAllPosts } from "../../redux/blogSlice";

const Search = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSeachTerm] = useState();

  const handlerSearch = async (e) => {
    setSeachTerm(e.target.value);
    setTimeout(() => {
      dispatch(searchPosts(searchTerm));
    }, 300);
    if (searchTerm === "") dispatch(getAllPosts());
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search posts"
        className="search-input"
        onChange={handlerSearch}
        value={searchTerm}
      />
    </>
  );
};

export default Search;
