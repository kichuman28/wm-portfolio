// src/pages/MobileApp.js
import React from 'react';
import './style.css';
import Header from './header';
import { useNavigate } from 'react-router-dom';
import gMatrixImage from './gmatrix.png'; // Import the image

const AI = () => {
    const navigate = useNavigate();
    return (
        <div className="a-container">
            <Header />
            <div className="m-content">
                <h1 className="m-heading">
                    <span className="m-mobile">ARTIFICIAL INTELLIGENCE</span>
                </h1>
                <p className="m-paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur libero ac ullamcorper bibendum. Donec eu blandit ipsum, a interdum felis. Fusce ut nisl enim. Vestibulum elementum ut quam sed fringilla. Nulla blandit id dolor tincidunt viverra. Donec gravida ut mi sed efficitur.Nam massa eros, bibendum in sapien et, vehicula accumsan ipsum. In aliquam ligula et justo semper dignissim. Duis accumsan mauris eu elementum posuere. In gravida euismod ex, quis gravida erat mollis sit amet. Sed quis fringilla leo. Ut nec dolor tellus. Cras posuere euismod porta. In arcu metus, tincidunt quis rhoncus non, tincidunt sit amet nibh. Praesent laoreet felis et libero feugiat, bibendum blandit felis vestibulum.
                </p>
                <div className="a-button-container">
                    <img src={gMatrixImage} alt="gMatrix" className="a-gmatrix-image" onClick={() => navigate("/schedule")} />
                </div>
            </div>
        </div>

    );
};

export default AI;
