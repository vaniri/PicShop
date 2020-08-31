import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../Contex';

const Image = ({ img, className }) => {
    const [hovered, setHovered] = useState(false);
    const { toggleFavorite, managingCart, cartItems } = useContext(Context);


    const returnFavoriteIcon = () => {
        if (img.isFavorite) {
            return <i
                className="fa fa-heart favorite"
                style={{ fontSize: '26px' }}
                onClick={() => toggleFavorite(img.id)}
            ></i>
        } else if (hovered) {
            return <i
                className="fa fa-heart-o favorite"
                style={{ fontSize: '26px' }}
                onClick={() => toggleFavorite(img.id)}
            ></i>;
        }
    }

    const returnCartIcon = () => {
        if (cartItems.some(item => item.id === img.id)) {
            return <i 
                className="fa fa-shopping-cart cart"
                style={{ fontSize: '26px' }}
                onClick={() => managingCart(img)}
                ></i>;
        } else if (hovered && !cartItems.some(item => item.id === img.id)) {
            return <i 
                className="fa fa-plus-circle cart"
                style={{ fontSize: '26px' }}
                onClick={() => managingCart(img)}
                ></i>;
        }
    }

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
            {returnFavoriteIcon()}
            {returnCartIcon()}
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