import React from 'react';

const Image = ({ key, img, className }) => {
    return(
        <div className={`${className} image-container`}>
            <img className="image-grid" alt={key} src={img} />
        </div>
    )
}

export default Image;