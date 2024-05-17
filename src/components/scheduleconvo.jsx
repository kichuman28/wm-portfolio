// src/pages/Career.js
import React from 'react';
import './style.css';
import Header from './header'; // Adjust the import path as needed
import 'slick-carousel/slick/slick.css'; // Import React Slick styles
import 'slick-carousel/slick/slick-theme.css';

const Schedule = () => {
    return (
        <div className="c-container">

            <div className="c-text-content">
                <h1 className="c-heading">Connect With Us</h1>
                <p className="c-paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur libero ac ullamcorper bibendum. Donec eu blandit ipsum, a interdum felis. Fusce ut nisl enim. Vestibulum elementum ut quam sed fringilla. Nulla blandit id dolor tincidunt viverra. Donec gravida ut mi sed efficitur.
                </p>
            </div>
            <form className="c-form">
                <div className="c-form-field-row">
                    <input type="text" placeholder="lorem" className="c-input-field" />
                    <input type="text" placeholder="ipsum" className="c-input-field" />
                </div>
                <div className="c-form-field-row">
                    <input type="text" placeholder="dior" className="c-input-field" />
                </div>
                <div className="c-form-field-row">
                    <input type="text" placeholder="sit" className="c-input-field c-input-field-3-4" />
                    <input type="text" placeholder="amet" className="c-input-field c-input-field-1-4" />
                </div>
                <button type="submit" className="c-submit-button">Submit</button>
            </form>
            <Header />
        </div>

    );
};

export default Schedule;
