import {
  useEffect,
  useState,
} from 'react';

import useAuth from '../../hooks/useAuth';

const Myorders = () => {
  const { user } = useAuth()
  const useremail = user.email
  const [allorder, setAllorder] = useState([])
  useEffect(() => {
    fetch(`https://ghoulish-cat-83697.herokuapp.com/myorders/${useremail}`)
      .then((res) => res.json())
      .then((data) => setAllorder(data))
  }, [useremail])
  const handleDelete = (useremail, id) => {
    const agree = window.confirm('You take a risky decision')

    if (agree) {
      const url = `https://ghoulish-cat-83697.herokuapp.com/myorders/${useremail}/${id}`

      fetch(url, {
        method: 'DELETE',
        headers: { 'content-type': 'application/json' },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = allorder.filter((order) => order._id !== id)
            setAllorder(remaining)
          }
        })
    }
  }
  return (
    <div className="row m-4 ">
      {allorder.map((orders) => (
        <div className="card" style={{ width: '18rem' }}>
          <img src={orders.imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{orders.name}</h5>
            <p className="card-text">{orders.description.slice(0, 50)}</p>
            <button
              type="submit"
              onClick={() => handleDelete(orders.useremail, orders._id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Myorders
