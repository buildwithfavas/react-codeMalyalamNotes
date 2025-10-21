import { forwardRef } from 'react';

function ToolTipUseLayouytEffect(props, ref) {

    const { showToolTip } = props;

    if (!showToolTip) {
        return null;
    }

    return (
        <label
            className="tooltip"
            ref={ref}
        >
            This is {props.isActive ? "Active" : "Non Active"} tooltip
        </label>
    );
};

export default forwardRef(ToolTipUseLayouytEffect);