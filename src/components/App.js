import React, { useState } from 'react';
import socket from './Socket';

import Nav from './Nav';
import MessageForm from './Form';
import MessagesList from './Messages';
import LogInWindow from './Registration_window';

const isOpen = (socket) => (socket.readyState === socket.OPEN);

const App= () => {
    const [recievedMessages, setRecievedMessages] = useState([]);
    const [name, setName] = useState(localStorage.getItem('chat_name'));

    let audioRef = null;

    const addNewMessage = (mesObject) => {
        if (!socket.readyState) {
            setTimeout(() => {
                addNewMessage(mesObject);
            }, 100);
        } else {
            socket.send(JSON.stringify(mesObject));
        }
        console.log(isOpen(socket))
    };

    socket.onmessage = function(event) {
        let messagesArray = JSON.parse(event.data).reverse();
        console.log(messagesArray);
        if (recievedMessages.length !== 0) {
            audioRef.play();
        }
        setRecievedMessages(recievedMessages.concat(messagesArray));
        console.log(recievedMessages);
    }

    const changeName = (value) => {
        setName(value);
    }

    return (
        <div className='chat-wrapper'>
            <audio ref={(audio) => {audioRef = audio}}>
                <source src={'./clearly-602.mp3'} />
            </audio>
            <LogInWindow logIn={name} onSubmit={changeName}/>
            <Nav name={name} onClick={changeName}/>
            <MessagesList recievedMessages={recievedMessages}/>
            <MessageForm name={name} onSubmit={addNewMessage}/>
        </div>
    );    
}

export default App;
