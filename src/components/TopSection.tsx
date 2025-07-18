import React, { useEffect } from "react";
import "./TopSection.css";
import "./3dmodel";

const BackgroundImageSection: React.FC = () => {                                                                                                                                   

  return (
    <div>
      <div className="background-image-container">
      </div>
      <canvas id="renderCanvas"></canvas>
    </div>
  );
};

export default BackgroundImageSection;
