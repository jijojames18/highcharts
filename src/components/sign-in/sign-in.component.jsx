import React, {useState} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import {emailSignInStart} from '../../redux/user/user.action';
import {selectSignInError} from '../../redux/user/user.selectors';

const SignIn = ({signInError, ...props}) => {
    const [userCredentials, setCredentials] = useState({'email': '', 'password': ''});

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const {email, password} = userCredentials;
        props.emailSignInStart(email, password);
    };

    const handleChange = (evt) => {
        const {value, name} = evt.target;
        setCredentials(
            {
                ...userCredentials,
                [name]: value
            }
        );
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div>
                <Typography component="h3" variant="h5" color="error">
                    {
                        signInError ? signInError : ''
                    }
                </Typography>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form onSubmit={handleSubmit}>
                    <FormInput
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth="true"
                        id="email"
                        label="Email Address"
                        name="email"
                        handleChange={handleChange}
                        value={userCredentials.email}
                        autoFocus
                    />
                    <FormInput
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth="true"
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        handleChange={handleChange}
                        value={userCredentials.password}
                    />
                    <CustomButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Sign In
                    </CustomButton>
                </form>
            </div>
        </Container>
    );
};

const mapDispatchToProps = dispatch => ({
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email: email, password: password}))
});

const mapStateToProps = createStructuredSelector({
    signInError: selectSignInError
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);