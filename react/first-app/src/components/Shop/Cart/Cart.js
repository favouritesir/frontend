import React from 'react';

const Cart = (data) => {
    const cart=data.obj;
    const totalPrice=cart.reduce((total,product)=>total+product.price,0)
    return (
        <div>
            <h5>Order summary</h5>
            <p>Item ordered: {cart.length}</p>
            <p>Total Price: {totalPrice}</p>
        </div>
    );
};

export default Cart;