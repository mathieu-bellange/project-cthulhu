 let socket = new WebSocket('ws://localhost:3001');
 socket.addEventListener('message', function(event) {
    console.log('Message from server ', event.data);
});
