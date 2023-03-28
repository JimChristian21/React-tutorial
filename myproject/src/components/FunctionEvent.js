const FunctionEvent = () => {

    const handleClick = () => {
        console.log('Button is clicked!');
    }

    return (
        <div>
            FunctionalComponent
            <button onClick={handleClick}>Click here</button>
        </div>
    )
}

export default FunctionEvent;