import React from 'react';
import useHover from '../hooks/useHover';

const CartItem = ({ item, deleteFromTheCart, price }) => {
    const [ hovered, ref ] = useHover();
    const iconClassName = hovered ? "fa fa-trash trash-icon" : "fa fa-trash-o trash-icon" ;

    return (
        <div className='cart-item'>
            <img src={item.url} width='130px' />
            <i 
                class={iconClassName}
                onClick={() => deleteFromTheCart(item)} 
                ref={ref}
                ></i>
            <p>{price}</p>
        </div>
    )
}

export default CartItem;