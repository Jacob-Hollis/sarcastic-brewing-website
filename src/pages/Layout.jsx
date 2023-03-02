import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Layout = (props) => {
  return (
    <>
      <Navbar iglink={props.iglink} tiktoklink={props.tiktoklink} openInNewTab={props.openInNewTab}/>
      <Outlet />
      <Footer iglink={props.iglink} tiktoklink={props.tiktoklink} openInNewTab={props.openInNewTab}/>
    </>
  );
};

export default Layout;