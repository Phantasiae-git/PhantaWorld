import React from "react";
import TopSection from "../components/TopSection";
import TextSection from "../components/TextSection";
import ImageList from "../components/ImageList";
import ImageTextSection from "../components/ImageTextSection";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { isMobile, isTablet } from "react-device-detect";
import ReactPlayer from "react-player";
import MediaContainer from "../components/MediaContainer";

interface Service {
  name: string;
  shortDescription: string;
  longDescription: string;
  mediaPath: string;
  mediaType: "image" | "video";
}

const imageData = [
  {
    imageUrl: "src/assets/images/sketch.jpg",
    title: "Sketch",
    listItems: [
      { text: "Head: 5,99" },
      { text: "Bust: 6,99" },
      { text: "Full body: 8,5" },
    ],
  },
  {
    imageUrl: "src/assets/images/lineart.png",
    title: "Lineart",
    listItems: [
      { text: "Head: 9" },
      { text: "Bust: 11.99" },
      { text: "Full body: 16,99" },
    ],
  },
  {
    imageUrl: "src/assets/images/flats.png",
    title: "Flat Colors",
    listItems: [
      { text: "Head: 9,99" },
      { text: "Bust: 12,99" },
      { text: "Full body: 17,99" },
    ],
  },
  {
    imageUrl: "src/assets/images/simple.png",
    title: "Simple Render",
    listItems: [
      { text: "Head: 14,5" },
      { text: "Bust: 16,99" },
      { text: "Full body: 29,99" },
    ],
  },
  {
    imageUrl: "src/assets/images/rei.png",
    title: "Full Render",
    listItems: [
      { text: "Head: 29,99" }, 
      { text: "Bust: 34,99" },
      { text: "Full body: 79,99" },
    ],
  },
  
];

const content = [
  {
    title: "About sizes",
    content: "The image on the left shows what each size means, note however that head means a portrait, full of detail, and by comparison the full body won't have a face as detailed, for example. Basically everything is proportional :)"
  },
  {
    title: "Add-ons ✨",
    content: "Backgrounds: simple +2€, complex negotiable \n\nGraphic composition elements: +1€ (simple doodles, shapes, stylized text or fx)\n\nExtra character: every price is for 1 character, so just multiply :)"
  },
  {
    title: "❌ Won't draw: nsfw, mecha, furries, regular animals",
    content: ""
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

const mediaItems = [
  {
    id: 1,
    path: "src/assets/images/layla.PNG",
    title: "Bust + Full Render + Complex background",
  },
  {
    id: 2,
    path: "src/assets/images/self_red.PNG",
    title: "Head + Full Render (DE style, cheaper)",
  },
  {
    id: 3,
    path: "src/assets/images/Furina.png",
    title: "Full Body + Full Render + Complex background",
  },
  {
    id: 4,
    path: "src/assets/images/graphic_comp_resize.png",
    title: "Bust x2 + Simple Render + Graphic elements",
  },

  {
    id: 5,
    path: "src/assets/images/marcy.png",
    title: "Bust + Full Render + Simple background",
  },
  {
    id: 6,
    path: "src/assets/images/jinx.PNG",
    title: "Head + Full Render + Complex background",
  },
];

const ArtPage = ({ service }: { service: Service }) => {
  return (
    <React.Fragment>
      <div id="beige-section" className="beige-section" style={{padding:"30px 30px 0px"}}>
      <ImageList items={imageData} />
      </div>
      <TextSection id="come-get">
      Now some people would call these prices "underselling myself", i call it come get yours before I change my mind 😼
      </TextSection>
      <div id="sizes" className="beige-section">
      <ImageTextSection imageUrl="src/assets/images/sizes.png" content={content}/>
      <MediaContainer mediaItems={[
          {
            path: "src/assets/images/background.png",
            type: "image",
            title: "Simple Background",
          },
          {
            path: "src/assets/images/graphic_elems2.jpeg",
            type: "image",
            title: "Graphic Elements",
          },
          {
            path: "src/assets/images/rei.png",
            type: "image",
            title: "Simple Background + Graphic Elements",
          },
        ]}/>
        </div>
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
  );
};

export default ArtPage;
