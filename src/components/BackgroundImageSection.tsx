import React from "react";
import "./BackgroundImageSection.css";
import "./TextSection.css"

const BackgroundImageSection: React.FC = () => {

  const handleScrollDown = () => {
    const section = document.getElementById("beige-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };                                                                                                                                            

  return (
    <div>
      <div className="background-image-container1">
        <div className="content">
          <button className="start-button" onClick={handleScrollDown}>
            Start
          </button>
        </div>
      </div>

      <div id="beige-section" className="beige-section" style={{paddingTop:'100px', paddingBottom:'70px'}}>
        <h2><strong>PHANTA'S</strong> EVERYTHING WEBSITE</h2>
        <p>
        All you could ever want from yours truly.
<br/>
Not sure what you want or what's going on? Check out some of my popular services below: 
        </p>
      </div>
    </div>
  );
};

export default BackgroundImageSection;
