const express = require("express");

const produtoController = require("./controller/produtoController.js");

const app = express();

// Permite receber dados em JSON
app.use(express.json());


// GET - Listar todos os produtos
app.get("/produtos", produtoController.listarProdutos);

// GET - Consultar produto pelo ID
app.get("/produtos/:id", produtoController.buscarProdutoPorId);

// POST - Cadastrar novo produto
app.post("/produtos", produtoController.cadastrarProduto);

// Iniciar servidor
const PORTA = 3366;

app.listen(PORTA, () => {
    console.log(`Servidor rodando em ${PORTA}`);
});