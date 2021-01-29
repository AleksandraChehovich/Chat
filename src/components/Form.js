import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from './SendButton';
import { en, ru } from './Data';

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
                    action={this.props.language === 'en' ? en['send'] : ru['send']}/>
                </div>
            </form>
        );
    }
}

Form.propTypes = {
    onSubmit: PropTypes.func,
    name: PropTypes.string,
    language: PropTypes.string
}

const mapSateToProps = (state) => {
    return {
        language: state.language.language,
        theme: state.theme.theme
    }
}

export default connect(mapSateToProps)(Form);
