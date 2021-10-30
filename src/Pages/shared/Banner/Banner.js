import './Banner.css';

import React from 'react';

const Banner = () => {
    return (
        <div className='banner'>
            <div className="overlay">
                <img src="./Images/Banner.jpg" alt="" />
            </div>
            <div className='content'>
                <h1 >Investman in travel is investment yourself</h1>
            </div>
        </div>
    );
};

export default Banner;