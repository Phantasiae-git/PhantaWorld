import React, { ReactNode } from "react";

interface Props {
  mediaPath: string; // Path to the image or video
  mediaType: "image" | "video"; // Specify whether it's an image or video
  children: ReactNode;
  text: string;
  page: string;
}

const Card = ({ mediaPath, mediaType, children, text, page }: Props) => {
  const styles = {
    width: "20rem",
  };

  return (
    <div className="card" style={styles}>
      {/* Conditionally render image or video */}
      {mediaType === "image" ? (
        <img src={mediaPath} className="card-img-top" alt="..." />
      ) : (
        <video className="card-img-top" controls>
          <source src={mediaPath} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      <div className="card-body">
        <h5 className="card-title">{children}</h5>
        <p className="card-text">{text}</p>
        <a href={page} className="btn btn-primary">
          Explore {children}
        </a>
      </div>
    </div>
  );
};

export default Card;