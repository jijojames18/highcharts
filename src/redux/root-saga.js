import {all, call} from 'redux-saga/effects';

import {userSagas} from './user/user.saga';
import {chartSagas} from './chart/chart.saga';

export default function* rootSaga() {
    yield all([
        call(userSagas),
        call(chartSagas)
    ])
}