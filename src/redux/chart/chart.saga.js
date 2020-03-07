import {takeLatest, put, all, call} from 'redux-saga/effects';
import axios from 'axios';

import {chartFetchSuccess, chartFetchFailure} from '../chart/chart.action';

export function* chartFetchStart() {
    try {
        const data = yield axios.get('data.json')
        yield put(chartFetchSuccess(data.data));
    } catch (e) {
        yield put(chartFetchFailure(e));
    }
}

export function* onChartFetchStart() {
    yield takeLatest('CHART_FETCH_START', chartFetchStart)
}

export function* chartSagas() {
    yield all(
        [
            call(onChartFetchStart)
        ]
    );
}