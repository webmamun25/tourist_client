import React, {
  useEffect,
  useState,
} from 'react';

const Manage = () => {
  const [alluserOrder, setalluserOrder] = useState([])
  useEffect(() => {
    fetch('https://ghoulish-cat-83697.herokuapp.com/myorders')
      .then((res) => res.json())
      .then((data) => setalluserOrder(data))
  }, [])

  const itemdelete = (id) => {
    const agree = window.confirm('Please think second time to Delete it')

    if (agree) {
      const url = `https://ghoulish-cat-83697.herokuapp.com/myorders/${id}`

      fetch(url, {
        method: 'DELETE',
        headers: { 'content-type': 'application/json' },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = alluserOrder.filter((order) => order._id !== id)
            setalluserOrder(remaining)
          }
        })
    }
  }

  return (
    <div className="row">
      {alluserOrder.map((item) => (
        <div className="col-md-4 mt-5 ms-3">
          <div className="card" style={{ width: '18rem' }}>
            <img src={item.imageurl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description.slice(0, 40)}</p>
            </div>
            <ul className="list-group list-group-flush"></ul>
            <div className="card-body">
              <button
                onClick={() => itemdelete(item._id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Manage
