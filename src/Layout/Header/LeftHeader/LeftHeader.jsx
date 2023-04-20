import React from "react";
import { FolderPlus } from "react-feather";
import HeaderDashboard from "./HeaderDashboard";
import Appliacation from "./Application";
import Pages from "./Pages";
import { UL, LI } from "../../../AbstractElements";

const LeftHeader = () => {
  return (
    <div className="left-header col horizontal-wrapper ps-0">
      <div className=" simple-list left-menu-header">
        <UL attrUL={{ className: "simple-list header-left d-flex" }}>
          <HeaderDashboard />
          <Appliacation />
          <Pages />
        </UL>
      </div>
    </div>
  );
};

export default LeftHeader;
