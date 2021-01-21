import React, { useState } from 'react';

import Nav from './Nav';
import MessageForm from './Form';
import MessagesList from './Messages';
import LogInWindow from './Registration_window';

const App= () => {
    const [messages, setMessages] = useState([]);
    const [name, setName] = useState(localStorage.getItem('chat_name'));

    const addNewMessage = (mesObject) => {
        setMessages(messages.concat([mesObject]));
    };

    const changeName = (value) => {
        setName(value);
    }

    return (
        <div className='chat-wrapper'>
            <LogInWindow logIn={name} onSubmit={changeName}/>
            <Nav name={name} onClick={changeName}/>
            <MessagesList messages={messages}/>
            <MessageForm name={name} onSubmit={addNewMessage}/>
        </div>
    );    
}

export default App;
