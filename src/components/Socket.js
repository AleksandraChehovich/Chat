let socket = new WebSocket('ws://chat.shas.tel');

socket.onopen = function() {
    console.log('Соединение установлено.');
};

socket.onclose = function(event) {
    if(event.wasClear) {
        console.log('Соединение закрыто.');
    } else {
        console.log('Обрыв соединения.');
        socket = new WebSocket('ws://chat.shas.tel');
    }
    console.log(`Код ${event.code} причина`);
};

socket.onerror = function(error) {
    console.log(`Ошибка ${error.message}`);
}

export default socket;
