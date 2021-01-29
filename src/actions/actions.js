import * as actions from '../actions/actionTypes';

export function countMessages() {
    return {
        type: actions.MESSAGES_COUNTER
    }
}

export function changeLanguageToRu() {
    return {
        type: actions.RU_LANGUAGE
    }
}

export function changeLanguageToEn() {
    return {
        type: actions.EN_LANGUAGE
    }
}

export function changeThemeToDark() {
    return {
        type: actions.DARK_THEME
    }
}

export function changeThemeToLight() {
    return {
        type: actions.LIGHT_THEME
    }
}
