import React from "react";
import "./BackgroundImageSection.css"; // Import the CSS file for styling

const BackgroundImageSection: React.FC = () => {
  // Function to handle the button click and scroll down
  const handleScrollDown = () => {
    const section = document.getElementById("beige-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };                                                                                                                                            

  return (
    <div>
      {/* Full-viewport background image section */}
      <div className="background-image-container">
        <div className="content">
          <button className="start-button" onClick={handleScrollDown}>
            Start
          </button>
        </div>
      </div>

      {/* Beige section with text */}
      <div id="beige-section" className="beige-section">
        <h2><strong>Phanta's</strong> everything website</h2>
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
