import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SendMessage = ({ from, message, time }) => {
    
    let messageClass = classNames({
        message: true,
        'message message__sent': from === localStorage.getItem('chat_name'),
        'message message__recieve': from !== localStorage.getItem('chat_name')
    });

    let date = new Date(time);

    return (
        <div className={messageClass}>
            <div className='message_time'>{date.toLocaleTimeString()}</div>
            <div className='message_author'>
                <span className='message_author__from'>From: </span>
                {from}
                </div>
            <div className='message_text'>{message}</div>
        </div>
    )
}

SendMessage.propTypes = {
    from: PropTypes.string,
    message: PropTypes.string,
    time: PropTypes.number
}

export default SendMessage;
