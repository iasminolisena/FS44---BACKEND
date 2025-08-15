----------------------------------
-- COMANDOS PARA BANCO DE DADOS --
----------------------------------

-- Comando para listar os bancos de dados --
SHOW DATABASES;

-- Para criar um banco de dados --
CREATE DATABASE db_escola_melhor;

-- Para excluir um banco de dados --
DROP DATABASE db_escola_melhor;

-- Para selecionar um banco de dados --
USE db_escola_melhor;

----------------------------------
-- COMANDOS PARA BANCO DE DADOS --
----------------------------------

-- Listar as tabelas de um banco --
SHOW TABLES;

-- Para excluir uma tabela --
DROP TABLE nome_da_tabela;

-- Para criar uma tabela --
CREATE TABLE tb_curso (
    id INT(3) PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR (50) NOT NULL,
    carga_horaria INT(4)
);

-- Detalhes de uma tabela --
DESC tb_curso;

CREATE TABLE tb_aluno (
    id INT(3) PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(20),
    email VARCHAR(255) NOT NULL UNIQUE,
    cpf CHAR(11) NOT NULL UNIQUE,
    status BOOLEAN DEFAULT TRUE
);

-- Atualizar a estrutura da tabela --
ALTER TABLE tb_aluno DROP COLUMN coluna_a_mais;
ALTER TABLE tb_aluno ADD COLUMN status BOOLEAN;


---------------------------------------
-- Comandos de MANIPULAÇÃO dos dados --
---------------------------------------

-- Buscar/Projetar dados em uma tabela --
-- "todos" as colunas de "todos" os registros --
SELECT * FROM tb_curso;

-- Contar o numero de registros --
SELECT COUNT(*) FROM tb_curso;

SELECT nome FROM tb_curso;

-- Procurar todos os curso que possuem a palavra "web" --
SELECT * FROM tb_curso WHERE nome LIKE '%web%';

-- Excluir um registro da tabela --
DELETE FROM tb_curso WHERE id=78;

-- Inserir dados dentro da tabela --
INSERT INTO tb_curso 
    (carga_horaria, nome)
VALUES
    ('192', 'Desenvolvimento Fullstack');

INSERT INTO tb_curso 
    (carga_horaria, nome)
VALUES
    ('96', 'Desenvolvimento PHP');

