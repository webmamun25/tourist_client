import './Places.css';

import React, {
  useEffect,
  useState,
} from 'react';

import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Places = () => {
    const [place,setPlace]=useState([])
    useEffect(() => {
        fetch("http://localhost:7000/places")
            .then(res => res.json())
        .then(result=>setPlace(result))
    }, [])
    console.log(place)
    return (
        <div className='row'>
            {
                place.map(spot => (
                    <div className="col-md-4 ">
                        <div className="card mb-3 place" style={{ "max-width": "540px"}}>
  <div className="row g-0 ">
    <div className="col-md-4 ">
      <img src={spot.imageurl}  className="img-fluid h-100  rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{spot.name}</h5>
        <p className="card-text">{ spot.description.slice(0,30)}</p>
     <NavLink to={`/orders/${spot._id}`}>
              <Button className="mx-3"> Orders</Button>
            </NavLink>
      </div>
    </div>
  </div>
</div>
                    </div>
                ))
            }
        </div>
    );
};

export default Places;