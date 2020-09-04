import React from 'react';

const CartItem = ({ item, deleteFromTheCart }) => {
    return (
        <div className='cart-item'>
            <img src={item.url} width='130px' />
            <i 
                class="fa fa-trash-o trash-icon" 
                onClick={() => deleteFromTheCart(item)} 
                style={{fontSize:'24px'}}
            ></i>
            <p>$5.99</p>
        </div>
    )
}

export default CartItem;