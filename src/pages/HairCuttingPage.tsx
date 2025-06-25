import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { isMobile, isTablet } from "react-device-detect";
import TextSection from '../components/TextSection';
import MediaContainer from '../components/MediaContainer';

const Items = [
  {
    id: 1,
    path: "src/assets/images/alice.png",
    title: "Short layered cut",
  },
  {
    id: 2,
    path: "src/assets/images/wolfcut.png",
    title: "Wolfcut",
  },
  {
    id: 3,
    path: "src/assets/images/diogoafter2.png",
    title: "Cut to give more volume",
  },
  {
    id: 4,
    path: "src/assets/images/controversialcut.jpg",
    title: "Himecut/jellyfish cut hybrid",
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

const HairCuttingPage = () => {
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
                          {Items.map((media, index) => (
                           <div key={index} className="image-wrapper">
                           <img src={media.path} className="list-image1" loading="lazy" />
                           <div className="image-overlay">
                             {media.title}
                           </div>
                         </div>
                          ))}
                        </Carousel>
                        <TextSection fontstyle={{ fontSize: "1.2rem" }}>
                          Maybe you didn't notice that it's what has been missing, but what a hairdresser should be, but often isn't, is relatable. 
                          You should be able to complain to them when your hair doesn't turn out the way you expected, and they should voluntarily offer their knowledge to let you know your hair texture isn't right for this look.
                          I base my service around transparency and cooperation between me and the client, tackling the styling-cutting intersection problem (the number one cause of unsatisfying results) with no reservations.
                        </TextSection>
                        <MediaContainer mediaItems={[
  {
    path: "src/assets/images/diogobefore.jpg",
    type: "image",
    title: "Before",
  },
  {
    path: "src/assets/images/diogoafter.png",
    type:"image",
    title: "After",
  },
]}/>
    </React.Fragment>
  )
}

export default HairCuttingPage