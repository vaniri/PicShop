import React,  { useContext, useState, useEffect } from 'react';
import { Context } from '../Contex';
import CartItem from '../Components/CartItem';

const Cart = () => {
    const [ total, setTotal ] = useState();
    const [ buttonText, setButtonText ] = useState("Place Order");
    const { cartItems, deleteFromTheCart, emptyCart } = useContext(Context);
    const price = 5.99

    const placedOrder = () => {
        setButtonText("Orderring....");
        setTimeout(() => {
            console.log("Order placed!");
            setButtonText("Place Order");
            emptyCart();
        }, 3000);
    }

    const calcTotal = () => {
        setTotal((cartItems.length * price).toLocaleString("en-US", {style: "currency", currency: "USD"}));
    }

    useEffect(calcTotal, [ cartItems ]);

    return(
        <main className='cart-page'>
            <h1>Check out</h1>
            {cartItems.map(item => (
                <CartItem key={item.id} item={item} deleteFromTheCart={deleteFromTheCart} price={price}/>
            ))}
            {cartItems.length !== 0 ? <div><div className='order-button'>
            <button onClick={() => placedOrder()}>{buttonText}</button></div> 
            <p className='total-cost'>Total: {total}</p></div> :
            <p>You have no items in your cart! Add something you like!</p>
            }
        </main>
    )
}

export default Cart;