import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeLanguage, changeTheme } from '../actions/actions';
import { language } from './Data';


const Setting = ({ currentLanguage, currentTheme, changeLanguage, changeTheme }) => {

    const changeLanguages = (lang) => {
        changeLanguage(lang)
    }

    const changeThemes = (theme) => {
        changeTheme(theme)
    }

    return (
        <div className='extra-window setting'>
            <Link to='/'>
                <div className='return-link'>
                    {language[currentLanguage].backToChat}
                </div>
            </Link>
            <h2 className='setting_header'>
                {language[currentLanguage].setting}
            </h2>
            <div className='setting_items'>
                <div className='setting_themes themes'>
                    <div>
                        {language[currentLanguage].changeTheme}
                    </div>
                    <div className='themes_item themes_item__light'>
                        <label htmlFor='light'>
                            {language[currentLanguage].lightTheme}
                        </label>
                        <input
                            defaultChecked={currentTheme === 'light'}
                            onChange={() => { changeThemes('light') }}
                            name='theme' 
                            type='radio' 
                            id='light' 
                        />
                    </div>
                    <div className='themes_item themes_item__dark'>
                        <label htmlFor='dark'>
                            {language[currentLanguage].darkTheme}
                        </label>
                        <input 
                            defaultChecked={currentTheme === 'dark'}
                            onChange={() => { changeThemes('dark') }}
                            name='theme' 
                            type='radio' 
                            id='dark' 
                        />
                    </div>
                </div>
                <div className='setting_language languages'>
                    <div>
                        {language[currentLanguage].changeLanguage}
                    </div>
                        <div className='languages_item languages_item__ru'>
                            <label htmlFor='ru'>
                                {language[currentLanguage].russian}
                            </label>
                            <input 
                                defaultChecked={currentLanguage === 'ru'}
                                onChange={() => { changeLanguages('ru') }}
                                name='lang' 
                                type='radio' 
                                id='ru' 
                            />
                        </div>
                        <div className='languages_item languages_item__en'>
                            <label htmlFor='en'>
                                {language[currentLanguage].english}
                            </label>
                            <input 
                                defaultChecked={currentLanguage === 'en'}
                                onChange={() => { changeLanguages('en') }}
                                name='lang' 
                                type='radio' 
                                id='en' 
                            />
                        </div>
                </div>
            </div>
        </div>
    )
}

Setting.propTypes = {
    currentLanguage: PropTypes.string,
    changeLanguage: PropTypes.func,
    changeTheme: PropTypes.func,
    currentTheme: PropTypes.string
}

const mapStateToProps = (state) => {
    return {
        currentLanguage: state.language.language,
        currentTheme: state.theme.theme
    }
}

const mapDispatchToProps = {
    changeLanguage: changeLanguage,
    changeTheme: changeTheme
}

export default connect(mapStateToProps, mapDispatchToProps)(Setting);
