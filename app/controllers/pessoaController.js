import { Router } from 'express';
import { Types } from 'mongoose';
import Pessoa from '../models/Pessoa';
const router = Router();

router.route("/pessoa")
.post((req, res) => {
    var pessoa = new Pessoa({
        _id: new Types.ObjectId,
        nome: req.body.nome,
        rg: req.body.rg,
        contatos: req.body.contatos
    });

    pessoa.save((err) => {
        if(err){
            res.status(418).json({
                mensagem: `Erro ao tentar salvar o autor.`,
                erro: err
            });
            return;
        }
        res.status(201).json({ message: "Pessoa inserida com sucesso!" });
    })
})
.get((req, res) => {
    Pessoa.find().exec((err, succ) => {
        if(err){
            res.status(418).json({
                mensagem: "Houve um erro ao processar sua requisição",
                url: req.url,
                erro: err
            });
            return;
        }
        res.status(200).json({
            pessoas: succ,
            __count: succ.length
        })
    })
})

export default router;