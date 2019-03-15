import { Schema, model } from 'mongoose';

const autorSchema = new Schema({
    _id: Schema.Types.ObjectId,
    nome: String,
    descricao: String,
});

export default model("Autor", autorSchema);