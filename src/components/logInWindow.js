import React from 'react';
import PropTypes from 'prop-types';
import RegistrationForm from './RegistrationForm';

const LogIn = (props) => {
   
    const registrate = (name) => {
        props.onSubmit(name);
    }

    return (
        <div className='logIn' style={{display: props.logIn ? 'none' : 'block'}}>
            <RegistrationForm onSubmit={registrate}/>
        </div>
    )
}

LogIn.propTypes = {
    onSubmit: PropTypes.func,
    logIn: PropTypes.string
}

export default LogIn;
