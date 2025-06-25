import React from 'react';
import './ImageTextSection2.css';

interface ImageTextSection2Props {
    imageUrl: string;
    title?: string;
    subtitle?: string;
    paragraph: string;
}

const ImageTextSection2: React.FC<ImageTextSection2Props> = ({ 
    imageUrl, 
    title, 
    subtitle, 
    paragraph 
}) => {
    return (
        <div className="image-text-container1">
            <div className="image-wrapper1">
                <img src={imageUrl} className="section-image1" />
            </div>
            <div className="text-content">
                {subtitle && <h5>{subtitle}</h5>}
                {title && <h3>{title}</h3>}
                <p>{paragraph}</p>
            </div>
        </div>
    );
};

export default ImageTextSection2;