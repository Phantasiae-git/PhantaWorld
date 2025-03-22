import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./components/Card";
import { isMobile, isTablet } from "react-device-detect";
import BackgroundImageSection from "./components/BackgroundImageSection";
import artcomms from "./assets/images/artComms.png";

function App() {
  const deviceType = isMobile ? "mobile" : isTablet ? "tablet" : "desktop";

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const [alert, setAlert] = useState(false);
  return (
    <div>
      {/* <Button
        onClick={() => {
          setAlert(true);
        }}
      >
        ola
      </Button>
      {alert && (
        <Alert
          onClick={() => {
            setAlert(false);
          }}
        >
          alerta
        </Alert>
      )} */}
      <Navbar />
      <BackgroundImageSection />
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
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
        <Card
          mediaPath="../assets/img/photo.png"
          mediaType="image"
          text="olaolaola"
          page="/photography"
        >
          Photography
        </Card>
        <Card
          mediaPath={artcomms}
          mediaType="image"
          text="yaaaaaaa"
          page="/art"
        >
          Art Commissions 1
        </Card>
        <Card
          mediaPath="../assets/img/photo.png"
          mediaType="image"
          text="olaolaola"
          page="/photography"
        >
          Photography
        </Card>
        <Card
          mediaPath="../assets/img/photo.png"
          mediaType="image"
          text="yaaaaaaa"
          page="/art"
        >
          Art Commissions
        </Card>
        <Card
          mediaPath="../assets/img/photo.png"
          mediaType="image"
          text="olaolaola"
          page="/photography"
        >
          Photography
        </Card>
        <Card
          mediaPath="../assets/img/photo.png"
          mediaType="image"
          text="yaaaaaaa"
          page="/art"
        >
          Art Commissions
        </Card>
      </Carousel>
    </div>
  );
}

export default App;
