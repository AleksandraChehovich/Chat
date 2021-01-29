import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeLanguageToRu, changeLanguageToEn, changeThemeToDark, changeThemeToLight } from '../actions/actions';
import { en, ru } from './Data';


const Setting = ({ language, toEn, toRu, theme, toDark, toLight }) => {

    return (
        <div className='extra-window setting'>
            <Link to='/'>
                <div className='return-link'>
                    {language === 'en' ?  en['back to chat'] : ru['back to chat']}
                </div>
            </Link>
            <h2 className='setting_header'>
                {language === 'en' ?  en['setting'] : ru['setting']}
            </h2>
            <div className='setting_items'>
                <div className='setting_themes themes'>
                    <div>
                        {language === 'en' ?  en['change theme'] : ru['change theme']}
                    </div>
                    <div className='themes_item themes_item__light'>
                        <label htmlFor='light'>
                            {language === 'en' ?  en['light theme'] : ru['light theme']}   
                        </label>
                        <input
                            defaultChecked={theme === 'light'}
                            onChange={() => { toLight() }}
                            name='theme' 
                            type='radio' 
                            id='light' 
                        />
                    </div>
                    <div className='themes_item themes_item__dark'>
                        <label htmlFor='dark'>
                            {language === 'en' ?  en['dark theme'] : ru['dark theme']} 
                        </label>
                        <input 
                            defaultChecked={theme === 'dark'}
                            onChange={() => { toDark() }}
                            name='theme' 
                            type='radio' 
                            id='dark' 
                        />
                    </div>
                </div>
                <div className='setting_language languages'>
                    <div>
                        {language === 'en' ?  en['change language'] : ru['change language']} 
                    </div>
                        <div className='languages_item languages_item__ru'>
                            <label htmlFor='ru'>
                                {language === 'en' ?  en['russian'] : ru['russian']} 
                            </label>
                            <input 
                                defaultChecked={language === 'ru'}
                                onChange={() => { toRu() }}
                                name='lang' 
                                type='radio' 
                                id='ru' 
                            />
                        </div>
                        <div className='languages_item languages_item__en'>
                            <label htmlFor='en'>
                                {language === 'en' ?  en['english'] : ru['english']} 
                            </label>
                            <input 
                                defaultChecked={language === 'en'}
                                onChange={() => { toEn() }}
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
    language: PropTypes.string,
    toEn: PropTypes.func,
    toRu: PropTypes.func,
    toDark: PropTypes.func,
    toLight: PropTypes.func,
    theme: PropTypes.string
}

const mapStateToProps = (state) => {
    return {
        language: state.language.language,
        theme: state.theme.theme
    }
}

const mapDispatchToProps = {
    toEn: changeLanguageToEn,
    toRu: changeLanguageToRu,
    toLight: changeThemeToLight,
    toDark: changeThemeToDark
}

export default connect(mapStateToProps, mapDispatchToProps)(Setting);
