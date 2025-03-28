import React from "react";
import MediaContainer from "../components/MediaContainer";
import TextSection from "../components/TextSection";
import { isMobile, isTablet } from "react-device-detect";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReactPlayer from "react-player";
import { useInView } from "react-intersection-observer";

const EditsPage = () => {
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
      path: "src/assets/video/webm/chainsaw.webm",
      link: "https://www.instagram.com/p/Cf9brwjKbLC/",
      altText: "Manga Style",
    },
    {
      id: 2,
      path: "src/assets/video/webm/glitch.webm",
      link: "https://www.instagram.com/p/CE9xNlWIahD/",
      altText: "Glitch Style",
    },
    {
      id: 3,
      path: "src/assets/video/webm/flow.webm",
      link: "https://www.instagram.com/p/CITld1DITOn/",
      altText: "Flow Style",
    },
    {
      id: 4,
      path: "src/assets/video/webm/saiki.webm",
      type: "image",
      link: "https://www.instagram.com/p/CMAgFFzqWas/",
      altText: "3D Candy Style",
    },
    {
      id: 5,
      path: "src/assets/video/webm/berserk.webm",
      type: "image",
      link: "https://www.instagram.com/p/CapokiMolA3/",
      altText: "Manga Style",
    },
  ];

  return (
    <React.Fragment>
      <MediaContainer
        mediaItems={[
          {
            path: "src/assets/video/she-a-rock.mp4",
            type: "video",
            title: "Manga style",
            note: "Focuses on storytelling with manga panels and 3d transitions, can also have animations",
            link: "https://www.instagram.com/p/DGs_-rltPd0/",
          },
          {
            path: "src/assets/video/webm/arcane.webm",
            type: "video",
            title: "Simple style",
            note: "A classic, minimalistic style that prioritizes clip selection, aesthetic and coloring",
            link: "https://www.instagram.com/p/CWyd86EqUeb/",
          },
          {
            path: "src/assets/video/shinobu.mp4",
            type: "video",
            title: "3D candy style",
            note: "A creative and colorful style with 3D shapes and typography, with lots of camera movement",
            link: "https://www.instagram.com/p/Cb0ERT_I7M8/",
          },
        ]}
      />
      <TextSection>
        I can also do more niche styles like glitch and flow, if you wish for a
        commission in that style please contact me about it since the prices can
        vary a lot more
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
          <ReactPlayer
            key={media.id}
            url={media.path}
            loop
            playing={true}
            muted
            width="100%"
            height="100%"
            playsinline
            className="media-content"
          />
        ))}
      </Carousel>
    </React.Fragment>
  );
};

export default EditsPage;
