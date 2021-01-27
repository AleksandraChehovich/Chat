const notifyMe = () => {
    if (!('Notification' in window)) {
        console.log('This browser does not support desktop notification');
    } else if (Notification.permission === 'granted') {
        let notification = new Notification('You have unread messages.');
    } else if (Notification.permission !== 'denied' || Notification.permission === 'default') {
        Notification.requestPermission(function(permission) {
            if (permission === 'granted') {
                let notification = new Notification('You have unread messages.');
            } 
        });
    }
};

export default notifyMe;
