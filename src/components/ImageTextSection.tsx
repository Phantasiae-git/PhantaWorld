import React from "react";
import TextSection from "./TextSection";
import "./ImageTextSection.css"

interface cont{
    title?: string;
  content: string;
}

interface ImageTextSectionProps {
  imageUrl: string;
  content: cont[]
}

const ImageTextSection: React.FC<ImageTextSectionProps> = ({
  imageUrl,
  content,
}) => {
  return (
    <React.Fragment>
        <div className="divide">
        <div className="left">
      <div className="media-wrapper2">
        <img src={imageUrl} className={"media-content"} loading="lazy" />
      </div>
      </div>
      <div className="right">
        {content.map((item, index) => (
            <div key={index}>
        <TextSection title={item.title} fontstyle={{fontSize:"1rem",  whiteSpace: 'pre-line'}} titlestyle={{fontSize:"1.4rem"}} id="sizes-content" h5>
            {item.content}
        </TextSection>
        </div>
))}
      </div>
      </div>
    </React.Fragment>
  );
};

export default ImageTextSection;
