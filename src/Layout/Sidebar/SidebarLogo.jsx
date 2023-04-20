import React, { useContext } from "react";
import { Grid } from "react-feather";
import { Link } from "react-router-dom";
import CustomizerContext from "../../Helper/Customizer";
import cubaimg from "../../assets/images/logo/mainlogo.png";
import { Image } from "../../AbstractElements";
const SidebarLogo = () => {
  const { togglSidebar, setTogglSidebar } = useContext(CustomizerContext);

  return (
    <>
      <Link
        to={`${process.env.PUBLIC_URL}/dashboard/default`}
        style={{
          fontSize: "1.5em",
          color: "white",
          display: "flex",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <div style={{ marginRight: "10px" }}>
          <Image
            attrImage={{
              className: "img-fluid for-light",
              src: cubaimg,
              alt: "",
              width: "30px",
              height: "30px",
            }}
          />
        </div>
        <div>InstaPay</div>
      </Link>
      <div className="back-btn" onClick={() => setTogglSidebar(!togglSidebar)}>
        <Grid />
      </div>
      <div
        className="toggle-sidebar"
        onClick={() => setTogglSidebar(!togglSidebar)}
      >
        <Grid className="status_toggle middle sidebar-toggle" />
      </div>
    </>
  );
};

export default SidebarLogo;
