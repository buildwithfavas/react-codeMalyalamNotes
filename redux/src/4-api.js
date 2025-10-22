import axios from 'axios';
import { setData, setError, setLoading } from './4-reactRedux';

function getDataInfo(dispatch) {
    return function (dispatch) {
        dispatch(setLoading(true));
        axios.get('data.json')  // make file name name incorrect and see how it works
            .then((response) => {
                dispatch(setData(response.data));
                dispatch(setLoading(false));
            })
            .catch(() => {
                dispatch(setLoading(false));
                dispatch(setError('An Error Occured'));
            })
    }
}

export default getDataInfo;