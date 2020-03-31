import React, {useEffect, useState, useMemo} from 'react';
import PropTypes from 'prop-types';
import {Toast as BSToast} from 'react-bootstrap';
import './toast.css';

const Toast = ({ msg, title }) => {
    const [show, setShow] = useState(!!msg);

    useEffect(() => {
        setShow(!!msg);
    }, [msg]);

    return useMemo(() => (
        <BSToast onClose={() => setShow(false)} show={show} delay={3000} autohide>
            <BSToast.Header>
                <strong className="mr-auto">{title}</strong>
                <small>one moment ago</small>
            </BSToast.Header>
            <BSToast.Body>{msg}</BSToast.Body>
        </BSToast>
    ), [show])
};

Toast.propTypes = {
    msg: PropTypes.string,
    title: PropTypes.string.isRequired
};

export default Toast;
