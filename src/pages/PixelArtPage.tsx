import React from 'react'
import ImageList from '../components/ImageList';
import MediaContainer from '../components/MediaContainer';
import TextSection from '../components/TextSection';

const PixelArtPage = () => {
  return (
    <React.Fragment>
      <div id="beige-section" className="beige-section" style={{padding:"30px 30px 0px"}}>
    <MediaContainer
        mediaItems={[
          {
            path: "src/assets/images/Rei_scaled_16x_pngcrushed.png",
            type: "image",
            title: "Rei Ayanami sprite",
            noShadow: "true",
            smaller: 'true',
          },
          {
            path: "src/assets/images/Shinji_scaled_16x_pngcrushed.png",
            type: "image",
            title: "Shinji Ikari sprite",
            noShadow: "true",
            smaller: 'true',
          },
          {
            path: "src/assets/images/Asuka_scaled_16x_pngcrushed.png",
            type: "image",
            title: "Asuka Langley sprite",
            noShadow: "true",
            smaller: 'true',
          },
          {
            path: "src/assets/images/angel.png",
            type: "image",
            title: "Sachiel (enemy) sprite",
            noShadow: "true",
            smaller: 'true',
          },
        ]}
      />
    </div>
    <TextSection fontstyle={{ fontSize: "1.2rem" }}>
        These are player/enemy sprites for an Evangelion-inspired game (that I have yet to finish :P) - I do these types of 64x64 sprites for 6.99
      </TextSection>
    <MediaContainer
        mediaItems={[
          {
            path: "src/assets/images/misato.png",
            type: "image",
            title: "Misato Kitsuragi menu art",
            noShadow: "true",
          },
        ]}
      />
    <TextSection >
        I'm still a begginer at pixel art so I'm sticking with simple things for now, but if you'd like me to try something more elaborate,, I'm down if you're down!
      </TextSection>
    </React.Fragment>
  )
}

export default PixelArtPage