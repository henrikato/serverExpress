import { Router } from 'express';
import { Types } from 'mongoose';
import Livro from '../models/Livro';
const router = Router();

router.route('/livro')
.post((req, res) => {
    var livro = new Livro({
        _id: new Types.ObjectId,
        nome: req.body.nome,
        descricao: req.body.descricao,
        keyWords: req.body.keyWords,
        preco: req.body.preco,
        anoPublicacao: req.body.anoPublicacao,
        tombo: req.body.tombo,
        autor: req.body.autor
    });

    livro.save((err) => {
        if(err){
            res.status(418).send(`Erro ao tentar salvar o produto .(${err})`);
            return;
        }
        res.status(201).json({ message: "Livro inserido com sucesso!" });
    })
})
.get((req, res) => {
    Livro.find().populate('autor').exec((err, succ) => {
        if(err){
            res.status(418).json({
                mensagem: "Houve um erro ao processar sua requisição",
                url: req.url,
                erro: err
            });
            return;
        }
        res.status(200).json({
            livros: succ,
            __count: succ.length
        })
    })
});

export default router;