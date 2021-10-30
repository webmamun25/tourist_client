import './Home.css';

import React from 'react';

import Places from '../../Places/Places';
import Banner from '../shared/Banner/Banner';

const Home = () => {
    return (
        <div className='home'>
        
            <Banner></Banner>
            <Places></Places>
           
        </div>
    );
};

export default Home;