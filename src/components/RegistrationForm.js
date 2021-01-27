import React from 'react';
import PropTypes from 'prop-types';
import Button from './SendButton';

const RegistrationForm = (props) => {

    let inputRef = null;

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('chat_name', inputRef.value)
        props.onSubmit(inputRef.value);
    }


    return (
        <form className='logIn_window' onSubmit={handleSubmit}>
            <div className='input_wrapper'>
                <input 
                    className='logIn_input' 
                    placeholder='Enter your name' 
                    ref={(input) => {inputRef = input}}
                    type='text'
                />
            </div>
            <Button classN={'logIn_button'} action={'Save'}/>
        </form>
    )
}

RegistrationForm.propTypes = {
    onSubmit: PropTypes.func
}

export default RegistrationForm;
