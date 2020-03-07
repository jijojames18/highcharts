const INITIAL_STATE = {
    'currentUser': null,
    'error': null
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'EMAIL_SIGN_IN_SUCCESS':
            return {
                ...state,
                currentUser: action.payload,
                error: null
            };
        case 'EMAIL_SIGN_IN_FAILURE':
            return {
                ...state,
                error: action.payload
            };
        case 'SIGN_OUT_START':
            return {
                ...state,
                currentUser: null,
                error: null
            };
        default:
            return state;
    }
};

export default userReducer;