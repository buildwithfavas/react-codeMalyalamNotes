import React from "react";
import ListItem from "./Listitem";
import Tools from "../components/Tools";

const arr = [{
    title: "Appointment for October",
    descr: "The patient is rescheduled to October",
    isActive: false
}, {
    title: "Appointment for November",
    descr: "The patient is rescheduled to November",
    isActive: true
}, {
    title: "Appointment for December",
    descr: "The patient is rescheduled to December",
    isActive: false
},];

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: arr
        };
    }

    onListChange = (e) => {
        //console.log(e.target.value);
        const value = e.target.value;
        const newArr = arr.filter((item) => {
            if (value === "all") {
                return true;
            }
            if (value === "active") {
                return item.isActive === true;
            }
            if (value === "non-active") {
                return item.isActive === false;
            }
            return false;
        });

        this.setState({
            data: newArr
        });
    }

    render() {
        return (
            <Tools onAction={this.onListChange}>
                <div className='app-list'>
                    {
                        this.state.data.map((obj) => {
                            return <ListItem className="task-row" key={obj.title} title={obj.title} descr={obj.descr} isActive={obj.isActive} />
                        })
                    }
                </div>
            </Tools>
        );
    }
}

export default List;