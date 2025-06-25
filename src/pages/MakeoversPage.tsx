import React from 'react'
import MediaContainer from '../components/MediaContainer'
import TextSection from '../components/TextSection'

const MakeoversPage = () => {
  return (
    <React.Fragment>
      <MediaContainer mediaItems={[
  {
    path: "src/assets/images/charlie.png",
    type: "image",
    title: "Cosplay makeover as Eren yeager",
  },
  {
    path: "src/assets/images/charlie1.jpg",
    type:"image",
    title: "Close up",
  },
]}/>
<TextSection fontstyle={{ fontSize: "1.4rem" }}>
  This service works both for cosplay help, from the makeup to wig and outfit styling, and regular makeovers as in trusting my aesthetic sense and letting me decide, or deciding with me, what we should change to give you a fresh new look. Then we can break those changes down into actionable steps that i can then perform on you with your consent for an adequate price. 
</TextSection>
<TextSection fontstyle={{ fontSize: "1.2rem" }}>
  For example, I can look at you and assign the eyeliner style that looks better with your eye shape, what colors look better with your tones, how you could do your eyebrows, and so on. Based on this discussion we then form a plan and get to work, slowly experimenting and evaluating feedback!
</TextSection>
</React.Fragment>
  )
}

export default MakeoversPage