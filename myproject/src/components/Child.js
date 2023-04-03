import React from "react";

const Child = ({childCount, setChildCount}) => {

    console.log('test');
    return (
        <div>
            Child count is {childCount}
        </div>
    );
}

export default React.memo(Child);