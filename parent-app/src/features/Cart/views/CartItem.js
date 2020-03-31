import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import {Col, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGift, faTrash} from "@fortawesome/free-solid-svg-icons";
import { MAX_ITEM_QTY, MIN_ITEM_QTY } from '../cart.constants';

const CartItem = ({id, qty, price, handleItemQtyChange}) => {
    const [currentQty, setCurrentQty] = useState(qty);

    const handleCurrentQtyChange = (e) => {
        let qty = e.target.value;
        qty = qty < MIN_ITEM_QTY ? MIN_ITEM_QTY : qty;
        qty = qty > MAX_ITEM_QTY ? MAX_ITEM_QTY : qty;
        setCurrentQty(qty);
    };

    // no use in case if we have 1 item
    // but in case of multiple items, render will fire only for item that changing in this moment
    return useMemo(()=> (
        <div className="cart-item">
            <Row>
                <Col xs={12} md={1} lg={1}>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/50x50?text=[IMAGE%201]"
                        alt="First slide"
                    />
                </Col>
                <Col xs={12} md={8} lg={8}>
                    <div className="cart-item-name font-weight-bold mb-2">Desktop publishing
                        software
                    </div>
                    <div className="cart-item-text mb-2">Many desktop publishing packages
                        and web page editors now.
                    </div>
                    <div className="cart-item-text font-weight-bold">Description lists</div>
                    <div className="cart-item-text mb-2">Many desktop publishing packages
                        and web page editors now.
                    </div>
                    <div className="cart-item-text cart-item-actions">
                    <span>
                        <FontAwesomeIcon className="mr-1" icon={faGift}/>
                        <span>Add gift package</span>
                    </span>
                        <span className="cart-item-actions-vertical-separator ml-1">|</span>
                        <span>
                        <FontAwesomeIcon className="ml-1 mr-1" icon={faTrash}/>
                        <span>Remove item</span>
                    </span>
                    </div>
                </Col>
                <Col xs={12} md={3} lg={3}>
                    <Row className="cart-item-calc justify-content-end pr-3">
                        <span className="mr-3">${price}</span>
                        <Form.Control className="mr-3"
                                      onBlur={() => handleItemQtyChange({id, qty: currentQty})}
                                      onChange={(e) => handleCurrentQtyChange(e)}
                                      type="number"
                                      value={currentQty}/>
                        <span className="font-weight-bold">${price * qty}</span>
                    </Row>
                </Col>
            </Row>
        </div>
    ), [
        qty,
        currentQty,
        price
    ])
};

CartItem.propTypes = {
    id: PropTypes.number.isRequired,
    qty: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    handleItemQtyChange: PropTypes.func.isRequired
};

export default CartItem;
