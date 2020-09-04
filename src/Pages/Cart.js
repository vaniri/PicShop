import React,  { useContext } from 'react';
import { Context } from '../Contex';
import CartItem from '../Components/CartItem';

const Cart = () => {
    const { cartItems } = useContext(Context);

    return(
        <main classname='cart-page'>
            <h1>Check out</h1>
            {cartItems.map(item => (
                <CartItem key={item.id} item={item}/>
            ))}
            <p classname='total-cost'>Total: </p>
            <div className='order-button'>
                <button>Place Order</button>
            </div>
        </main>
    )
}

export default Cart;