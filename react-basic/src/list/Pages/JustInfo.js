import React from "react";

function JustInfo(props) {

    const { showLabel, onClick } = props;

    console.log("RENDER JUST INFO");
    return (
        <div>
            JUST INFO {showLabel}
        </div>
    );
}

export default React.memo(JustInfo);

// export default React.memo(JustInfo, (prevprops, nextProps) => {
//     return true;  //Not render in all cases,   if its false render in all cases
//     // Its have a class component equallent React.PureComponent
//     // 2nd argument is equallent to shouldComponentUpdate() in class component but the diffrence is in case of class component the false not render in all cases (ie, just opposite)
// });
