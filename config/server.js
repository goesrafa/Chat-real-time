/**FrameWork do express */
var express = require('express')

/**Importação do módulo consign */
var consign = require('consign')

/**Importação do módulo body-parser */
var bodyParser = require('body-parser')

/**Importação do express-validator */
var { check, expressValidator } = require('express-validator')

/**Iniciando o express objetp */
var app = express()

/**Configuração do EJS, e setar as variáveis do 'view engine' e 'views' do express */
app.set('view engine', 'ejs')
app.set('views', './app/views')

/**Configuração do middleware  */
app.use(express.static('./app/piblic'))

/**Configuração do middleware  body-parser*/
app.use(bodyParser.urlencoded({extended : true}))

/**Configuração do middleware validator do express */
app.set(check)  

/**Efetuação do upload para o objeto app */
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app)

/**Exportação */
module.exports = app;