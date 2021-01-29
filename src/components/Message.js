import React from 'react';
import PropTypes from 'prop-types';

const SendMessage = (props) => {
    let classN = props.from === localStorage.getItem('chat_name') ? 'message message__sent' : 'message message__recieve';
    let date = new Date(props.time);
    return (
        <div className={classN}>
            <div className='message_time'>{date.toLocaleTimeString()}</div>
            <div className='message_author'>
                <span className='message_author__from'>From: </span>
                {props.from}
                </div>
            <div className='message_text'>{props.message}</div>
        </div>
    )
}

SendMessage.propTypes = {
    from: PropTypes.string,
    message: PropTypes.string,
    className: PropTypes.string,
    time: PropTypes.number
}

export default SendMessage;
