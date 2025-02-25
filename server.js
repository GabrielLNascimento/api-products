require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db'); // Importando o arquivo db.js
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');

const app = express();

app.use(cors());

// Middleware para interpretar o corpo da requisição como JSON
app.use(express.json());

// Conectar ao MongoDB
connectDB();

// Usar as rotas de produtos
app.use('/api', productRoutes);

// Configurar a porta do servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
