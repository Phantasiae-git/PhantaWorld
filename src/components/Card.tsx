import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import "./Card.css";

interface CardProps {
  mediaPath: string;
  mediaType: "image" | "video";
  children: ReactNode;
  text: string;
  page: string;
}

const Card = ({ mediaPath, mediaType, children, text, page }: CardProps) => {
  const styles = {
    width: "20rem",
  };

  return (
    <div className="card" style={styles}>
      <div className="media-container">
        {mediaType === "image" ? (
          <img src={mediaPath} loading="lazy" className="card-img-top" alt="..." />
        ) : (
          <ReactPlayer
            url={mediaPath}
            playing={true}
            loop
            muted
            pip={false}
            width="100%"
            height="100%"
          />
        )}
      </div>

      <div className="card-body">
        <h5 className="card-title">{children}</h5>
        <p className="card-text">{text}</p>
        <Link to={page} className="btn btn-primary">
          Explore {children}
        </Link>
      </div>
    </div>
  );
};

export default Card;