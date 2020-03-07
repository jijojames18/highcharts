import {createSelector} from 'reselect';

const selectChart = state => state.chart;

export const selectChartData = createSelector(
    [selectChart],
    (chart) => chart.chartData
);

export const selectIsChartsLoaded = createSelector(
    [selectChart],
    chart => chart.chartData === null
);