import React from "react";
import Tools from "../components/Tools";
import SimpleList from "./SimpleList";

const arr = [{
    id: 1,
    title: "Appointment for October",
    descr: "The patient is rescheduled to October",
    isActive: false
}, {
    id: 2,
    title: "Appointment for November",
    descr: "The patient is rescheduled to November",
    isActive: true
}, {
    id: 3,
    title: "Appointment for December",
    descr: "The patient is rescheduled to December",
    isActive: false
},];

class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: arr,
            activeState: "all",
        };
    }

    onListChange = (e) => {
        //console.log(e.target.value);
        const value = e.target.value;

        this.setState({
            activeState: value
        });

    }

    handleDelete = (item) => {
        const newArr = this.state.data.filter((element) => element.id !== item.id);

        this.setState({
            data: newArr
        });
    }

    handleLabelClick = (arg) => {
        this.setState({
            activeState: arg
        });
    }

    render() {
        const { data, activeState } = this.state;
        const newArr = data.filter((item) => {
            if (activeState === "all") {
                return true;
            }
            if (activeState === "active") {
                return item.isActive === true;
            }
            if (activeState === "non-active") {
                return item.isActive === false;
            }
            return false;
        });

        return (
            <Tools labelValue={activeState} onAction={this.onListChange}>
                <SimpleList onLabelClick={this.handleLabelClick} data={newArr} onAction={this.handleDelete} />
            </Tools>
        );
    }
}

export default List;