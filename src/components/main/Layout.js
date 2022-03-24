import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Toolbar";
import Footer from "./Footer";
import SideDrawer from "./SideDrawer";
import BackDrop from "./BackDrop";

export default function Layout({ welcome }) {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen((prevState) => !prevState);
  };
  const backDropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  let backDrop;

  if (sideDrawerOpen) {
    backDrop = <BackDrop click={backDropClickHandler} />;
  }
  return (
    <>
      <Navbar welcome={welcome} />
      <SideDrawer
        show={sideDrawerOpen}
        drawerClickHandler={drawerToggleClickHandler}
      />
      {backDrop}
      <Outlet />
      <Footer />
    </>
  );
}
