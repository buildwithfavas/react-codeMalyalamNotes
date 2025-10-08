import { useRef, useState, useLayoutEffect, useDebugValue } from "react";

function useTest() {
    const labelRef = useRef();
    return labelRef;
}

function useTooltip() {
    const [showToolTip, setShowToolTip] = useState(false);

    const labelRef = useRef();
    const refObj = useRef();

    useDebugValue("Tooltip showing " + showToolTip, (val) => {
        return `HELLO ${val}`;
    });

    useLayoutEffect(() => {
        if (showToolTip) {
            console.log(labelRef.current);

            const width1 = labelRef.current.getBoundingClientRect().width;
            const width2 = refObj.current.getBoundingClientRect().width;
            refObj.current.style.left = `${-(width2 - width1) / 2}px`;

            //console.log(refObj.current.myTest());
        }
    }, [showToolTip]);

    return [showToolTip, setShowToolTip, labelRef, refObj]
}

export {
    useTest,
    useTooltip
};