import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './SendButton';

const RegistrationForm = (props) => {
    // const [name, setName] = useState('');

    // const handleChange = (event) => {
    //     setName(event.target.value);
    // }

    let inputRef = null;

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('chat_name', inputRef.value)
        props.onSubmit(inputRef.value);
    }


    return (
        <form className='logIn_window' onSubmit={handleSubmit}>
            <input 
                className='logIn_input' 
                placeholder='Enter your name' 
                // value={name}
                // onChange={handleChange}
                ref={(input) => {inputRef = input}}
                type='text'
            />
            <Button classN={'logIn_button'} action={'Save'}/>
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
