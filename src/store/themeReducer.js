import * as actions from '../actions/actionTypes';

const initialThemeState = {
    theme: 'light'
};

const themeReducer = (state = initialThemeState, action) => {
    switch(action.type) {
        case actions.CHANGE_THEME:
            return {theme: action.payload};
        default:
            return state;
    }
}

export default themeReducer;
