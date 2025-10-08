import { useState, useContext, useRef, useCallback } from "react";
import "./Label.css";
import { MyContext } from './Pages/HomePage';
import ToolTip from './Pages/ToolTip';
import ToolTipUseImperative from './Pages/ToolTipUseImperative';
import ToolTipUseLayouytEffect from './Pages/ToolTipUseLayouytEffect';

function Label(props) {
    const val = useContext(MyContext);
    const [showToolTip, setShowToolTip] = useState(false);

    const labelRef = useRef();
    const refObj = useRef();

    useEffect(() => {
        if (showToolTip) {
            console.log(labelRef.current);

            const width1 = labelRef.current.getBoundingClientRect().width;
            const width2 = refObj.current.getBoundingClientRect().width;
            refObj.current.style.left = `${-(width2 - width1) / 2}px`;

            console.log(refObj.current.myTest());
        }
    }, [showToolTip]);

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
        // console.log(evt.target);
        // console.log(refObj.current);

        // const width1 = evt.target.getBoundingClientRect().width;
        // const width2 = refObj.current.getBoundingClientRect().width;
        // refObj.current.style.left = `${-(width2 - width1) / 2}px`;

        // console.log(refObj.current.myTest());

        setShowToolTip(true);
    }

    const handleMouseLeave = () => {
        setShowToolTip(false);
    }

    return (
        <div className="list-label-item-container">
            <span
                ref={labelRef}
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
            {/* <label
                ref={refObj}
                className={`tooltip ${showToolTip ? 'show-tooltip' : 'hide-tooltip'}`}>
                This is {props.isActive ? "Active" : "Non Active"} tooltip
            </label> */}
            {/* <ToolTip ref={refObj} showToolTip={showToolTip} /> */}
            {/* <ToolTipUseImperative ref={refObj} showToolTip={showToolTip} /> */}
            <ToolTipUseLayouytEffect ref={refObj} showToolTip={showToolTip} />
        </div>
    );
}

export default Label;