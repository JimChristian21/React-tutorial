import {useState} from "react";
import Counter from "./Counter.js";
import FunctionalCounter from "./FunctionalCounter";

export default function ConditionalComponent() {

    const [display, setDisplay] = useState(true);

    if (display) {
        return (
            <div>
                <h3>This is a conditional component</h3>
                <Counter/>
            </div>
        )
    } else {
        return (
            <div>
                <h3>Nothing to see here</h3>
                <FunctionalCounter/>
            </div>
        )
    }

    // return (
    //     <div>
    //         <h3>This is a conditional component</h3>
    //         <h3>Nothing to see here</h3>
    //     </div>
    // )
}