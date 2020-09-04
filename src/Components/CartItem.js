import React from 'react';

const CartItem = ({ item }) => {
    return (
        <div className='cart-item'>
            <i className></i>
            <img src={item.url} width='130px' />
            <p>$5.99</p>
        </div>
    )
}

export default CartItem;