import React from 'react'
import MediaContainer from '../components/MediaContainer'
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import { isMobile, isTablet } from "react-device-detect";
import TextSection from '../components/TextSection';

const mediaItems = [
  {
    id: 1,
    path: "src/assets/images/rafared.jpg",
    title: "Copper",
  },
  {
    id: 2,
    path: "src/assets/images/rafaroxo.jpg",
    title: "Purple",
  },
  {
    id: 3,
    path: "src/assets/images/rafawhite.jpg",
    title: "Grey",
  },
  {
    id: 4,
    path: "src/assets/images/rafabordeaux.jpg",
    title: "Bordeaux",
  },
  {
    id: 5,
    path: "src/assets/images/rafablue.jpg",
    title: "Blue",
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

const Photography = () => {
  return (
    <React.Fragment>
      <MediaContainer mediaItems={[
  {
    path: "src/assets/images/je_before.png",
    type: "image",
    title: "Before",
    aspectRatio: "square"
  },
  {
    path: "src/assets/images/je_after.png",
    type:"image",
    title: "After",
  },
]}/>
<TextSection>
  I can edit your instagram pictures, giving them the mood you long for, as in the above example, or I can make a composition with more elements like in the below examples. I can also fix or change things like remove a passerby in the background, change text etc in a realistic and seamless way.
</TextSection>
<MediaContainer mediaItems={[
  {
    path: "src/assets/images/me_warm.jpg",
    type: "image",
    title: "Graphic composition w/ warm tones",
  },
  {
    path: "src/assets/images/me_cold.jpg",
    type:"image",
    title: "Graphic composition w/ cold tones",
  },
]}/>
<MediaContainer mediaItems={[
  {
    path: "src/assets/images/header.png",
    type: "image",
    title: "Banner/Website header",
  },
]}/>
<TextSection>
  <p>I can also change the color of your hair more accurately than filters so you make the right choice when using my <Link to="/hairdying">hair dying service ;)</Link></p>
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
      </React.Fragment>
  )
}

export default Photography