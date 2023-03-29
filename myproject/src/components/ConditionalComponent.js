import {useState} from "react";
import Counter from "./Counter.js";
import FunctionalCounter from "./FunctionalCounter";

export default function ConditionalComponent() {

    const [display, setDisplay] = useState(true);
    let output;

    return display ? (
            <div>
                <h3>This is a conditional component</h3>
                <Counter/>
            </div>
        )
        : (
            <div>
                <h3>Nothing to see here</h3>
                <FunctionalCounter/>
            </div>
        );
}