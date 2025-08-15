const database = require('./../connection/database');

async function insert() {
    let {nome} = req.body;

    let dados = await database.execute(`
        INSERT INTO tb_categoria (nome)
        VALUES('${nome}')
    `);
    
    return dados;
}

async function all() {
    let dados = await database.execute('SELECT * FROM tb_categoria');

    return dados;
}

async function find(id) {
    let dados = await database.execute(`SELECT * FROM tb_categoria WHERE id=${id}`);

    return dados[0];
}

async function remove(id) {
    let dados = await database.execute(`SELECT * FROM tb_categoria WHERE id=${id}`);

    return dados;
}

async function update() {

}

module.exports = {
    all,
    find,
    insert,
    remove,
    update
};