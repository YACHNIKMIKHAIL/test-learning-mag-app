import React from 'react';
import {MainOrderCase} from './OrderStyles';

const Order = () => {
    return (
        <MainOrderCase>
            <input type="text" placeholder={'name'}/>
            <input type="text" placeholder={'surname'}/>
            <input type="text" placeholder={'address'}/>
            <input type="text" placeholder={'phone'}/>
            <button>ORDER</button>
        </MainOrderCase>
    );
};

export default Order;