import express from 'express';
import bodyParser from 'body-parser';
import { connect } from 'mongoose';

const app = express();

//Camada de persistência
connect("mongodb://localhost/dbCrud", { useNewUrlParser: true });

//Configuração do server para usar o body-parser
app.use(bodyParser.urlencoded({ extended: true })).use(bodyParser.json());

//Definindo a porta via arquivo de configuração JSON
var port = process.env.port || 3000;

//Definindo Rotas
//todas as rotas da aplicação vão passar por esse cara
//var router = express.Router();
import Produto from './app/controllers/produtoController';
import Autor from './app/controllers/autorController';
import Artigo from './app/controllers/artigoController';

//Middleware
// router.use((req, res, next) => {
//     //Aqui poderão ser implementadas rotinas de
//     // autenticação, log, validações, erros, etc.
//     console.log("Interceptação pelo Middleware");
//     next();
// })

//router.get('/', (req, res) => res.json({ "message": "Rota de Teste OK!" }));

//Vincular a aplicação 'app' ao motor de rotas
//app.use('/api', router);
app.use('/api', [Produto, Autor, Artigo]);

app.listen(port, () => {
    console.log(`Aplicação online na porta ${port}.`)
})