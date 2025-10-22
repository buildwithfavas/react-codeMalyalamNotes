import { useSelector } from 'react-redux';

function Label(props) {
    const val = useSelector((state) => state.showLabel);

    return (
        <div>
            <h2>The value is : {val.toString()}</h2>
        </div>
    );
}

export default Label;