export const chartFetchStart = () => {
    return {
        type: 'CHART_FETCH_START'
    }
};

export const chartFetchSuccess = (data) => {
    return {
        type: 'CHART_FETCH_SUCESSS',
        payload: data
    }
};

export const chartFetchFailure = (error) => {
    return {
        type: 'CHART_FETCH_FAILURE',
        payload: error
    }
};