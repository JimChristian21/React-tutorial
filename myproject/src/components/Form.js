import {Component} from "react";

class Form extends Component {

    state = {
        firstname: "",
        lastname: "",
    }

    handleChange = (event) => {
        this.setState({
            firstname: event.target.value
        });
    }

    handleLastNameChange = (event) => {
        this.setState({
            lastname: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>First Name: </label>
                    <input onChange={this.handleChange} type="text" value={this.state.firstname}/>
                    <br/>
                    <br/>
                    <label>Last Name: </label>
                    <input onChange={this.handleLastNameChange} type="text" value={this.state.lastname}/>
                    <br/>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;