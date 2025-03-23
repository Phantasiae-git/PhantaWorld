import React, {useEffect} from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import { services } from "./services";

interface LayoutProps {
  services: typeof services;
}

const Layout = ({ services }: LayoutProps) => {
    const location = useLocation();


useEffect(() => {
  window.scrollTo(0, 0);
}, [location.pathname]);

  return (
    <div>
      <Navbar services={services}/>
      <Outlet />
    </div>
  );
};

export default Layout;