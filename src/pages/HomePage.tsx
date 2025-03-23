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
          <Card
            key={index}
            mediaPath={service.mediaPath}
            mediaType={service.mediaType}
            text={service.shortDescription}
            page={service.page}
          >
            {service.name}
          </Card>
        ))}
      </Carousel>
    </div>
  );
};

export default HomePage;