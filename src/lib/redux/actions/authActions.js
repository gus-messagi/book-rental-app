import LOAD_USER_DATA from '../../constants/auth';

const loadUser = (payload) => (dispatch) => {
    dispatch({
        type: LOAD_USER_DATA,
        payload,
    });
};

export default loadUser;
