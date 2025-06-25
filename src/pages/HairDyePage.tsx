import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { isMobile, isTablet } from "react-device-detect";
import TextSection from '../components/TextSection';
import CircleArray from '../components/CircleArray';

const mediaItems = [
  {
    id: 1,
    path: "src/assets/images/bea2.jpg",
    title: "Red under black",
  },
  {
    id: 2,
    path: "src/assets/images/rainbow_hair.png",
    title: "Holographic/rainbow hair",
  },
  {
    id: 3,
    path: "src/assets/images/Leo.jpg",
    title: "Bleached undercut",
  },
  {
    id: 4,
    path: "src/assets/images/charlie.jpg",
    title: "Red ends",
  },
  {
    id: 5,
    path: "src/assets/images/hairpurpleends.jpg",
    title: "Purple ends",
  },
  {
    id: 6,
    path: "src/assets/images/rainbow_hair2.png",
    title: "Holographic/rainbow hair (look from further away)",
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

const items = [
    { color: '#000000', label: 'Black' },
    { color: '#1db30a', label: 'Green' },
    { color: '#df0202', label: 'Red' },
    { color: '#f5d103', label: 'Yellow' },
    { color: '#ffb1d5', label: 'Light pink' },
  ];

const HairDyePage = () => {
  return (
    <React.Fragment>
                  <TextSection fontstyle={{ fontSize: "1.2rem" }}>
                    I've dyed my hair since i was 14, and quickly i realized i didn't need a hairdresser to do it. When i wanted more complicated things, like gradients or highlights, i just learned how to do them myself, and studied the differences between different techniques and products. I started doing it to my friends too, who noticed my expertise, and for a long time now they've been saying i should start a business so here we are!
                  </TextSection>
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
                  <TextSection>
                    Trust me when i say hairdressers are not transparent with you, but I will be. And yes you can lift your hair to pure white without frying it but it takes several sessions and patience.
                  </TextSection>
                  <TextSection title="How it works" h5 fontstyle={{ fontSize: "1.2rem" }}>
                    I will define a fair price based on what you ask, your hair type/length, etc. You can then choose to either buy the materials (dye/bleach) yourself and go as cheap or expensive as you like, and keep the material afterwards, or you can use mine if i have it, for a simbolic price increase
                  </TextSection>
                  <TextSection title='Colors I currrently have:'>
                  <CircleArray items={items}/>
                  </TextSection>
    </React.Fragment>
  )
}

export default HairDyePage