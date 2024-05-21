import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData'
import Product from './Products/Product';
import Cart from './Cart/Cart';
const Shop = () => {
    const first10=fakeData.slice(0,10);
    const [products,setProducts]=useState(first10);
    const [cart,setCart]=useState([]);

    const handleAddProduct=(product)=>{
        console.log(product);//for test only
        setCart([...cart,product]);
    }

    return (
        <div className='Shop'>
            <div className="Product-container">
                <ul>
                    {
                        products.map(p=><Product key={p.key} cart={true} handleAddProduct={handleAddProduct} product={p}></Product>)
                    }
                </ul>
            </div>
            <div className="Cart-container">
                    <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;