import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { isMobile, isTablet } from "react-device-detect";

const mediaItems = [
  {
    id: 1,
    path: "src/assets/images/bea2.jpg",
    title: "Red under black",
  },
  {
    id: 2,
    path: "src/assets/images/rainbow_hair.png",
    title: "Rainbow/holographic hair",
  },
  {
    id: 3,
    path: "src/assets/images/Leo.jpg",
    title: "Bleached undercut",
  },
  {
    id: 4,
    path: "src/assets/images/hairpurpleends.jpg",
    title: "Purple ends",
  },
];

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

const HairDyePage = () => {
  return (
    <React.Fragment>
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
                    {mediaItems.map((media, index) => (
                     <div key={index} className="image-wrapper">
                     <img src={media.path} className="list-image1" loading="lazy" />
                     <div className="image-overlay">
                       {media.title}
                     </div>
                   </div>
                    ))}
                  </Carousel>
    </React.Fragment>
  )
}

export default HairDyePage