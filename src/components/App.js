import React, { useState } from 'react';

import Nav from './Nav';
import Form from './Form';
import MessagesList from './Messages';
import LogIn from './Registration_window';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [name, setName] = useState(localStorage.getItem('chat_name'));
    // const [isLogIn, setIsLogIn] = useState(localStorage.getItem('chat_name') !== '' ? true : false);
    const [isLogIn, setIsLogIn] = useState(localStorage.getItem('chat_name') || '');

    const addNewMessage = (mesObject) => {
        setMessages(messages.concat([mesObject]));
    };

    const changeName = (value) => {
        setIsLogIn(value);
        setName(value);
    }

    return (
        <div className='chat-wrapper'>
            <LogIn logIn={isLogIn} onSubmit={changeName}/>
            <Nav name={name} onClick={changeName}/>
            <MessagesList messages={messages}/>
            <Form name={name} onSubmit={addNewMessage}/>
        </div>
    );    
}

export default Chat;
