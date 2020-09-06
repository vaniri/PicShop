import React, { useState } from 'react';

const CartItem = ({ item, deleteFromTheCart, price }) => {
    const [ hovered, setHovered ] = useState(true);
    const iconClassName = hovered ? "fa fa-trash-o trash-icon" : "fa fa-trash trash-icon";

    return (
        <div className='cart-item'>
            <img src={item.url} width='130px' />
            <i 
                class={iconClassName}
                onClick={() => deleteFromTheCart(item)} 
                onMouseOver={() => setHovered(false)}
                onMouseLeave={() => setHovered(true)}
                ></i>
            <p>{price}</p>
        </div>
    )
}

export default CartItem;