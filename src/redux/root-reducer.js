import userReducer from './user/user.reducer';
import {combineReducers} from 'redux';
import chartReducer from './chart/chart.reducer';

const rootReducer = combineReducers({
    user: userReducer,
    chart: chartReducer
});

export default rootReducer;