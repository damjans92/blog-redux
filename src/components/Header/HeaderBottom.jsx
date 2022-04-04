import React from "react";

import AddPost from "../AddPost";
import Notification from "./Notification";

function HeaderBottom() {
  return (
    <div className="header-bottom">
      <div></div>
      <Notification />
      <AddPost />
    </div>
  );
}

export default HeaderBottom;
