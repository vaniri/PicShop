import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <Link to='/'><h1>Pic Some</h1></Link>
            <Link to='/cart'><i className="fa fa-shopping-cart" style={{fontSize:'36px'}}></i></Link>
        </header>
    )
}

export default Header;