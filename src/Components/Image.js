import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../Contex';

const Image = ({ img, className }) => {
    const [hovered, setHovered] = useState(false);
    const { toggleFavorite, addToCart } = useContext(Context);


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

    const cartIcon = hovered && <i 
        className="fa fa-plus-circle cart"
        style={{ fontSize: '36px' }}
        onClick={() => addToCart(img)}
        ></i>;

    return (
        <div
            className={`${className} image-container`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img
                className="image-grid"
                alt={img.key}
                src={img.url}
            />
            {returnIcon()}
            {cartIcon}

        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool

    }).isRequired
}

export default Image;