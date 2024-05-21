import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../../fakeData';
import Product from './Product';

const Pdetails = () => {
    const {productKey}=useParams();
    const product=fakeData.find(pd=>pd.key===productKey)
    return (
        <div>
            <h1>{productKey} is ready</h1>
            {JSON.stringify(product)}
            <Product obj={product} cart={false}></Product>
        </div>
    );
};

export default Pdetails;