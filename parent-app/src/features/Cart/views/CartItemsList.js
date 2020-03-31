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

const CartItemsList = ({ handleCheckoutClick }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    const handleContinueShoppingClick = () => history.push(routes.PRODUCT_ROUTE);

    const handleItemQtyChange = (item) => dispatch((changeProductQty(item)));

    return (
        <Card>
            <Card.Header>
                <Row>
                    <Col><span className="font-weight-bold">Items in your cart</span></Col>
                    <Col className="text-right">
                        (<span className="font-weight-bold">{cartItems.length}</span>) items
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
                    <Col className="text-right">
                        <Button variant="secondary" onClick={handleCheckoutClick}>
                            <FontAwesomeIcon icon={faShoppingCart}/>
                            <span>Checkout</span>
                        </Button>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    );
};

CartItemsList.propTypes = {
    handleCheckoutClick: PropTypes.func.isRequired
};

export default CartItemsList;
