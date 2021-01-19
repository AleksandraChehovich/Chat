import React from 'react';
import PropTypes from 'prop-types';
import Button from './SendButton';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author: localStorage.getItem('chat_name'),
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({ from: this.props.name,
                              message: this.state.value,
                              time: (new Date()).toLocaleTimeString() });
        this.setState({value: ''});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className='message-form'>
                    <textarea 
                    className='message-form_input' 
                    cols="60" rows="3" type='text' 
                    value={this.state.value} 
                    onChange={this.handleChange}>
                    </textarea>
                    <Button 
                    classN={'message-form_button'} 
                    action={'Send'}/>
                </div>
            </form>
        );
    }
}

Form.propTypes = {
    onSubmit: PropTypes.func,
    name: PropTypes.string
}

export default Form;
