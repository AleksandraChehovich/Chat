import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button className={this.props.classN} type='submit'>{this.props.action}</button>
        )
    }
}

Button.propTypes = {
    classN: PropTypes.string,
    action: PropTypes.string
}

export default Button;
