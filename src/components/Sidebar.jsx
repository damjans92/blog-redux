import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAllCategories } from "../redux/blogSlice";

function Sidebar() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.blog.categories);

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <aside className="sidebar">
      <h2>Categories</h2>
      <hr style={{ margin: "1em 0" }} />
      <ul>
        {categories.map((cat, index) => (
          <li key={index}>
            <Link to={`/category/${cat}`}>Category {cat}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
