import React from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/User';

function Login() {
    const dispatch = useDispatch();

    const handleLogin =() => {
      dispatch(login({ name: 'N', age: 20, email: 'N@gmail.com'}));
      }

    const handleLogout = () => {
      dispatch(logout());
      }

  return (
    <div>
        <button onClick={handleLogin}>
          Login
        </button>
        <button onClick={handleLogout}>
          Logout
        </button>
    </div>
  )
}

export default Login;