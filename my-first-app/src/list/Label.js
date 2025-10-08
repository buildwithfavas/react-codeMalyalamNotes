import { useState, useContext, useRef, useCallback } from "react";
import "./Label.css";
import { MyContext } from './Pages/HomePage';

function Label(props) {
    const val = useContext(MyContext);
    const [showToolTip, setShowToolTip] = useState(false);
    const refObj = useRef();

    // const refObj = usememo(() =>{
    //     return{
    //         current: undefined
    //     };
    // });

    const refCallback = useCallback((domItem) => {
                console.log("Inside Function");
        console.log(domItem);
    }, []);

    console.log(refObj);

    const style = props.isActive ? { background: "green" } : { background: "orange" }
    if (val === false) { return null }

    const handleMouseEnter = (evt) => {
        console.log(evt.target);
        console.log(refObj.current);

        const width1 = evt.target.getBoundingClientRect().width;
        const width2 = refObj.current.getBoundingClientRect().width;

        refObj.current.style.left = `${-(width2 - width1) / 2}px`;

        setShowToolTip(true);
    }

    const handleMouseLeave = () => {
        setShowToolTip(false);
    }

    return (
        <div className="list-label-item-container">
            <span
                onClick={() => {
                    props.onAction(props.isActive ? "active" : "non-active");
                }}
                className="list-label-item"
                style={style}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {props.isActive ? "Active" : "Non Active"}
            </span>
            <label
                ref={refObj}
                className={`tooltip ${showToolTip ? 'show-tooltip' : 'hide-tooltip'}`}>
                This is {props.isActive ? "Active" : "Non Active"} tooltip
            </label>
        </div>
    );
}

export default Label;