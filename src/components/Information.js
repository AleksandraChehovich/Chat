import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { en, ru } from './Data';

const Info = ({counter, language}) => {
    return (
        <div className='extra-window info'>
            <Link to='/'>
                <div className='return-link'>
                    {language === 'en' ?  en['back to chat'] : ru['back to chat']}
                </div>
            </Link>
            <h2 className='info_header'>
                {language === 'en' ?  en['personal info'] : ru['personal info']}
            </h2>
            <p className='info_description'>
                ##########
            </p>
            <div className='info_message-counter'>
                <span>
                    {language === 'en' ?  en['number of messages'] : ru['number of messages']} 
                </span>
                <span>{counter}</span>
            </div>
            <div className='info_name'>
                <span>
                    {language === 'en' ?  en['user name'] : ru['user name']} 
                </span>
                <span>{localStorage.getItem('chat_name')}</span>
            </div>
        </div>
    )       
}

Info.propTypes = {
    counter: PropTypes.number,
    language: PropTypes.string
}

const mapSateToProps = (state) => {
    return {
        counter: state.counter.messageCount,
        language: state.language.language
    }
}

export default connect(mapSateToProps)(Info);
