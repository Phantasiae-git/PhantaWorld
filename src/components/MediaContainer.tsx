import React, { useState } from 'react';
import "./MediaContainer.css";
import ReactPlayer from 'react-player';

interface MediaContainerProps {
  mediaItems: Array<{
    path: string;
    type: 'image' | 'video';
    title: string;
    note?: string;
    link?: string;
  }>;
}

const MediaContainer = ({ mediaItems }: MediaContainerProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div id="beige-section" className="beige-section">
      <div 
        className='media-grid'
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {mediaItems.map((media, index) => (
          <div 
            key={index} 
            className="media-item"
            onMouseEnter={() => setHoveredIndex(index)}
          >
            <div className="media-wrapper">
              {media.type === "image" ? (
                <img 
                  src={media.path} 
                  className="media-content"
                  loading="lazy"
                  alt={`${media.title}`} 
                />
              ) : (
                <ReactPlayer
                  url={media.path}
                  playing={hoveredIndex === null || hoveredIndex === index}
                  loop
                  muted
                  width="100%"
                  height="100%"
                  className="media-content"
                  onClick={media.link ? () => window.open(media.link, '_blank') : () => {}}
                  
                />
              )}
            </div>
            <h5 className="media-title">{media.title}</h5>
            {media.note && <p id="label">
               {media.note}
            </p>

            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaContainer;