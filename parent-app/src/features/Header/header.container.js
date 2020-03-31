import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {Navbar, Button, Nav} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import * as routes from '../../constants/router.constants';
import logo from "../../assets/images/logo.svg";
import './header.css';
import { useSelector } from 'react-redux';
import Toast from '../../common/components/Toast';

const Header = () => {
    const cartItems = useSelector(state => state.cart.items);
    const cartErrorMessage = useSelector(state => state.cart.errorMessage);

    return (
        <div className="app-header">
            <Navbar bg="light" variant="light">
                <Navbar.Brand>
                    <img src={logo} className="app-logo" alt="logo"/>
                </Navbar.Brand>
                <Navbar.Brand>igor-solution</Navbar.Brand>
                <Nav className="ml-auto">
                    <Link className="nav-link" to={routes.CART_ROUTE}>
                        <FontAwesomeIcon icon={faShoppingCart}/>
                        <span className="header-cart-items-count">
                            (<span className="font-weight-bold">
                                {cartItems.length}
                            </span>) Items
                        </span>
                    </Link>
                </Nav>
            </Navbar>
            <Toast msg={cartErrorMessage} title={'Error'} />
        </div>
    )
};

export default Header;
