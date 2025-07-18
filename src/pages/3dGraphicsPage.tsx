import React from 'react'
import MediaContainer from '../components/MediaContainer'
import ImageTextSection from '../components/ImageTextSection'

const content = [
  {
    title: "Disclaimer",
    content: "I've started learning Blender not that long ago, so I'll be honest with you upon your order about being able or not to satisfactorily fulfill it. To the left is a simple character, the first I've ever tried to model. I am, however, confident in my learning ability, to the point where even things I've never tried before are, more often than not, possible to achieve."
  },
];

const ThreeDGraphicsPage = () => {
  return (
    <React.Fragment>
      <MediaContainer mediaItems={[
  {
    path: "src/assets/images/sandarea.png",
    type:"image",
    title: "Simulation of a room filled with sand",
  },
  {
    path: "src/assets/images/architecture.png",
    type: "image",
    title: "Materials and composition study",
  },
  {
    path: "src/assets/images/room.png",
    type:"image",
    title: "Isometric room with small objects",
  },
  {
    path: "src/assets/video/grease_pencil.mp4",
    type:"video",
    title: "Grease Pencil demonstration",
  },
  {
    path: "src/assets/images/fluffy.png",
    type:"image",
    title: "Fur simulation",
    aspectRatio: "square"
  },
]}/>
<div id="beige-section" className="beige-section" style={{padding:"30px 100px 30px"}}>
<ImageTextSection imageUrl='src/assets/images/frog2.png' content={content}/>
</div>
<MediaContainer mediaItems={[
  {
    path: "src/assets/images/logotribe.png",
    type:"image",
    title: "Original logo",
  },
  {
    path: "src/assets/images/balloon.png",
    type: "image",
    title: "\"Balloonification\" in Blender",
    aspectRatio: "square"
  },
]}/>
</React.Fragment>
  )
}

export default ThreeDGraphicsPage