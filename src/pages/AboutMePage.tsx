import React from 'react'
import TopSection from "../components/TopSection";
import TextSection from '../components/TextSection';
import Footer from '../components/Footer';
import MediaContainer from '../components/MediaContainer';
import ImageTextSection2 from '../components/ImageTextSection2';


const AboutMePage = () => {
  return (
    <>
	<div id="beige-section" className="beige-section">
	<ImageTextSection2
  imageUrl="src/assets/images/linus.png"
  paragraph="Hello and welcome to my website, Phanta's World. My name is Raquel although I'm better known as Phanta, I'm 21, and I'm a programmer, 
				but as you'll find browsing around here, I have a whole myriad of interests and skills, that I've now brought to life."
/>
</div>
<TextSection title='Frequently asked questions'>

Q: "She has so many services, doesn't that mean she's a Jack-of-all-trades who's not that good at any of these things?"
<br/>
A: Wrong, i'm just good at everything.

</TextSection>
	</>
  )
}

export default AboutMePage