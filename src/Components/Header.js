import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Contex';

const Header = () => {
    const { cartItems } = useContext(Context);    

    return(
        <header>
            <Link to='/'><h1>Pic Some</h1></Link>
            <Link to='/cart'><p><i className={cartItems.length !== 0 ? "fa fa-cart-plus" : "fa fa-shopping-cart"} style={{fontSize:'36px'}}></i> {cartItems.length}</p></Link>
        </header>
    )
}

export default Header;