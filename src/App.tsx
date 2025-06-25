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
import ThreeDGraphicsPage from "./pages/3dGraphicsPage";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import Layout from "./Layout";
import { services, findService } from "./services";
import PixelArtPage from "./pages/PixelArtPage";
import HairCuttingPage from "./pages/HairCuttingPage";
import MakeoversPage from "./pages/MakeoversPage";
import AboutMePage from "./pages/AboutMePage";
import ReviewsPage from "./pages/ReviewsPage";
import NotFoundPage from "./pages/NotFoundPage";
import CodePage from "./pages/CodePage";
import ContactsPage from "./pages/ContactsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout services={services} />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage services={services} />,
      },
      {
        path: "/about",
        element: <AboutMePage />,
      },
      {
        path: "/reviews",
        element: <ReviewsPage />,
      },
      {
        path: "/contacts",
        element: <ContactsPage />,
      },
      {
        path: "/edits",
        element: <EditsPage />,
      },
      {
        path: "/art",
        element: <ArtPage service={findService("/art")} />,
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
        path: "/photo",
        element: <PhotographyPage />,
      },
      {
        path: "/3dgraphics",
        element: <ThreeDGraphicsPage />,
      },
      {
        path: "/pixelart",
        element: <PixelArtPage />,
      },
      {
        path: "/haircut",
        element: <HairCuttingPage />,
      },
      {
        path: "/makeovers",
        element: <MakeoversPage />,
      },
      {
        path: "/code",
        element: <CodePage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
