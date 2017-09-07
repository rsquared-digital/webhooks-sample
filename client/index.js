import './style.css';
import io from 'socket.io-client';

$(() => {
  let socket = io();
  let app = $('#app'); 
  app.append('<h1> Events </h1>');
  socket.on('gitEvent', (data) => {
    app.append('<div> <strong>Event:</strong> ' + data.action + '</div>');
  });
});