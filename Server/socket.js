import { Server } from 'socket.io';

export function connect_socket(server) {

  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ['POST', 'GET'],
    },
  });

  io.on('connection', (socket) => {

    socket.emit('all-message', []);

    socket.on('message-send', (msg) => {

      socket.broadcast.emit('message-receive', msg);

    });

    const socket_id = socket.id;
    const socket_handshake = socket.handshake;
    const socket_rooms = socket.rooms;
    const socket_data = socket.data.user;

    socket.on('shutdown', ()=>{
      socket.disconnect();
    })
  });
}