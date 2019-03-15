import { Schema, model } from "mongoose";

var productSchema = new Schema({
    _id: Number,
    nome: String,
    preco: Number,
    descricao: String
});

export default model("Produto", productSchema);