import * as actions from '../actions/actionTypes';

const initialLanguageState = {
    language: 'en'
};

const languageReducer = (state = initialLanguageState, action) => {
    switch(action.type) {
        case actions.CHANGE_LANGUAGE:
            return {language: action.payload};
        default:
            return state;
    }
}

export default languageReducer;
