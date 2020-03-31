import React from 'react';
import {useSelector} from "react-redux";
import {Col, Row} from "react-bootstrap";
import {useHistory} from "react-router-dom";

import CartItemsList from './views/CartItemsList';
import CartSummary from './views/CartSummary';
import CartSupport from './views/CartSupport';
import CartOtherProducts from './views/CartOtherProducts';

import './cart.css';
import * as routes from "../../constants/router.constants";


const Cart = () => {
    const history = useHistory();
    const cartItems = useSelector(state => state.cart.items);

    const onCartCheckout = () => {
        history.push({
            pathname: routes.PRODUCT_ROUTE,
            state: { clearCart: true }
        });
    };

    return (
        <div className="cart-container">
            <Row>
                <Col xs={12} md={12} lg={9}>
                    <div className="cart-section">
                        <CartItemsList cartItems={cartItems} handleCheckoutClick={onCartCheckout} />
                    </div>
                </Col>
                <Col xs={12} md={12} lg={3}>
                    <div className="cart-section">
                        <CartSummary cartItems={cartItems} handleCheckoutClick={onCartCheckout} />
                    </div>
                    <div className="cart-section mt-4">
                        <CartSupport/>
                    </div>
                    <div className="cart-section cart-section-other-products mt-4">
                        <CartOtherProducts/>
                    </div>
                </Col>
            </Row>
        </div>
    )
};

export default Cart;
