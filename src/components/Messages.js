import React from 'react';
import Message from './Message';
import PropTypes from 'prop-types';

class Messages extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let messages = this.props.messages;
        return (
            <div className='messages-wrapper'>
                <div className='messages'>
                    {messages.map((message, index) => <Message key={index} {...message} />)}
                </div>
            </div>
            
        )
    }
}

Messages.propTypes = {
    messages: PropTypes.array,
    map: PropTypes.func
}

export default Messages;
