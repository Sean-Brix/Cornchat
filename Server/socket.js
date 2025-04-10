import { Server } from 'socket.io'

export function connect_socket(server){

    // Create socket server
    const socket = new Server(server, {
      cors: {
        origin: "*", 
        methods:['POST', 'GET']
      }
    });

    // When a client connects to a socket this function runs, parameter (io) receives that specific socket's data
    socket.on('connection', (io)=>{

        // socket.emit(event, data): You can send events/messages to the specific client associated with this socket.
        io.emit('announce', {
            data1: "something",
            data2: "something"
        })
        
        // socket.on(event, callback): You can listen for events/messages from the specific client.
        io.on('message', (msg)=>{
            console.log("Client sent a data to me")
        })


        // A unique identifier for the specific socket connection. Every time a new client connects, a new socket instance is created with a unique id
        const socket_id = io.id;

        // Contains information about the initial handshake that occurred between the client and the server (e.g., headers, query parameters, etc.)
        const socket_handshake = io.handshake;

        // The rooms this socket is currently in. A socket can join multiple "rooms" to handle more complex group messaging.
        const socket_rooms = io.rooms;

        // You can store custom data on the socket object to track things like authentication or user info across events.
        const socket_data = io.data.user;


        // You can disconnect the specific socket (client).
        io.disconnect(); 
    });

}