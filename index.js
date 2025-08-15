const express = require('express');
const productRoute = require('./src/routes/ProductRoute');
const categoryRoute = require('./src/routes/CategoryRoute');

//iniciando o express
const app = express();

app.use(express.json());

//adicionando as rotas de produto ao express
app.use(productRoute, categoryRoute);

//subindo o servidor
app.listen(8001, () => {
    console.log('API rodando no endereco http://localhost:8001');
});

//npx nodemon index.js
