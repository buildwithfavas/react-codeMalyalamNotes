import { forwardRef } from 'react';

function ToolTipCustomHook(props, ref) {

    const { showToolTip , message } = props;
    
    return (
        <label
            ref={ref}
            className={`tooltip ${showToolTip ? 'show-tooltip' : 'hide-tooltip'}`}
        >
            {message}
        </label>
    );
};

export default forwardRef(ToolTipCustomHook);