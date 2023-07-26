import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { changeColor } from '../features/Theme'

function ChangeColor() {
    const [color, setColor] = useState('');
    const dispatch = useDispatch();

    const handleChange = (event) => {setColor(event.target.value)}

  return (
    <div>
        <input type='text'
        onChange={handleChange}/>
        <button onClick={() => dispatch(changeColor(color))}>Change Color</button>
    </div>
  )
}

export default ChangeColor