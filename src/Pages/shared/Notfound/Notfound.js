import React from 'react';

import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
      <div>
        <div className="overlay">
                <img src="./Images/notfound.jpg" alt="" />
            </div>
            <div className='content'>
            <h1>404 Not found</h1>
            </div>
        
  
        <Link to="/home">
          <Button variant="primary mt-5">Back To Home</Button>{" "}
        </Link>
      </div>
    );
};

export default Notfound;