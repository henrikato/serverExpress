import { Schema, model } from "mongoose";

var productSchema = new Schema({
<<<<<<< HEAD
=======
    _id: Number,
>>>>>>> 74555661ec0f38fbcbd94b00e1dc84b7de45a850
    nome: String,
    preco: Number,
    descricao: String
});

export default model("Produto", productSchema);