import { useSelector, useDispatch } from 'react-redux'

export default function MyApp() {

    const value = useSelector((state) => {
        return state.value;
    });

    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => {
                dispatch({
                    type: 'Increment'
                });
            }}>Increment</button>
            <label>{value}</label>
            <button onClick={() => {
                dispatch({
                    type: 'Decrement'
                });
            }}>Decrement</button>
        </div>
    )
}
