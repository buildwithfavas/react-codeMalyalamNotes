import { useSelector, useDispatch } from 'react-redux';
import { setShowLabel } from './3-reactRedux';

const Settin = () => {

    const dispatch = useDispatch();

    const handleShowLabel = (evt) => {
        const checkboxValue = evt.target.checked;
        dispatch(setShowLabel(checkboxValue));
    }

    const val = useSelector((state) => state.showLabel);

    return (
        <div>
            <input checked={val} onChange={handleShowLabel} type='checkbox' />Show label
        </div>
    );
};

export default Settin;