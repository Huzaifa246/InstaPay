import React, { useState } from "react";
import DarkMode from "./DarkMode";
import Notification from "./Notification";
// import SearchBar from "./SearchBar";
import Language from "./Language";
import Users from "./User";
import { UL } from "../../../AbstractElements";
import Maximizes from "./Maximize";
const RightHeader = () => {
  const [active, setActive] = useState();
  return (
    <div className="simple-list nav-right col-md-6 col-lg-4 col-xl-3 order-md-2 order-lg-1 p-0">
      <UL attrUL={{ className: "nav-menus" }}>
        <DarkMode />
        <Notification active={active} setActive={setActive} />
        <Maximizes />
        <Language />
        <Users />
      </UL>
    </div>
  );
};

export default RightHeader;
