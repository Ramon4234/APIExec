const express = require('express')
const app = express.Router();

const produtoModel = require("../model/produtoModel.js");

// GET - Listar todos os produtos
function listarProdutos(req, res) {
    const produtos = produtoModel.listarProdutos();
    res.status(200).json(produtos);
        
}


// GET - Buscar produto pelo ID
function buscarProdutoPorId(req, res) {
    const id = req.params.id;


    if (!id || id <= 0) {
        return res.status(404).json({
            mensagem: "Produto não encontrado."
        });
    }

    // const produto = produtoModel.buscarProdutoPorId(id);

    // if (!produto) {
    //     return res.status(404).json({
    //         mensagem: "Produto não encontrado."
    //     });
    // }

    return res.status(200).json(id);
}

// POST - Cadastrar novo produto
function cadastrarProduto(req, res) {
    const { nome, categoria, preco, estoque } = req.body;

    // Verificar se todos os campos foram enviados
    if (
        nome === "" ||
        categoria === "" ||
        preco === 0 ||
        estoque === ""
    ) {
        return res.status(400).json({
            mensagem: "Dados inválidos. Informe nome, categoria, preco e estoque corretamente."
        });
    }

    const novoProduto = produtoModel.cadastrarProduto({
        nome: nome.trim(),
        categoria: categoria.trim(),
        preco,
        estoque
    });

    return res.status(201).json(novoProduto);
}

module.exports = {
    listarProdutos,
    buscarProdutoPorId,
    cadastrarProduto
};