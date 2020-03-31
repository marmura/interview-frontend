import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {Modal, Button} from "react-bootstrap";
// import MyWidget from '../../../widget';

// let MyReactWidget = MyWidget.driver('react', {
//     React: React,
//     ReactDOM: ReactDOM
// });

const CartZoidModal = ({show, handleClose}) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Zoid Modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Complete checkout
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Ok
                </Button>
            </Modal.Footer>
        </Modal>
    )
};

CartZoidModal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired
};

export default CartZoidModal;
