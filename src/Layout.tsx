import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import { services, findService } from "./services";
import TopSection from "./components/TopSection";
import TextSection from "./components/TextSection";
import LetsGet from "./components/LetsGet";
import Footer from "./components/Footer";

interface LayoutProps {
  services: typeof services;
}

const Layout = ({ services }: LayoutProps) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const currentService = services.find(
    (service) => service.page === location.pathname
  );

  return (
    <div>
      <Navbar services={services} />
      {currentService && (
        <>
          <TopSection />
          <TextSection title={currentService.name} style={{paddingTop:'100px'}}>
            {currentService.longDescription}
          </TextSection>
        </>
      )}
      <Outlet />
      {currentService && <LetsGet />}
      <Footer relatedServices={['Art Comissions', 'Edits', 'Video Editing']}/>
    </div>
  );
};

export default Layout;
