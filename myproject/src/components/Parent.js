import Child from "./Child";
import {useState} from "react";

const Parent = () => {

    const [parentCount, setParentCount] = useState(0);
    const [childCount, setChildCount] = useState(0);

    const changeParentCount = () => {
        setParentCount(parentCount + 1);
    }
    const changeChildCount = () => {
        setChildCount(childCount + 1);
    }

    return (
        <div>
            This is a parent Component
            <h1>Parent count is {parentCount}</h1>
            <Child childCount={childCount} setChildCount={setChildCount}/>
            <button onClick={changeParentCount}>Increment parent count</button>
            <button onClick={changeChildCount}>Increment child count</button>
        </div>
    );
}

export default Parent;