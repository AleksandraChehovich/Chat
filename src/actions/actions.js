import * as actions from '../actions/actionTypes';

export function countMessages() {
    return {
        type: actions.MESSAGES_COUNTER
    }
}

export function changeLanguage(language) {
    return {
        type: actions.CHANGE_LANGUAGE,
        payload: language
    }
}

export function changeTheme(theme) {
    return {
        type: actions.CHANGE_THEME,
        payload: theme
    }
}
