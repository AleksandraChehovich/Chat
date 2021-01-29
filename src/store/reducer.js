import * as actions from '../actions/actionTypes';
import { combineReducers } from 'redux';

const initialState = {
    messageCount: +sessionStorage.getItem('messages_counter') || 0
};

const messagesReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case actions.MESSAGES_COUNTER: 
            return {...state, messageCount: state.messageCount + 1};
        default: 
            return state;
    }
}

const initialThemeState = {
    theme: 'light'
};

const themeReducer = (state = initialThemeState, action) => {
    switch(action.type) {
        case actions.DARK_THEME:
            return {...state, theme: 'dark'};
        case actions.LIGHT_THEME:
            return {...state, theme: 'light'};
        default:
            return state;
    }
}

const initialLanguageState = {
    language: 'en'
};

const languageReducer = (state = initialLanguageState, action) => {
    switch(action.type) {
        case actions.RU_LANGUAGE:
            return {...state, language: 'ru'};
        case actions.EN_LANGUAGE:
            return {...state, language: 'en'};
        default:
            return state;
    }
}

const reducer =  combineReducers({
    counter: messagesReducer,
    theme: themeReducer,
    language: languageReducer
})

export default reducer;
