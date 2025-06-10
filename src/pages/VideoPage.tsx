import React from 'react'
import MediaContainer from '../components/MediaContainer'
import TextSection from '../components/TextSection'
import ReactPlayer from 'react-player';

const VideoPage = () => {
  return (
    <React.Fragment>
    <MediaContainer
        mediaItems={[
          {
            path: "src/assets/video/map.mp4",
            type: "video",
          },
          {
            path: "src/assets/video/graph.mp4",
            type: "video",
          },
          {
            path: "src/assets/video/bars.mp4",
            type: "video",
          },
        ]}
      />
      <TextSection fontstyle={{ fontSize: "1.2rem" }}>
        Some snippets from a motion graphics video showing some stats and data that I made for my school for their digital promotional material
      </TextSection>
      <MediaContainer
        mediaItems={[
          {
            path: "src/assets/video/visualizer.mp4",
            type: "video",
            title: "visualizer for a song",
          },
        ]}
      />
      <TextSection >
        Prices can vary widely since this type of commission can be virtually anything. Tell me what you need and let's negotiate!
      </TextSection>
      </React.Fragment>
  )
}

export default VideoPage