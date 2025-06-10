import React from 'react';
import './ImageList.css';

interface ListItem {
  text: string;
}

interface ImageItem {
  imageUrl: string;
  title: string;
  listItems?: ListItem[];
}

interface ImageListProps {
  items: ImageItem[];
}

const ImageList: React.FC<ImageListProps> = ({ items }) => {
  return (
    <div className="image-list-container">
      <div className="image-row">
        {items.map((item, index) => (
          <div key={index} className="image-item">
            <div className="image-wrapper">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="list-image" 
                loading="lazy"
              />
            </div>
            <h3 className="image-title">{item.title}</h3>
            {item.listItems && <ul className="item-list">
              {item.listItems.slice(0, 3).map((listItem, idx) => (
                <li key={idx} className="list-item">
                  {listItem.text}
                </li>
              ))}
            </ul>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageList;