import React from 'react';
import EmptyCart from './EmptyCart';
import Cart from './Cart';

const CartData = ({cart,setCart}) => {
    return (
        <div>
            {cart.length <=0?(<EmptyCart></EmptyCart>):
            (<Cart cart={cart} setCart={setCart}></Cart>)}
        </div>
    );
};

export default CartData;