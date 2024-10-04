# NOSQL

## O que é NoSQL?
- **NoSQL (Not Only SQL)**: Conjunto de tecnologias de bancos de dados que não utilizam o modelo relacional tradicional.
- **Objetivo**: Gerenciar grandes volumes de dados, escalabilidade horizontal e flexibilidade na estrutura de dados.

## Tipos de Bancos de Dados NoSQL

### 1. Document Store
- **Descrição**: Armazena dados em documentos (geralmente em formato JSON ou BSON).
- **Exemplos**: MongoDB, CouchDB.


## Exercitando  NOSQL

## TABELA USUARIOS

### db.usuarios.countDocuments();;
- Realizar uma consulta que conte o número de registros na tabela<br>
![contagem](/resumos/img/usuarios/dbCount.png)

### db.usuarios.updateOne  
- Atualiza usuario na tabela. <br>
![atualiza user ](/resumos/img/usuarios/DbUpdate.png)

### db.usuarios.findOne;
- Realizar uma consulta para encontrar o usuário com o nome "Bruce Wayne"<br>
![listar username = bruce](/resumos/img/usuarios/dbWayne.png)

### db.usuarios.findOne;
- Realizar uma consulta para encontrar o usuário com o e-mail "ghost_silva@fantasma.com"<br>
![listar email ghost](/resumos/img/usuarios/dbGhost.png)

### db.usuarios.deleteOne;
- Realizar uma consulta para deletar o usuário com e-mail "peterparker@marvel.com"<br>
![delete peter](/resumos/img/usuarios/dbPeter.png)


## TABELA PRODUTOS 

### db.produtos.find;
- Realizar uma consulta que apresente produtos com descrição vazia<br>
![descrição vazia](/resumos/img/produtos/dbDescricao.png)

### db.produtos.find;
- Realizar uma consulta que apresente produtos com a categoria "games"<br>
![produtos where categoria = 'games'](/resumos/img/produtos/dbGames.png)

### db.produtos.find;
- Realizar uma consulta que apresente produtos com preço "0"<br>
![preço = 0](/resumos/img/produtos/dbPreco0.png)

### db.produtos.find;
- Realizar uma consulta que apresente produtos com o preço maior que "100.00"<br>
- [x] ![valor maior que 100](/resumos/img/produtos/dbpreco+100.png)

### db.produtos.find;
- Realizar uma consulta que apresente produtos com o preço entre "1000.00" e "2000.00"<br>
![Valor entre 1000 e 2000](/resumos/img/produtos/db1000-2000.png)

### db.produtos.find;
- Realizar uma consulta que apresente produtos em que o nome contenha a palavra "jogo"<br>
![produtos where nome like %jogo%](/resumos/img/produtos/dbJogo.png)


