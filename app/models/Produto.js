import { Schema, model } from "mongoose";

var productSchema = new Schema({
    nome: String,
    preco: Number,
    descricao: String
});

export default model("Produto", productSchema);