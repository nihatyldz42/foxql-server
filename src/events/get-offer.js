const name = 'get-offer';

exports.listener = (socket, server, data) => {

    const id = socket.id;

    socket.emit(name, server.clients.filter(e => e !== id));
}

exports.name = name;
