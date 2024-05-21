import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../../../fakeData';
import Product from '../Product';

const Pdetails = () => {
    const {productKey}=useParams();
    const product=fakeData.find(p=>p.key===productKey);
    return (
        <div>
            <h1>details for {productKey}</h1>
            <Product cart={false} product={product}></Product>
        </div>
    );
};

export default Pdetails;