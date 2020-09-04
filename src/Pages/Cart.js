import React,  { useContext } from 'react';
import { Context } from '../Contex';
import CartItem from '../Components/CartItem';

const Cart = () => {
    const { cartItems, deleteFromTheCart } = useContext(Context);

    return(
        <main className='cart-page'>
            <h1>Check out</h1>
            {cartItems.map(item => (
                <CartItem key={item.id} item={item} deleteFromTheCart={deleteFromTheCart}/>
            ))}
            <p classname='total-cost'>Total: </p>
            <div className='order-button'>
                <button>Place Order</button>
            </div>
        </main>
    )
}

export default Cart;