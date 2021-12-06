/**Importar as configurações do serivdor */
var app = require('./config/server')

/**Porta de escuta */
var server = app.listen(80, function(){
    console.log('Server online');
})

var io = require('socket.io').listen(server);

app.set('io', io);

/**Criação da conexão por websocket */
io.on('connection', function(socket){

    socket.on('disconnect', function(){
    });

});