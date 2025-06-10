import React from "react";
import TopSection from "../components/TopSection";
import TextSection from "../components/TextSection";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <React.Fragment>
      <TopSection />
      <TextSection title="404 NOT FOUND" type="rn">
        <p>The page you're looking for doesn't seem to exist, or maybe it's still
        under construction? Anyways, click the below button to go back home:</p>
        <div className="contain2">
          <Link to="/" className="pill-link-button">
            Home
          </Link>
        </div>
      </TextSection>
    </React.Fragment>
  );
};

export default NotFoundPage;
