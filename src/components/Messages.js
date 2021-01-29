import React from 'react';
import Message from './Message';
import PropTypes from 'prop-types';
import ScrollArrow from './ScrollArrow';
class Messages extends React.Component {
    constructor(props) {
        super(props);
    }

    handleScrollToView = () => {
        this.div.scrollTo(0, this.div.scrollHeight);
    }

    render() {
        let recievedMessages = this.props.recievedMessages;

        recievedMessages.flat()
        
        return (
            <div className='messages-wrapper' ref={node => this.div = node}>
                <div className='messages'>
                    {recievedMessages.map(message => <Message key={message.id} {...message} />)}
                </div>
                <ScrollArrow 
                    onClick={this.handleScrollToView}
                />
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
