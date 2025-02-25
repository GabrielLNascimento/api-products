const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    preço: {
        type: Number,
        required: true,
    },
    urlImagem: {
        type: String,
        required: true,
    },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
