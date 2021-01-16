import React from 'react';

class SendButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button className='message-form_button' type='submit'>Send</button>
        )
    }
}

export default SendButton;
