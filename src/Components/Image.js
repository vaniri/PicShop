import React, { useState, useContext } from 'react';
import { Context } from '../Contex';

const Image = ({ key, img, className }) => {
    const [hovered, setHovered] = useState(false);
    const { toggleFavorite } = useContext(Context);


    const returnIcon = () => {
        if (img.isFavorite) {
            return <i
                className="fa fa-heart favorite"
                style={{ fontSize: '36px' }}
                onClick={() => toggleFavorite(img.id)}
            ></i>
        } else if (hovered) {
            return <i
                className="fa fa-heart-o favorite"
                style={{ fontSize: '36px' }}
                onClick={() => toggleFavorite(img.id)}
            ></i>;
        }
    }

    const cartIcon = hovered && <i className="fa fa-plus-circle cart" style={{ fontSize: '36px' }}></i>;

    return (
        <div
            className={`${className} image-container`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img
                className="image-grid"
                alt={key}
                src={img.url}
            />
            {returnIcon()}
            {cartIcon}

        </div>
    )
}

export default Image;