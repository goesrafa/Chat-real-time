/**Importar as configurações do serivdor */
var app = require('./config/server')

/**Porta de escuta */
var server = app.listen(80, function(){
    console.log('Server online');
})

require('socket.io').listen(server);