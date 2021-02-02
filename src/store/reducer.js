import { combineReducers } from 'redux';

import messagesReducer from './messageReducer';
import themeReducer from './themeReducer';
import languageReducer from './languageReducer';

const reducer =  combineReducers({
    counter: messagesReducer,
    theme: themeReducer,
    language: languageReducer
})

export default reducer;
