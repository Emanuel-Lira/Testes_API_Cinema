# SQL

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
![valor maior que 100](/resumos/img/produtos/preco+100.png)

### SELECT * FROM produtos WHERE preco BETWEEN 1000.00 AND 2000.00;
- Realizar uma consulta que apresente produtos com o preço entre "1000.00" e "2000.00"<br>
![Valor entre 1000 e 2000](/resumos/img/produtos/1000-2000.png)

### SELECT * FROM produtos WHERE nome LIKE '%jogo%';
- Realizar uma consulta que apresente produtos em que o nome contenha a palavra "jogo"<br>
![produtos where nome like %jogo%](/resumos/img/produtos/nome-jogo.png)


