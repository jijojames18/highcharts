import React, {useState} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

import {selectChartData} from '../../redux/chart/chart.selectors';
import CustomButton from '../../components/custom-button/custom-button.component';
import {signOutStart} from '../../redux/user/user.action';
import WithSpinner from '../with-spinner/with-spinner.component';

const Charts = ({chartData, signOutStart}) => {
    let [xAxisItem, setXAxisItem] = useState('insid');
    let [yAxisItem, setYAxisItem] = useState('dow');
    let [chartType, setChartType] = useState('line');

    let xAxis = [];
    let yAxis = [];

    chartData.forEach((item) => {
        let index = item[xAxisItem];
        let position = xAxis.indexOf(index);
        if (position === -1) {
            xAxis.push(index);
            yAxis[yAxis.length] = [item[yAxisItem]];
        } else {
            yAxis[position].push(item[yAxisItem]);
        }
    });

    let seriesData = xAxis.map((xPoint, index) => {
        return {
            name: xPoint,
            data: yAxis[index],
            visible: false
        }
    });

    const options = {
        title: {
            text: chartType.charAt(0).toUpperCase() + chartType.slice(1)
        },
        chart: {
            type: chartType
        },
        series: seriesData
    };

    return (
        <div>
            <AppBar position="static" color="default" elevation={0}>
                <Toolbar>
                    <CustomButton onClick={signOutStart} color="primary" variant="outlined">
                        Logout
                    </CustomButton>
                </Toolbar>
            </AppBar>
            <Container maxWidth="md">
                <Grid container spacing={1} direction="row" justify="center" alignItems="center">
                    <Grid item xs={12} sm={6} md={4}>
                        <FormControl>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={xAxisItem}
                                onChange={(event) => setXAxisItem(event.target.value) }
                            >
                                <MenuItem value="dom">dom</MenuItem>
                                <MenuItem value="dow">dow</MenuItem>
                                <MenuItem value="insid">insid</MenuItem>
                                <MenuItem value="hour">hour</MenuItem>
                                <MenuItem value="SumHourly">SumHourly</MenuItem>
                            </Select>
                            <FormHelperText>X -  Axis</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <FormControl>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={yAxisItem}
                                onChange={(event) => setYAxisItem(event.target.value) }
                            >
                                <MenuItem value="dom">dom</MenuItem>
                                <MenuItem value="dow">dow</MenuItem>
                                <MenuItem value="insid">insid</MenuItem>
                                <MenuItem value="hour">hour</MenuItem>
                                <MenuItem value="SumHourly">SumHourly</MenuItem>
                            </Select>
                        </FormControl>
                        <FormHelperText>Y Axis</FormHelperText>
                    </Grid>
                </Grid>
            </Container>
            <HighchartsReact highcharts={Highcharts} options={options}/>
            <Container maxWidth="md">
                <Grid container spacing={1} direction="row" justify="center" alignItems="center">
                    <Grid item xs={4} sm={6} md={4}>
                        <CustomButton variant="contained" onClick={() => setChartType('line')}
                                      color="primary">Line</CustomButton>
                    </Grid>
                    <Grid item xs={4} sm={6} md={4}>
                        <CustomButton variant="contained" onClick={() => setChartType('bar')}
                                      color="primary">Bar</CustomButton>
                    </Grid>
                    <Grid item xs={4} sm={6} md={4}>
                        <CustomButton variant="contained" onClick={() => setChartType('area')}
                                      color="primary">Area</CustomButton>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    chartData: selectChartData
});

const mapDispatchToProps = (dispatch) => ({
    signOutStart: () => dispatch(signOutStart())
});

export default WithSpinner(connect(mapStateToProps, mapDispatchToProps)(Charts));