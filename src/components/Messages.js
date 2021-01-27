import React from 'react';
import Message from './Message';
import PropTypes from 'prop-types';

class Messages extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let recievedMessages = this.props.recievedMessages;

        recievedMessages.flat()
        
        return (
            <div className='messages-wrapper'>
                <div className='messages'>
                    {recievedMessages.map(message => <Message key={message.id} {...message} />)}
                </div>
            </div>
            
        )
    }
}

Messages.propTypes = {
    messages: PropTypes.array,
    map: PropTypes.func,
    recievedMessages: PropTypes.array
}

export default Messages;
