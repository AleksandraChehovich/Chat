import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { language } from './Data';

const Info = ({counter, currentLanguage}) => {
    return (
        <div className='extra-window info'>
            <Link to='/'>
                <div className='return-link'>
                {language[currentLanguage].backToChat}
                </div>
            </Link>
            <h2 className='info_header'>
                {language[currentLanguage].personalInfo}
            </h2>
            <p className='info_description'>
                ##########
            </p>
            <div className='info_message-counter'>
                <span>
                    {language[currentLanguage].numberOfMessages}
                </span>
                <span>{counter}</span>
            </div>
            <div className='info_name'>
                <span>
                    {language[currentLanguage].userName}
                </span>
                <span>{localStorage.getItem('chat_name')}</span>
            </div>
        </div>
    )       
}

Info.propTypes = {
    counter: PropTypes.number,
    currentLanguage: PropTypes.string
}

const mapSateToProps = (state) => {
    return {
        counter: state.counter.messageCount,
        currentLanguage: state.language.language
    }
}

export default connect(mapSateToProps)(Info);
