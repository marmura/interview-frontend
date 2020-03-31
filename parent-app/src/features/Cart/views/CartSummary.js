import React from 'react';
import PropTypes from 'prop-types';
import {Button, ButtonGroup, Card} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";

const CartSummary = ({ handleCheckoutClick }) => (
    <Card>
        <Card.Header>
            <span className="font-weight-bold">Cart Summary</span>
        </Card.Header>
        <Card.Body>
            <div>Total</div>
            <div className="mb-4 cart-total-price">$390,00</div>
            <div className="mb-2">*For United States, France and Germany applicable sales tax will
                be applied
            </div>

            <ButtonGroup aria-label="product actions">
                <Button variant="secondary" onClick={handleCheckoutClick}>
                    <FontAwesomeIcon icon={faShoppingCart}/>
                    <span>Checkout</span>
                </Button>
                <Button variant="outline-secondary">
                    <span>Cancel</span>
                </Button>
            </ButtonGroup>
        </Card.Body>
    </Card>
);

CartSummary.propTypes = {
    handleCheckoutClick: PropTypes.func.isRequired
};

export default CartSummary;
