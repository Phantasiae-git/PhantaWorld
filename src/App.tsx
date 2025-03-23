import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./components/Card";
import { isMobile, isTablet } from "react-device-detect";
import BackgroundImageSection from "./components/BackgroundImageSection";
import HomePage from "./pages/HomePage";
import EditsPage from "./pages/EditsPage";
import ArtPage from "./pages/ArtPage";
import VideoPage from "./pages/VideoPage";
import HairDyePage from "./pages/HairDyePage";
import PhotographyPage from "./pages/PhotographyPage";
import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom';
import Layout from "./Layout";
import { services } from "./services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout services={services} />,
    children: [
      {
        path: "/",
        element: <HomePage services={services} />,
      },
      {
        path: "/edits",
        element: <EditsPage />,
      },
      {
        path: "/art",
        element: <ArtPage />,
      },
      {
        path: "/video",
        element: <VideoPage />,
      },
      {
        path: "/hairdying",
        element: <HairDyePage />,
      },
      {
        path: "/photography",
        element: <PhotographyPage />,
      },
    ],
  },
]);



function App() {

  return <RouterProvider router={router} />;
}

export default App;
