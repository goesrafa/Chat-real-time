/* importar as configurações do servidor */
var app = require('./config/server');

/* parametrizar porta de escuta */
var server = app.listen(80, function(){
    console.log('Server online');
})

var io = require('socket.io').listen(server);

app.set('io', io);

/* Criar a conexão por WebSocket */
io.on('connection', function(socket){
    console.log('Usuário conectado');

    socket.on('disconnect', function(){
        console.log('Usuário desconectado');
    });

    socket.on('msgParaServidor', function(data){

        /**dialogo */
        socket.emit(
            'msgParaCliente',
            { apelido: data.apelido, mensagem: data.mensagem }
        );
        socket.broadcast.emit(
            'msgParaCliente',
            { apelido: data.apelido, mensagem: data.mensagem }
        );

        /**Participantes */
        if(parseInt(apelido_atualizado_nos_clientes == 0)){
            socket.emit(
                'participanteParaCliente',
                { apelido: data.apelido, mensagem: data.mensagem }
            );
            socket.broadcast.emit(
                'participanteParaCliente',
                { apelido: data.apelido }
            );
        }
        
    });
});