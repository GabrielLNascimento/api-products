const express = require('express');
const Product = require('../models/Products');
const router = express.Router();

// Rota para retornar todos os produtos
router.get('/produtos', async (req, res) => {
    try {
        const produtos = await Product.find();
        res.json(produtos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Rota para criar um produto
router.post('/produtos', async (req, res) => {
    const { nome, preço, urlImagem } = req.body;

    const newProduct = new Product({
        nome,
        preço,
        urlImagem,
    });

    try {
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Rota para deletar um produto pelo ID
router.delete('/produtos/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json({ message: 'Produto não encontrado' });
        }

        res.json({ message: 'Produto deletado com sucesso' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
