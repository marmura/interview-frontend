import React from 'react';
import ReactDOM from 'react-dom';
import MyWidget from '../../../widget';

const CheckoutButton = MyWidget.driver('react', {
    React: React,
    ReactDOM: ReactDOM
});

export default CheckoutButton;
