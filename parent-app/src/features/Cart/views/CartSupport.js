import React from 'react';
import {Card} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone} from "@fortawesome/free-solid-svg-icons";

const CartSupport = () => (
    <Card>
        <Card.Header>
            <span className="font-weight-bold">Support</span>
        </Card.Header>
        <Card.Body>
            <div className="mb-2 font-weight-bold text-center">
                <FontAwesomeIcon icon={faPhone}/>
                <span> +43 100 783 001</span>
            </div>
            <div>Please contact us if you have any questions. We are available 24h.</div>
        </Card.Body>
    </Card>
);

export default CartSupport;
