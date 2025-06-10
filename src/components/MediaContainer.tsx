import React, { useState } from 'react';
import "./MediaContainer.css";
import ReactPlayer from 'react-player';

interface MediaContainerProps {
  mediaItems: Array<{
    path: string;
    type: 'image' | 'video';
    title?: string;
    note?: string;
    link?: string;
    aspectRatio?: 'original' | 'square';
    noShadow?: 'true';
    smaller?: 'true'
  }>;
}

const MediaContainer = ({ mediaItems }: MediaContainerProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div id="beige-section" className="beige-section">
      <div 
        className={`media-grid ${mediaItems.length === 1? 'single-item' : ''}`}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {mediaItems.map((media, index) => (
          <div 
            key={index} 
            className={`${media.smaller === 'true' ? 'media-item-sml' : 'media-item'} ${media.aspectRatio === 'square' ? 'square-aspect' : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
          >
            <div className={`${media.noShadow === 'true' ? 'media-wrapper-ns' : 'media-wrapper'}`}>
              {media.type === "image" ? (
                <img 
                  src={media.path} 
                  className={`media-content ${media.aspectRatio === 'square' ? 'square-content' : ''}`}
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
                  className={`media-content ${media.aspectRatio === 'square' ? 'square-content' : ''}`}
                  onClick={media.link ? () => window.open(media.link, '_blank') : () => {}}
                />
              )}
            </div>
            {media.title && <h5 className="media-title">{media.title}</h5>}
            {media.note && <p id="label">{media.note}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaContainer;