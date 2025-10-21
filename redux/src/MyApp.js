import { useSelector, useDispatch } from 'react-redux'

export default function MyApp() {

    const value = useSelector((state) => {
        return state.value;
    });

    const dispatch = useDispatch();

    return (
        <div>
            <h2>This is by using function component</h2>
            <button onClick={() => {
                dispatch({
                    type: 'Increment'
                });
            }}>Increment</button>
            <hr/>
            <label>{value}</label>
            <hr/>
            <button onClick={() => {
                dispatch({
                    type: 'Decrement'
                });
            }}>Decrement</button>
        </div>
    )
}
