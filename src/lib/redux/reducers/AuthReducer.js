import LOAD_USER_DATA from '../../constants/auth';

const initialState = {
    id: undefined,
    type: undefined,
};

function AuthReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_USER_DATA:
            return { id: action.payload.id, type: action.payload.type };
        default:
            return state;
    }
}

export default AuthReducer;
