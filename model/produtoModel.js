const produtos = require("../model/produtos.json");

// Listar todos os produtos
function listarProdutos() {
    return produtos;
}

// Buscar produto pelo ID
function buscarProdutoPorId(id) {
    return produtos.find(produto => produto.id === Number(id));
}

// Cadastrar novo produto
function cadastrarProduto(dados) {
    const novoId = produtos.length > 0
        ? Math.max(...produtos.map(produto => produto.id)) + 1
        : 1;

    const novoProduto = {
        id: novoId,
        nome: dados.nome,
        categoria: dados.categoria,
        preco: dados.preco,
        estoque: dados.estoque
    };

    produtos.push(novoProduto);

    return novoProduto;
}

module.exports = {
    listarProdutos,
    buscarProdutoPorId,
    cadastrarProduto
};