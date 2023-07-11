// Create a count variable
//Display value in JSX
//Add button and increase the value
//The reason for bug-we don't trigger re-render

const ErrorExample = () => {
    let count = 0;
    const handleClick = ()=> {
        count=count+1;
        console.log(count);
    }
    return(
        <>
        <h2>{count}</h2>
        
        <button type = "button" onClick = {handleClick}>Increment</button>
        </>
    )
}

export default ErrorExample;