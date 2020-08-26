import React, { useState } from 'react';

const Image = ({ key, img, className }) => {
    const [ hovered, setHovered] = useState(false);
    const heaartIcon = hovered && <i className="fa fa-heart favorite" style={{fontSize:'36px'}}></i>;
    const cartIcon = hovered &&  <i className="fa fa-plus-circle cart" style={{fontSize:'36px'}}></i>;

    return(
        <div className={`${className} image-container`}>
            <img 
                onMouseEnter={() => setHovered(true)} 
                onMouseLeave={() => setHovered(false)} 
                className="image-grid"
                alt={key} 
                src={img} 
            />
            {heaartIcon}
            {cartIcon}

        </div>
    )
}

export default Image;