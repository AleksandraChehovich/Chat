import React from 'react';
import PropTypes from 'prop-types';

class Status extends React.Component {
    constructor(props) {
        super(props)
    }

    handleChange = () => {
        localStorage.setItem('chat_name', '');
        this.props.onClick('');
    }

    render() {
        return (
            <div className='nav_status'>
                <button 
                data-title='Click to change' 
                className='nav_status-item'
                onClick={this.handleChange}>
                    {this.props.status}
                </button>
            </div>
        )
    }
}

Status.propTypes = {
    status: PropTypes.string,
    onClick: PropTypes.func
}


export default Status;
