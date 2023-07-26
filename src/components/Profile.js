import React from 'react';
import { useSelector } from 'react-redux';


function Profile() {
    const {name, age, email} = useSelector((state) => state.user);
    const theme = useSelector((state) => state.theme.value);
  return (
    <div style={{color: theme}}>
        <h1>Profile page</h1>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Email: {email}</p>
    </div>
  )
}

export default Profile