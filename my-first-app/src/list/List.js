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
    render() {
        return (
            <Tools>
            <div className='app-list'>
                {
                    arr.map((obj) => {
                        return <ListItem className="task-row" key={obj.title} title={obj.title} descr={obj.descr} isActive={obj.isActive} />
                    })
                }
            </div>
            </Tools>
        );
    }
}

export default List;