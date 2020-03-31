import React, { useState } from 'react';
import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import CartZoidModal from './CartZoidModal';
import './App.css';

function App() {
    const [showZoidModal, setZoidModalShow] = useState(false);

    const handleZoidModalClose = () => {
        setZoidModalShow(false);
    };

    const handleCheckoutClick = () => {
        setZoidModalShow(true);
    };

    const test = () => {
        var newWin = window.open("about:blank", "hello", "width=300,height=300,left=500,top=100");
        let button = document.createElement('button');
        button.innerText = 'Complete checkout';
        button.classList.add('btn');
        button.onclick = () => {
            if(window.xprops.onClose) {
                window.xprops.onClose();
            }
            newWin.close();
        };
        newWin.document.body.appendChild(button)
    };

  return (
    <div>
        <Button variant="secondary" onClick={test}>
            <FontAwesomeIcon className="mr-1" icon={faShoppingCart}/>
            <span>Checkout</span>
        </Button>
    </div>
  );
}

export default App;
