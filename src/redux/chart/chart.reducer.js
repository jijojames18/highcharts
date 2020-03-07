const INITIAL_STATE = {
    'chartData': null,
    'error': null
};

const chartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CHART_FETCH_SUCESSS':
            return {
                ...state,
                chartData: action.payload,
                error: null
            };
        case 'CHART_FETCH_FAILURE':
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default chartReducer;