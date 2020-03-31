import React, { useState } from 'react';
import {Col, Row} from "react-bootstrap";

import CartItemsList from './views/CartItemsList';
import CartSummary from './views/CartSummary';
import CartSupport from './views/CartSupport';
import CartOtherProducts from './views/CartOtherProducts';
import CartZoidModal from './views/CartZoidModal';

import './cart.css';

const Cart = () => {
    const [showZoidModal, setZoidModalShow] = useState(false);

    const handleZoidModalClose = () => {
        setZoidModalShow(false);
    };

    const handleCheckoutClick = () => {
        setZoidModalShow(true);
    };

    return (
        <div className="cart-container">
            <Row>
                <Col xs={12} md={12} lg={9}>
                    <div className="cart-section">
                        <CartItemsList handleCheckoutClick={handleCheckoutClick} />
                    </div>
                </Col>
                <Col xs={12} md={12} lg={3}>
                    <div className="cart-section">
                        <CartSummary handleCheckoutClick={handleCheckoutClick} />
                    </div>
                    <div className="cart-section mt-4">
                        <CartSupport/>
                    </div>
                    <div className="cart-section cart-section-other-products mt-4">
                        <CartOtherProducts/>
                    </div>
                </Col>
            </Row>

            <CartZoidModal show={showZoidModal} handleClose={handleZoidModalClose} />
        </div>
    )
};

export default Cart;
