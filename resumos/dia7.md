# SQL

## O que é SQL?
- **SQL (Structured Query Language)**: Linguagem padrão para gerenciar e manipular bancos de dados relacionais.
  
## Principais Comandos SQL

### 1. Comandos de DML (Data Manipulation Language)
- **SELECT**: Recupera dados de uma ou mais tabelas.
- **INSERT**: Adiciona novos registros a uma tabela.
- **UPDATE**: Atualiza dados existentes em uma tabela.
- **DELETE**: Remove registros de uma tabela.

### 2. Comandos de DDL (Data Definition Language)
- **CREATE TABLE**: Cria uma nova tabela no banco de dados.
- **ALTER TABLE**: Modifica a estrutura de uma tabela existente.
- **DROP TABLE**: Remove uma tabela do banco de dados.

## Exercitando SQL

## TABELA USUARIOS

### SELECT COUNT(*) FROM usuarios;
- Realizar uma consulta que conte o número de registros na tabela<br>
![contagem](/resumos/img/usuarios/count.png)

### SELECT * FROM usuarios WHERE id = 10;
- Realizar uma consulta para encontrar o usuário com o id 10. <br>
![listar user id 10](/resumos/img/usuarios/id10.png)

### SELECT * FROM usuarios WHERE nome = 'Bruce Wayne';
- Realizar uma consulta para encontrar o usuário com o nome "Bruce Wayne"<br>
![listar username = bruce](/resumos/img/usuarios/bruce.png)

### SELECT * FROM usuarios WHERE email = 'ghost_silva@fantasma.com';
- Realizar uma consulta para encontrar o usuário com o e-mail "ghost_silva@fantasma.com"<br>
![listar email ghost](/resumos/img/usuarios/ghost.png)

### DELETE FROM usuarios WHERE email = 'peterparker@marvel.com';
- Realizar uma consulta para deletar o usuário com e-mail "peterparker@marvel.com"<br>
![delete peter](/resumos/img/usuarios/peter.png)


## TABELA PRODUTOS 

### SELECT * FROM produtos WHERE descricao = '';
- Realizar uma consulta que apresente produtos com descrição vazia<br>
![descrição vazia](/resumos/img/produtos/descricao.png)

### SELECT * FROM produtos WHERE categoria = 'games';
- Realizar uma consulta que apresente produtos com a categoria "games"<br>
![produtos where categoria = 'games'](/resumos/img/produtos/categoria-games.png)

### SELECT * FROM produtos WHERE preco = 0;
- Realizar uma consulta que apresente produtos com preço "0"<br>
![preço = 0](/resumos/img/produtos/preco%200.png)

### SELECT * FROM produtos WHERE preco > 100.00;
- Realizar uma consulta que apresente produtos com o preço maior que "100.00"<br>
- [x] ![valor maior que 100](/resumos/img/produtos/preco+100.png)

### SELECT * FROM produtos WHERE preco BETWEEN 1000.00 AND 2000.00;
- Realizar uma consulta que apresente produtos com o preço entre "1000.00" e "2000.00"<br>
![Valor entre 1000 e 2000](/resumos/img/produtos/1000-2000.png)

### SELECT * FROM produtos WHERE nome LIKE '%jogo%';
- Realizar uma consulta que apresente produtos em que o nome contenha a palavra "jogo"<br>
![produtos where nome like %jogo%](/resumos/img/produtos/nome-jogo.png)


