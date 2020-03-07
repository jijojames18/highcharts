import React from 'react';
import './with-spinner.styles.scss'

const WithSpinner = WrappedComponent => {
    const Spinner = ({isLoading, fetchData, ...otherProps}) => {
        if (isLoading && fetchData) {
            fetchData();
        }
        return isLoading ? (
            <div className="spinner-overlay ">
                <div className="spinner-container"></div>
            </div>
        ) : (
            <WrappedComponent {...otherProps} />
        )
    };

    return Spinner;

};

export default WithSpinner;