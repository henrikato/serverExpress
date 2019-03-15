import { Schema, model } from 'mongoose';

const pessoaSchema = new Schema({
    _id: Schema.Types.ObjectId,
    nome: String,
    rg: String,
    contatos: Object
});

export default model("Pessoa", pessoaSchema);
