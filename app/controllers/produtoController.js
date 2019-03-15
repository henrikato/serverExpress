import { Router } from 'express';
import Produto from '../models/Produto';
var router = Router();

router.route('/produto')
.post((req, res) => {
    var produto = new Produto({
        nome: req.body.nome,
        preco: req.body.preco,
        descricao: req.body.descricao
    });

    produto.save((err) => {
        if(err){
            res.status(418).send(`Erro ao tentar salvar o produto .(${err})`);
        }
        res.status(201).json({ message: "Produto inserido com sucesso!" });
    })
})
.get((req, res) => {
    Produto.find((err, retorno) => {
        if(err){
            res.status(418).json({
                mensagem: "Houve um erro ao processar sua requisição",
                url: req.url,
                erro: err
            })
        }
        res.status(200).json({
            produtos: retorno,
            __count: retorno.length
        });
    })
});

export default router;