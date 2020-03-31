import React from 'react';
import PropTypes from 'prop-types';
import {Button, Card, Col, Row} from "react-bootstrap";
import CartItem from "./CartItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import * as routes from "../../../constants/router.constants";
import {changeProductQty} from "../cart.actions";
import CheckoutButton from '../../../common/components/CheckoutButton';

const CartItemsList = ({ handleCheckoutClick, cartItems }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleContinueShoppingClick = () => history.push(routes.PRODUCT_ROUTE);

    const handleItemQtyChange = (item) => dispatch((changeProductQty(item)));

    return (
        <Card>
            <Card.Header>
                <Row>
                    <Col><span className="font-weight-bold">Items in your cart</span></Col>
                    <Col className="text-right">
                        (<span className="font-weight-bold">{cartItems.length ? cartItems[0].qty : 0}</span>) items
                    </Col>
                </Row>
            </Card.Header>
            <Card.Body>
                {cartItems.map((item) => <CartItem key={item.id} {...item} handleItemQtyChange={handleItemQtyChange} />)}
                {!cartItems.length ? <div>Cart is empty</div> : null}
            </Card.Body>
            <Card.Footer className="text-muted">
                <Row>
                    <Col>
                        <Button variant="outline-secondary" onClick={handleContinueShoppingClick}>
                            <FontAwesomeIcon icon={faArrowLeft}/>
                            <span>Continue shopping</span>
                        </Button>
                    </Col>
                    <Col className="text-right card-checkout-btn-container">
                        <CheckoutButton onClose={handleCheckoutClick} />
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    );
};

CartItemsList.propTypes = {
    handleCheckoutClick: PropTypes.func.isRequired,
    cartItems: PropTypes.array.isRequired
};

export default CartItemsList;
