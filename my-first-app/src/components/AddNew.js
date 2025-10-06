import React from "react";

class AddNew extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            titleInput: ""
        }
    }

    handleChange = (event) => {
        const value = event.target.value;
        this.setState({
            titleInput: value
        });
    }

    handleClick = () => {
        console.log(this.state.titleInput);
    }

    render() {
        return (
            <div>
                <input value={this.state.titleInput} onChange={this.handleChange} />
                <button onClick={this.handleClick}>Click</button>
            </div>
        );
    };
}

export default AddNew;