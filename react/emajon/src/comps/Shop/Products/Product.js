import React from 'react';
import './Product.css'
import { FaBeer,FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Product = (props) => {
    const { img, name, seller, price, stock, key } = props.product;
    return (
        <div className='Product'>
            <div className="Pimg">
                <img src={img} alt="" />
            </div>

            <div className="Pdes">
                <h4><Link to={"/product/"+key}>{name}</Link></h4>
                <p><small>by:{seller}</small></p>
                <p>$ {price}</p>
                <p><small>only {stock} left on the store</small></p>
                {props.cart&&<button className='cart' onClick={()=>props.handleAddProduct(props.product)}><FaShoppingCart /> add to cart</button>}
            </div>
        </div>
    );
};

export default Product;