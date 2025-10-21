import { forwardRef } from 'react';

function ToolTip(props, ref) {

    const { showToolTip } = props;
    
    return (
        <label
            ref={ref}
            className={`tooltip ${showToolTip ? 'show-tooltip' : 'hide-tooltip'}`}
        >
            This is {props.isActive ? "Active" : "Non Active"} tooltip
        </label>
    );
};

export default forwardRef(ToolTip);