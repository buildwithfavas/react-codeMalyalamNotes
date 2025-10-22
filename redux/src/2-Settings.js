import React from 'react'
import { connect } from 'react-redux';

// Example of how to use redux in class components.

class Settings extends React.Component {
    render() {

        const {
            value,
            myIncrement,
            myDecrement,
        } = this.props;

        //console.log(this.props);

        return (
            <div>
                <h2>This is by using class component</h2>
                <button onClick={() => {
                    myIncrement();
                }}>Increment</button>
                <hr />
                <label>{value}</label>
                <hr />
                <button onClick={() => {
                    myDecrement();
                }}>Decrement</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        value: state.value,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        myIncrement: () => {
            dispatch({
                type: 'Increment'
            });
        },
        myDecrement: () => {
            dispatch({
                type: 'Decrement'
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
