import React from 'react';
import PropTypes from 'prop-types';

const Message = (props) => {

    return (
        <div className='message message__sent'>
            <div className='message_author'>{props.from}:</div>
            <div className='message_text'>{props.message}</div>
        </div>
    )
}

Message.propTypes = {
    from: PropTypes.string,
    message: PropTypes.string
}

export default Message;
