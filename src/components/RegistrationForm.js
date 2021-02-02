import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from './SendButton';
import { language } from './Data';

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
                    placeholder={language[props.currentLanguage].enter}
                    ref={(input) => {inputRef = input}}
                    type='text'
                />
            </div>
            <Button classN={'logIn_button'} action={language[props.currentLanguage].save}/>
        </form>
    )
}

RegistrationForm.propTypes = {
    onSubmit: PropTypes.func,
    currentLanguage: PropTypes.string
}

const mapStateToProps = (state) => {
    return {
        currentLanguage: state.language.language
    }
}

export default connect(mapStateToProps)(RegistrationForm);
