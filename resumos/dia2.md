# Dia 2 - Testes Estáticos (Swagger)

### O que é Swagger?

- Swagger é um conjunto de ferramentas de software de código aberto para documentação de APIs RESTful.

### OpenAPI Specification (OAS)

- Um padrão aberto para descrever APIs RESTful.
- Define informações como endpoints, métodos, parâmetros, tipos de dados e respostas.

### Uso

- **Criação de documentação**: Usar o Swagger Editor para definir endpoints e operações.

### Exemplos de uso

- **Documentação de APIs internas**: Melhorar a colaboração em equipes de desenvolvimento.
- **APIs públicas**: Fornecer documentação clara para desenvolvedores externos.

---

## Parametros do Swagger

### **Info**

- **title**: Título da API.
- **version**: Versão da API.
- **description**: Descrição da API.
- **termsOfService**: URL para os termos de serviço.
- **contact**: Informações de contato do responsável pela API.
- **license**: Informações sobre a licença da API.

### 2. **Servers**

- **url**: URL base da API.
- **description**: Descrição do servidor.

### 3. **Paths**

- **path**: Caminho da API (ex: `/users`).
- **method**: Métodos HTTP suportados (GET, POST, PUT, DELETE).
- **operationId**: Identificador único para a operação.
- **parameters**: Lista de parâmetros aceitos (query, path, header, cookie).
- **responses**: Códigos de resposta e seus respectivos conteúdos.

### 4. **Components**

- **schemas**: Definições de modelos de dados (objetos).
- **parameters**: Parâmetros reutilizáveis.
- **responses**: Respostas reutilizáveis.
- **headers**: Cabeçalhos reutilizáveis.
- **securitySchemes**: Definições de esquemas de segurança.

### 5. **Security**

- **security**: Define as regras de autenticação e autorização da API.

### 6. **Tags**

- **name**: Nome da tag.
- **description**: Descrição da tag.
- **externalDocs**: Documentação externa relacionada à tag.

### 7. **External Docs**

- **description**: Descrição da documentação externa.
- **url**: URL para a documentação externa.

---

## HTTP

### POST

- **Uso**: Enviar dados para o servidor para criar um novo recurso.
- **Exemplo**: Criar um novo usuário ou postagem.

### GET

- **Uso**: Recuperar dados do servidor.
- **Exemplo**: Obter informações sobre um usuário ou uma lista de produtos.

### PUT

- **Uso**: Atualizar um recurso existente ou criar um novo se ele não existir.
- **Exemplo**: Atualizar informações de um usuário específico.

### DELETE

- **Uso**: Remover um recurso do servidor.
- **Exemplo**: Excluir um usuário ou postagem.

### PATCH

- **Uso**: Atualizar parcialmente um recurso existente.
- **Exemplo**: Alterar apenas o endereço de e-mail de um usuário.
