import React, { useState } from 'react';
import PropTypes from 'prop-types';

const RegistrationForm = (props) => {
    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('chat_name', name)
        props.onSubmit(name);
    }


    return (
        <form className='logIn_window' onSubmit={handleSubmit}>
            <input 
            className='logIn_input' 
            placeholder='Enter your name' 
            value={name}
            onChange={handleChange}
            type='text'/>
            <button className='logIn_button' type='submit'>Save</button>
        </form>
    )
}

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

RegistrationForm.propTypes = {
    onSubmit: PropTypes.func
}

LogIn.propTypes = {
    onSubmit: PropTypes.func,
    logIn: PropTypes.string
}

export default LogIn;
