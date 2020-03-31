import React, {useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faHeart, faMailBulk, faClock } from '@fortawesome/free-solid-svg-icons';
import { Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import Carousel from '../../common/components/Carousel';
import { addProductToCart } from './product.actions';
import { PRODUCT_DUMP } from './product.constants';
import './product.css';
import {clearCart} from "../Cart/cart.actions";

const Product = ({ location }) => {
    const dispatch = useDispatch();

    const handleAddProductToCart = () => {
        dispatch(addProductToCart(PRODUCT_DUMP));
    };

    useEffect(() => {
        if(location.state && location.state.clearCart) {
            dispatch(clearCart());
        }
    }, [location.state]);

    return (
        <div className="product-container">
            <div className="product-content">
                <Row>
                    <Col xs={12} md={5} lg={5}>
                        <Carousel />
                    </Col>
                    <Col xs={12} md={7} lg={7}>
                        <h2>Desktop publishing software</h2>
                        <div className="product-plane-text">Many desktop publishing packages and web page editors now.</div>
                        <div className="product-price">
                            <span className="product-price-text">${PRODUCT_DUMP.price}</span>
                            <span className="product-price-tip">Exclude Tax</span>
                        </div>
                        <div className="product-horizontal-separator" />
                        <div className="product-description">
                            <h5>Product description</h5>
                            <div className="product-plane-text">Many desktop publishing packages and web page editors now. Many desktop publishing packages and web page editors now.  Many desktop publishing packages and web page editors now. </div>
                            <div className="product-plane-text">Many desktop publishing packages and web page editors now. Many desktop publishing packages and web page editors now.  Many desktop publishing packages and web page editors now. </div>
                        </div>
                        <div className="product-description-list">
                            <div className="product-bold-text">Description lists</div>
                            <div className="product-plane-text">A description list is perfect for defining terms.</div>
                            <div className="product-bold-text">Description lists</div>
                            <div className="product-plane-text">A description list is perfect for defining terms.</div>
                            <div className="product-bold-text">Description lists</div>
                            <div className="product-plane-text">A description list is perfect for defining terms.</div>
                        </div>
                        <div className="product-horizontal-separator" />
                        <div className="product-actions">
                            <ButtonGroup aria-label="product actions">
                                <Button variant="secondary" onClick={handleAddProductToCart}>
                                    <FontAwesomeIcon icon={faCartPlus} />
                                    <span>Add to cart</span>
                                </Button>
                                <Button variant="outline-secondary">
                                    <FontAwesomeIcon icon={faHeart} />
                                    <span>Add to wishlist</span>
                                </Button>
                                <Button variant="outline-secondary">
                                    <FontAwesomeIcon icon={faMailBulk} />
                                    <span>Contact with author</span>
                                </Button>
                            </ButtonGroup>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="product-footer">
                <Row>
                    <Col>The generated Lorem Ipsum is therefore always free</Col>
                    <Col>
                        <div className="product-footer-time">
                            <span>Full stock -</span>
                            <FontAwesomeIcon icon={faClock} />
                            <span>{moment().format('DD.MM.YYYY HH:mm a')}</span>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
};

export default Product;
