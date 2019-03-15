import { Schema, model } from 'mongoose';

const livroSchema = new Schema({
    _id: Schema.Types.ObjectId,
    nome: String,
    descricao: String,
    keyWords: [String],
    preco: Number,
    anoPublicacao: Date,
    tombo: Number,
    autor: { type: Schema.Types.ObjectId, ref: 'Autor' }
});

export default model("Livro", livroSchema);