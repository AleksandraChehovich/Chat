import React, { useState, useEffect, useRef } from 'react';

import Nav from './Nav';
import MessageForm from './Form';
import MessagesList from './Messages';
import LogInWindow from './Registration_window';

const isOpen = (socket) => (socket.readyState === socket.OPEN);

const URL = 'ws://chat.shas.tel';

const App= () => {
    const [recievedMessages, setRecievedMessages] = useState([]);
    const [name, setName] = useState(localStorage.getItem('chat_name'));
    const [socket, setSocket] = useState(new WebSocket(URL));

    const audioRef =  useRef(null);

    useEffect(() => {
        
        socket.onopen = function() {
            console.log('Соединение установлено.');
        };

        socket.onclose = function(event) {
            if(event.wasClear) {
                console.log('Соединение закрыто.');
            } else {
                console.log('Обрыв соединения.');
                setSocket(new WebSocket(URL));
            }
            console.log(`Код ${event.code} причина`);
        };

        socket.onmessage = function(event) {
            let messagesArray = JSON.parse(event.data).reverse();
            console.log(messagesArray);
            if (messagesArray.length !== 0) {

                audioRef.current.play();
            }
            setRecievedMessages(recievedMessages.concat(messagesArray));
            console.log(recievedMessages);
        };

    });
        
    const addNewMessage = (mesObject) => {
        if (mesObject.message === '') {
            return;
        }
        if (!socket.readyState) {
            setTimeout(() => {
                addNewMessage(mesObject);
            }, 100);
        } else {
            socket.send(JSON.stringify(mesObject));
        }
        console.log(isOpen(socket))
    };

    const changeName = (value) => {
        setName(value);
    }

    return (
        <div className='chat-wrapper'>
            <audio ref={audioRef}>
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
