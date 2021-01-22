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
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({ from: this.props.name,
                              message: this.state.value
                            });
        this.setState({value: ''});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className='message-form'>
                    <div className='input_wrapper'>
                        <input 
                            className='message-form_input' 
                            cols="60" rows="3" type='text' 
                            value={this.state.value} 
                            onChange={this.handleChange}
                        />
                    </div>
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
