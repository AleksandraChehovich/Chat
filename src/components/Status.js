import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SettingSvg from './SettingSVG';
class Status extends React.Component {
    constructor(props) {
        super(props);
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
                <Link to='/setting'>
                    <SettingSvg />
                </Link>
            </div>
        )
    }
}

Status.propTypes = {
    status: PropTypes.string,
    onClick: PropTypes.func
}


export default Status;
