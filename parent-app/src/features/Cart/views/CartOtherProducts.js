import React from 'react';
import {Button, Card} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

const OtherProducts = () => (
    <Card>
        <Card.Header>
            <span className="font-weight-bold">Other products you may be interested</span>
        </Card.Header>
        <Card.Body>
            <div className="cart-other-item">
                <div className="font-weight-bold mb-2">Product 1</div>
                <div className="mb-2">Please contact us if you have any questions. We are available
                    24h.
                </div>
                <Button className="btn-icon-right" variant="outline-secondary">
                    <span>Info</span>
                    <FontAwesomeIcon icon={faArrowRight}/>
                </Button>
            </div>
            <div className="cart-other-item">
                <div className="font-weight-bold mb-2">Product 2</div>
                <div className="mb-2">Please contact us if you have any questions. We are available
                    24h.
                </div>
                <Button className="btn-icon-right" variant="outline-secondary">
                    <span>Info</span>
                    <FontAwesomeIcon icon={faArrowRight}/>
                </Button>
            </div>
        </Card.Body>
    </Card>
);

export default OtherProducts;
