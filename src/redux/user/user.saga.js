import {takeLatest, put, all, call} from 'redux-saga/effects';

import {emailSignInSuccess, emailSignInFailure} from '../user/user.action';

export function* signInWithEmail({payload: {email, password}}) {
    try {
        if (email === "admin@gmail.com" && password === "1") {
            yield put(emailSignInSuccess({email: email}));
        } else {
            yield put(emailSignInFailure("Incorrect email or password"));
        }
    } catch (e) {
        yield put(emailSignInFailure(e));
    }
}

export function* onEmailSignInStart() {
    yield takeLatest('EMAIL_SIGN_IN_START', signInWithEmail)
}

export function* userSagas() {
    yield all(
        [
            call(onEmailSignInStart)
        ]
    );
}