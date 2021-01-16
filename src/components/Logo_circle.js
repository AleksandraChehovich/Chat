import React from 'react';
import PropTypes from 'prop-types';

class Circle extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return ( 
            <div className='logo_item' style={{background: this.props.color}}></div>
        );
    }
}

Circle.propTypes = {
    color: PropTypes.string
}

export default Circle;
