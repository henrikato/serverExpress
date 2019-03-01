import { Router } from 'express';
import _ from 'lodash';
import Produto from '../models/Produto';
var router = Router();

router.route('/produto')
.post((req, res) => {
    var produto = new Produto({
        _id: req.body._id,
        nome: req.body.nome,
        preco: req.body.preco,
        descricao: req.body.descricao
    });

    produto.save((err) => {
        if(err){
            res.status(418).send(`Erro ao tentar salvar o produto .(${err})`);
            return;
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
            return;
        }
        res.status(200).json({
            produtos: retorno,
            __count: retorno.length
        });
    })
});

//Métodos para obter ou manipular itens específicos
router.get('/produto/:id', (req, res) => {
    Produto.find({ _id: req.params.id }, (err, retorno) => {
        if(err){
            res.status(418).json({
                mensagem: "Houve um erro ao processar sua requisição",
                url: req.url,
                erro: err
            })
            return;
        }
        res.status(200).json({
            produtos: retorno,
            __count: retorno.length
        });
    })
})
router.put('/produto/:id', (req, res) => {
    Produto.findByIdAndUpdate(req.params.id, req.body, null, (err, retorno) => {
        if(err){
            res.status(418).json({
                mensagem: "Houve um erro ao processar sua requisição",
                url: req.url,
                erro: err
            })
            return;
        }
        console.log(req.body)
        res.status(200).json({
            mensagem: `Produto #${req.params.id} alterado com sucesso!`,
        });
    })
})
router.delete('/produto/:id', (req, res) => {
    Produto.findByIdAndDelete(req.params.id, (err, retorno) => {
        if(err){
            res.status(418).json({
                mensagem: "Houve um erro ao processar sua requisição",
                url: req.url,
                erro: err
            })
            return;
        }
        res.status(200).json({
            mensagem: `Registro #${req.params.id} excluído com sucesso!`
        })
    });
});

export default router;