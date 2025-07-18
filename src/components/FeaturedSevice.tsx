import React from "react";
import TextSection from "./TextSection";
import "./FeaturedService.css";

const FeaturedSevice = () => {
  return (
    <div id="beige-section" className="beige-section featured">
		<div className="photo-fan">
      <div className="left-t">
        <h2 className="featured-text">Featured Service</h2>
		<div style={{ marginTop:'80px'}}>
		<h5 className="featured-title">Art Commissions</h5>
		<p className="featured-desc">The featured service is Art Commissions!
			 Enjoy discounts while it's hot and get the perfect gift for yourself, 
			 the in laws, or even the dog!</p>
		</div>
      </div>
	   <div className="right-p">
    <img src="/src/assets/images/layla.PNG" alt="Photo 1" className="photo photo-1" />
    <img src="/src/assets/images/self_red.PNG" alt="Photo 2" className="photo photo-2" />
      </div>

		</div>
    </div>
  );
};

export default FeaturedSevice;
