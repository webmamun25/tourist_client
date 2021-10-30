import {
  useEffect,
  useState,
} from 'react';

import useAuth from '../../hooks/useAuth';

const Myorders = () => {
    const { user } = useAuth()
    const useremail = user.email
    const [allorder,setAllorder]=useState([])
    useEffect(() => {
        fetch(`http://localhost:7000/myorders/${useremail}`)
        .then(res => res.json())
    .then(data=>setAllorder(data))
    },[useremail])
    const handleDelete = (id) => {
        const url =`http://localhost:7000/deleteplace/${id}` 
        console.log(url);
        fetch(url, {
            method: "DELETE",
            headers:{"content-type":"application/json"}
        })
            .then(res => res.json())
            .then(data => {
               console.log(data.deletedCount)
                    
            }
            
        )
        
        
    }
    return (
        <div className='row m-4 '>
            {
                allorder.map(orders => (
                    <div class="card" style={{"width": "18rem"}}>
  <img src={orders.imageurl} class="card-img-top" alt="..."/>
  <div class="card-body">
                            <h5 class="card-title">{orders.name}</h5>
                            <p class="card-text">{orders.description.slice(0, 50)}</p>
    <button onClick={()=>handleDelete(orders._id)} class="btn btn-danger">Delete</button>
  </div>
</div>
                ))
            }
           
        </div>
    );
};

export default Myorders;