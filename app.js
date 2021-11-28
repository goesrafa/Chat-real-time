/**Importar as configurações do serivdor */

var app = require('./config/server')

/**Porta de escuta */
app.listen(80, function(){
    console.log('Server online')
})