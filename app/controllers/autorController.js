import { Router } from 'express';
import { Types } from 'mongoose';
import { mapSeries } from 'async';
import Autor from '../models/Autor';
import Livro from '../models/Livro';
const router = Router();

router.route("/autor")
.post((req, res) => {
    var autor = new Autor({
        _id: new Types.ObjectId,
        nome: req.body.nome,
        descricao: req.body.descricao,
    });

    autor.save((err) => {
        if(err){
            res.status(418).json({
                mensagem: `Erro ao tentar salvar o autor.`,
                erro: err
            });
            return;
        }
        res.status(201).json({ message: "Autor inserido com sucesso!" });
    })
})
.get((req, res) => {
    Autor.find().populate('livros').exec((err, succ) => {
        if(err){
            res.status(418).json({
                mensagem: "Houve um erro ao processar sua requisição",
                url: req.url,
                erro: err
            });
            return;
        }
        res.status(200).json({
            autores: succ,
            __count: succ.length
        })
    })
})

export default router;