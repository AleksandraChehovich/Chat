import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from './SendButton';
import { en, ru } from './Data';

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
                    placeholder={props.language === 'en' ? en['enter'] : ru['enter']} 
                    ref={(input) => {inputRef = input}}
                    type='text'
                />
            </div>
            <Button classN={'logIn_button'} action={props.language === 'en' ? en['save'] : ru['save']}/>
        </form>
    )
}

RegistrationForm.propTypes = {
    onSubmit: PropTypes.func,
    language: PropTypes.string
}

const mapStateToProps = (state) => {
    return {
        language: state.language.language,
        theme: state.theme.theme
    }
}

export default connect(mapStateToProps)(RegistrationForm);
