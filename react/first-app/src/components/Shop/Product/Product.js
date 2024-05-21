// import ReactDOM from 'react-dom'
import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (data) => {
    let obj=data.obj;
    return (
        <div className='product'>
            <div className="product-img">
                <img src={obj.img} alt="" />
            </div>
            <div className="product-info">
                <h4><Link to={"/product/"+obj.key}>{obj.name}</Link></h4><br />
                <p><small>-by {obj.seller}:</small></p>
                <p>{obj.price} $</p>
                <p><small>Only {obj.stock} left in stock - order soon </small></p>
                {data.cart&&<button onClick={()=>data.handler(data.obj)} id="addCart"><FontAwesomeIcon icon={faShoppingCart}/> Add to Cart</button>}
            </div>
        </div>
    );
};

export default Product;