import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './3-reactRedux';

export default function Buttons() {

    const value = useSelector((state) => {
        return state.value;
    });

    const dispatch = useDispatch();

    //console.log(value);

    return (
        <div>
            <button onClick={() => {
                dispatch(increment());
            }
            }>Increment</button>{'  '}
            <label>{value}</label>{'  '}
            <button onClick={() => {
                dispatch(decrement());
            }
            }>Decrement</button>

        </div>
    )
}
