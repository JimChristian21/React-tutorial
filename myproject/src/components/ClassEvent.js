import {Component} from "react";

class ClassEvent extends Component {

    handleClick = () => {
        console.log('Button is clicked!');
    }

    render() {
        return <>
            <div>
                FunctionalComponent
                <button onClick={this.handleClick}>Click here</button>
            </div>
        </>
    }
}

export default ClassEvent;