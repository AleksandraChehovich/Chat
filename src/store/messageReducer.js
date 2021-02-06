import * as actions from '../actions/actionTypes';

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

export default messagesReducer;
