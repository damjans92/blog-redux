import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import HeaderBottom from "./HeaderBottom";
import Navigation from "./Navigation";
import Search from "./Search";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      <div className="header-top">
        <div className="logo">
          <Link to="/">
            <h1>blog</h1>
          </Link>
        </div>
        <div className="header-right">
          <Search />
          <button className="toggle-nav" onClick={toggleNavHandler}>
            <FiMenu />
          </button>
          <Navigation isOpen={isOpen} />
        </div>
      </div>
      <HeaderBottom />
    </div>
  );
}

export default Header;
