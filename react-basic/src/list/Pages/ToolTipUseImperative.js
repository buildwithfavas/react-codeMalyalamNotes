import { forwardRef, useImperativeHandle } from 'react';

function ToolTipUseImperative(props, ref) {

    const { showToolTip } = props;

    useImperativeHandle(ref, () => {
        return {
            myTest: () => {
                console.log("Hello iam in my test");
            }
        }
    })

    return (
        <label
        className={`tooltip ${showToolTip ? 'show-tooltip' : 'hide-tooltip'}`}
        >
            This is {props.isActive ? "Active" : "Non Active"} tooltip
        </label>
    );
};

export default forwardRef(ToolTipUseImperative);