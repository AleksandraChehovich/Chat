import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            errorInfo: null
        };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }

    render() {
        if(this.state.hasError) {
            return <h1>We caught an error!</h1>
        }

        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.element
}

export default ErrorBoundary;
