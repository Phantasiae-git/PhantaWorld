import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../components/Card";
import artcomms from "../assets/images/rei.png";
import edit from "../assets/video/shinobu.mp4";
import fortitu from "../assets/video/42cut.mp4";
import hair from "../assets/images/rainbow hair square.png";
import { isMobile, isTablet } from "react-device-detect";
import BackgroundImageSection from "../components/BackgroundImageSection";
import { services } from "../services";
import TextSection from "../components/TextSection";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

interface HomePageProps {
  services: typeof services;
}

const HomePage = ({ services }: HomePageProps) => {
  const deviceType = isMobile ? "mobile" : isTablet ? "tablet" : "desktop";

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const [alert, setAlert] = useState(false);

  return (
    <div>
      <BackgroundImageSection />
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={deviceType !== "mobile" ? true : false}
        autoPlaySpeed={10000}
        keyBoardControl={true}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {services.map((service, index) => (
          service.category !== "other" && (
    <Card
      key={index}
      mediaPath={service.mediaPath}
      mediaType={service.mediaType}
      text={service.shortDescription}
      page={service.page}
    >
      {service.name}
    </Card>
  )
        ))}
      </Carousel>
      <TextSection type="rn">
      <br />
      <div className="contain">
        <h3>Need something else?</h3>
        </div>
        <br/>
        <p>
          If you want some other super niche service and don't know who to call,
          hit me up and let's talk about it!
        </p>
        <br />
        <p>Other content:</p>
        <br />
        <div className="contain">
          <Link to="/about" className="pill-link-button">
            About Me
          </Link>
          <a onClick={() => window.open("https://github.com/Phantasiae-git", '_blank')} className="pill-link-button">
            Code Projects
          </a>
          <Link to="/reviews" className="pill-link-button">
            All Reviews
          </Link>
        </div>
      </TextSection>
    </div>
  );
};

export default HomePage;
