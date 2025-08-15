const database = require('./../connection/database'); 
const app = require('express').Router();

//criando a rota de "buscar" (GET) produtos
app.get('/api/produtos', async (req, res) => {
    let dados = await database.execute(`
        SELECT 
            tb_produto.*,
            tb_categoria.nome AS categoria
        FROM 
            tb_produto INNER JOIN tb_categoria
            ON tb_produto.categoria_id = tb_categoria.id
        ORDER BY tb_produto.id`);

    res.status(200);
    res.send(dados);
});

app.get('/api/produtos/:id', async (req, res) => {
    let id = req.params.id; //recuperando o id da URL

    let dados = await database.execute(`
        SELECT * FROM tb_produto WHERE id=${id}
    `);

    if (dados.length === 0) {
        res.status(404).send();
        return;
    }

    res.send(dados[0]);
});


app.delete('/api/produtos/:id', async (req, res) => {
    let id = req.params.id;

    await database.execute(`DELETE FROM tb_produto WHERE id=${id}`);

    res.status(204).send();
});

// app.use(express.json());
// TODO: retornar os dados que foram inseridos no banco
app.post('/api/produtos', async (req, res) => {
    let {nome, categoria_id, valor} = req.body;

    let sql = `
        INSERT INTO tb_produto (nome, categoria_id, valor)
        VALUES('${nome}', '${categoria_id}', '${valor}')
    `;

    await database.execute(sql);

    res.status(201).send();
});

// TODO: permitir alterar apenas alguns valores caso queira
app.patch('/api/produtos/:id', async (req, res) => {
    let id = req.params.id;

    let {nome, valor, categoria_id} = req.body;

    let sql = `
        UPDATE tb_produto SET
            nome      = '${nome}',
            categoria_id = '${categoria_id}',
            valor     = '${valor}'
        WHERE id=${id}    
    `;

    await database.execute(sql);

    res.send();
});


module.exports = app;