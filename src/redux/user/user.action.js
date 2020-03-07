export const emailSignInStart = (emailAndPassword) => {
    return {
        type: 'EMAIL_SIGN_IN_START',
        payload: emailAndPassword
    }
};

export const emailSignInSuccess = (user) => {
    return {
        type: 'EMAIL_SIGN_IN_SUCCESS',
        payload: user
    }
};

export const emailSignInFailure = (error) => {
    return {
        type: 'EMAIL_SIGN_IN_FAILURE',
        payload: error
    }
};

export const signOutStart = () => {
    return {
        type: 'SIGN_OUT_START'
    }
};

