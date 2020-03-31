import React from 'react';
import { Carousel as BSCarousel } from 'react-bootstrap';
import './carousel.css';

const Carousel = () => {
    return (
        <div className="carousel-container">
            <BSCarousel>
                <BSCarousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/800x800?text=[IMAGE%201]"
                        alt="First slide"
                    />
                </BSCarousel.Item>
                <BSCarousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/800x800?text=[IMAGE%201]"
                        alt="Third slide"
                    />
                </BSCarousel.Item>
                <BSCarousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/800x800?text=[IMAGE%201]"
                        alt="Third slide"
                    />
                </BSCarousel.Item>
            </BSCarousel>
        </div>
    );
};

export default Carousel;
