import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectIsChartsLoaded} from '../../redux/chart/chart.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import Charts from './charts.component';
import {chartFetchStart} from '../../redux/chart/chart.action';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsChartsLoaded
});

const mapDispatchToProps = (dispatch) => ({
    fetchData: () => dispatch(chartFetchStart())
});

export default WithSpinner(connect(mapStateToProps, mapDispatchToProps)(Charts));