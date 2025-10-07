import { useContext } from "react";
import "./Label.css";
import { MyContext } from './Pages/HomePage';

function Label(props) {
    const val = useContext(MyContext);
    const style = props.isActive ? { background: "green" } : { background: "orange" }
    if (val === false) { return null }
    return (
        <span
            onClick={() => {
                props.onAction(props.isActive ? "active" : "non-active");
            }}
            className="list-label-item"
            style={style}>
            {props.isActive ? "Active" : "Non Active"}
        </span>
    );
}

export default Label;