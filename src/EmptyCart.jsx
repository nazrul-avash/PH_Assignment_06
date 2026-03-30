import React from 'react';

const EmptyCart = () => {
    return (
        <div className='bg-white p-6 rounded-lg shadow-lg max-w-full'>
            <h1>Your Cart</h1>
            <div className='text-center'>
                <img src='/public/images/emptyCart.jpg'></img>
                <h1>Your Cart is Empty!</h1>
            </div>
        </div>
    );
};

export default EmptyCart;