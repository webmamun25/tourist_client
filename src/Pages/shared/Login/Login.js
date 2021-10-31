import React from 'react';

import {
  useHistory,
  useLocation,
} from 'react-router-dom';

import useAuth from '../../../hooks/useAuth';

const Login = () => {
  const { signInUsingGoogle } = useAuth()
  const location = useLocation()
  const history = useHistory()
  const redirect_uri = location.state?.from || '/home'
  const handlegoogle = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_uri)
    })
  }

  return (
    <div>
      <div className="login">
        <h2>Log in with google</h2>
        <button onClick={handlegoogle} className="btn btn-light">
          <i className="bi bi-google"></i> Log In
        </button>
      </div>
    </div>
  )
}

export default Login
