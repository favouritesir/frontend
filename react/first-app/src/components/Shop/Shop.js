import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from './Cart/Cart';
import Product from './Product/Product';
import './Shop.css'

const Shop = () => {
    const first10=fakeData.slice(0,10);
    const [products,setProducts]=useState(first10)
    const [cart,setCart]=useState([])

    function handleAddProduct(products){
        console.log("Product Added",products)
        setCart([...cart,products])
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(p=><Product obj={p} cart={true} handler={handleAddProduct}></Product>)
                }                
            </div>   
            <div className="cart-container">
               <Cart obj={cart}></Cart>                
            </div> 
        </div>
    );
};

export default Shop;