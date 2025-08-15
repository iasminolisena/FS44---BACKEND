const Categoria = require('../model/Categoria'); 
const app = require('express').Router();

//criando a rota de "buscar" (GET) categoria
app.get('/api/categorias', async (req, res) => {
    res.status(200);
    res.send(await Categoria.all());
});

app.get('/api/categorias/:id', async (req, res) => {
    let dados = await Categoria.find(req.params.id); //recuperando o id da URL

    if (dados === undefined){
        res.status(404).send();
        return;
    }

    res.send(dados);
});

app.delete('/api/categorias/:id', async (req, res) => {
    let dados = await Categoria.remove(req.params.id); //recuperando o id da URL

    res.status(204).send(dados);
});

app.post('/api/categorias', async (res) => {
    res.status(201)
    res.send(await Categoria.insert());
});

module.exports = app;