import React from 'react';
import PropTypes from 'prop-types';
import {Button, ButtonGroup, Card} from "react-bootstrap";
import CheckoutButton from '../../../common/components/CheckoutButton';

const CartSummary = ({cartItems, handleCheckoutClick}) => {
    const totalPrice = cartItems.reduce((acc, item) => { return acc + (item.qty * item.price) }, 0);

    return (
        <Card>
            <Card.Header>
                <span className="font-weight-bold">Cart Summary</span>
            </Card.Header>
            <Card.Body>
                <div>Total</div>
                <div className="mb-4 cart-total-price">${totalPrice}</div>
                <div className="mb-2">*For United States, France and Germany applicable sales tax will
                    be applied
                </div>

                <ButtonGroup aria-label="product actions">

                    <CheckoutButton onClose={handleCheckoutClick} />

                    <Button variant="outline-secondary">
                        <span>Cancel</span>
                    </Button>
                </ButtonGroup>
            </Card.Body>
        </Card>
    );
};

CartSummary.propTypes = {
    cartItems: PropTypes.array.isRequired,
    handleCheckoutClick: PropTypes.func.isRequired
};

export default CartSummary;
