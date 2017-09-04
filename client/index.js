import './style.css';
import io from 'socket.io-client';

$(() => {
  let socket = io();
  let app = $('#app');
  socket.on('gitEvent', (data) => {
    console.log(data);
  });
});