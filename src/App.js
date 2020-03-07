import React, {useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import SignIn from './components/sign-in/sign-in.component';
import {selectCurrentUser} from './redux/user/user.selectors';
import ChartContainer from './components/charts/charts-container';

const App = (props) => {
    const {currentUser, history} = props;

    useEffect(() => {
        history.push('/chart');
    }, [currentUser]);

    return (
        <div>
            <Switch>
                <Route exact path='/chart' render={() =>
                    currentUser ? (
                        <ChartContainer/>
                    ) : (
                        history.push('/')
                    )
                }
                />
                <Route exact path="/" component={SignIn}/>
            </Switch>
        </div>
    );

};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

export default withRouter(connect(mapStateToProps)(App));
