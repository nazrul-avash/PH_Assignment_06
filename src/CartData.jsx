import React from 'react';
import EmptyCart from './EmptyCart';

const CartData = ({cart,setCart}) => {
    return (
        <div>
            {cart.length <=0?(<EmptyCart></EmptyCart>):
            (<></>)}
        </div>
    );
};

export default CartData;