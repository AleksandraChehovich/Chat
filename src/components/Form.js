import React from 'react';
import PropTypes from 'prop-types';

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
        this.props.onSubmit({from: this.props.name,
                             message: this.state.value});
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
                    <button 
                    className='message-form_button' 
                    type='submit'>
                        Send
                    </button>
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
