import './Order.css';

import React, {
  useEffect,
  useState,
} from 'react';

import { useParams } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

const Order = () => {
    const { orderId } = useParams()
    const { user } = useAuth();
   
    const [details,setDetails]=useState([])
    
    useEffect(() => {
        fetch("http://localhost:7000/places")
            .then(res => res.json())
        .then(data=>setDetails(data))
    },[setDetails])
  const handlecart = () => {
      
    const data = spotdetails 

    data.username = user.displayName
    data.useremail = user.email
    console.log(data)

    fetch('http://localhost:7000/placeorder', {
      method: "POST",
      headers: { "content-type": "application/json" },
      body:JSON.stringify(data)
      
      
    })
    
    
    }
    const spotdetails = details.find((detail=>detail._id===orderId))
   
    return (
        <>
             <div class="col">
    <div class="card ordercard">
      <img src={spotdetails?.imageurl} class="card-img-top" alt="..."/>
      <div class="card-body">
                  <h3 class="card-title"> {spotdetails?.name}</h3>
              <h5 class="card-title"> <i class="bi bi-geo-fill"></i>{spotdetails?.location}</h5>
           <p class="card-text">{spotdetails?.description}</p>
         <button onClick={handlecart} className='btn btn-light'>Place Order</button>
      </div>
    </div>
  </div>
               

        </>



            
        
    );
};

export default Order;