import React,{useState} from 'react';

const UseStateBasics = () => {
    const [increment,setIncrement] = useState(0);
    const [decrement,setDecrement] = useState(0);

    const handleIncrement = () =>{  
        setIncrement(increment+1);
    }

    const handleDecrement = () =>{
        setDecrement(decrement-1);
    }
  return (
    <div>
        <div>
            <h2>You clicked {increment} times</h2>
        <button onClick = {handleIncrement}>Increment</button>
        </div>
        <div>
            <h2>You clicked {decrement} times</h2>
        <button onClick = {handleDecrement}>Decrement</button>
        </div>
    </div>
  )
}

export default UseStateBasics;