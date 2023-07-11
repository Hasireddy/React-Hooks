import React,{useState} from 'react';

const UseStateBasics = () => {
    const [count,setCount] = useState(0);
    const [decrement,setDecrement] = useState(0);

    const handleClick = () =>{  
        setCount(count+1);
    }

    const handleDecrement = () =>{
        setDecrement(decrement-1);
    }
  return (
    <div>
        <div>
            <h2>You clicked {count} times</h2>
        <button onClick = {handleClick}>Increment</button>
        </div>
        <div>
            <h2>You clicked {decrement} times</h2>
        <button onClick = {handleDecrement}>Decrement</button>
        </div>
    </div>
  )
}

export default UseStateBasics;