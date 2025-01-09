<a href="https://compass.uol/pt/home/" id="banner"> 
    <img src="img/1657646882524.jpeg" alt="Banner do Compass" />
  </a>



![Markdown](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white) 
![MyGet Downloads](https://img.shields.io/badge/MONGODB-black?style=for-the-badge&logo=MongoDB&logoColor=%23ffffff)
![SQL](https://img.shields.io/badge/MYSQL-black?style=for-the-badge&logo=MySQL) 
![Gitlab](https://img.shields.io/badge/Gitlab-black?style=for-the-badge&logo=gitlab&logoColor=%23ffffff)
![Build Status](https://img.shields.io/badge/build-passing-black) 
![Version](https://img.shields.io/badge/version-1.0.0-black)

## 📝 Informações

- 🧑🏽 **Nome** - Emanuel Silva lira
- 🎓 **Curso** - Análise e  Desenvolvimento de Sistemas
- 📅 **Semestre** - 3º Semestre
- 🏙️ **Cidade** - Campina Grande - PB
<br>
<a href="https://gitlab.com"><img src="https://gitlab.com/uploads/-/system/user/avatar/23014880/avatar.png?width=800" width="50"></a>


--- 

## 📱 Contato
[![contato](https://img.shields.io/badge/Instagram-black?style=for-the-badge&logo=Instagram)](https://www.instagram.com/emanuell.sl_/) [![contato](https://img.shields.io/badge/LinkedIn-black?style=for-the-badge&logo=LinkedIn&logoColor=blue)](https://www.linkedin.com/in/emanuel-silvalb/) [![Github](https://img.shields.io/badge/Github-black?style=for-the-badge&logo=GitHub&logoColor=white)](https://github.com/Emanuel-Lira)


# Projeto de Testes Automatizados com K6

Este repositório contém os scripts e configurações para a execução de testes automatizados utilizando a ferramenta [K6](https://k6.io/). O objetivo do projeto é validar fluxos críticos, endpoints de APIs e comportamentos esperados no sistema.


## 📂 Estrutura de pastas

```plaintext
├── data/
│   ├── dynamic/
│   │   ├── dynamicProductData.js
│   │   └── dynamicUserData.js
│   └── static/
│       └── staticData.json
├── reports/
├── scenarios/
│   ├── movies/
│   ├── tickets/
│   └── fluxos/
├── services/
│   ├── login/
│   ├── produtos/
│   └── usuarios/
├── support/
│   ├── base/
│   └── config/
└── README.md
```

## 📂 `data`  
Contém os dados necessários para a execução dos testes. A pasta está dividida em dois tipos de dados: dinâmicos e estáticos.

- **`dynamic`**: Scripts responsáveis por gerar dados dinâmicos para os testes.  
  Exemplos:  
    - `dynamicProductData.js`: Geração de dados dinâmicos relacionados a produtos.  
    - `dynamicUserData.js`: Geração de dados dinâmicos relacionados a usuários.

- **`static`**: Arquivos JSON contendo dados estáticos para os testes.  
  Exemplos:  
    - `staticData.json`: Dados pré-definidos para testes específicos.

---

## 📈 `reports`  
Contém os relatórios gerados após a execução dos testes. Esses relatórios são úteis para análise dos resultados.

- Exemplos de relatórios:
    - `resultadosFluxoCompraConcluido.html`
    - `resultadosSmokeGETUsuarios.html`

---

## 🧪 `scenarios`  
Scripts que definem os cenários de testes, organizados conforme a natureza dos testes.

- **`carrinhos`**: Pasta dedicada a testes relacionados a carrinhos de compras.  
- **`fluxos`**: Fluxos de testes específicos, que simulam processos do sistema.  
  Exemplos:  
    - `processoCompraConcluido.js`: Testa o fluxo de compra concluída.

---

## 🔧 `services`  
Scripts para interagir com os endpoints de APIs. Cada funcionalidade tem sua própria pasta, facilitando a organização e a reutilização de código.

- **`login`**: Scripts relacionados ao processo de autenticação e login.  
- **`produtos`**: Manipulação e operações sobre produtos.  
- **`usuarios`**: Operações e interações relacionadas aos usuários.

---

## 🛠️ `support`  
Scripts e configurações auxiliares que são compartilhados entre diferentes testes.

- **`base`**: Funções base utilizadas em vários testes, como helpers e utilitários.  
- **`config`**: Contém as configurações de ambiente e variáveis de configuração, como o arquivo `environments.js`.

---

## Pré-requisitos

- Node.js (v16 ou superior)
- K6 (versão mais recente)

## Instalação

1. Clone o repositório:
    
    ```
    git clone https://gitlab.com/sprints8071939/api-cinema.git
    ```
    
2. Instale as dependências do projeto:
    
    ```
    npm install
    ```

## Execução dos Testes

### Testes Locais

Execute os testes localmente utilizando o K6:

```
k6 run scenarios/fluxos/processoCompraConcluido.js
```

### Relatórios

Os relatórios dos testes são gerados automaticamente na pasta `reports` em formato HTML.

## Estrutura de Configuração

O arquivo `environments.js` é usado para configurar os ambientes, como:

- URL base da API.
- Variáveis de ambiente para autenticação.

## Contribuição

1. Faça um fork do repositório.
2. Crie uma nova branch:
    
    ```
    git checkout -b minha-feature
    ```
    
3. Realize suas alterações e faça commit:
    
    ```
    git commit -m "Minha nova feature"
    ```
    
4. Envie as alterações:
    
    ```
    git push origin minha-feature
    ```
    
5. Abra um Pull Request.

## 🤝 Citações e Colaborações

- [Gabriel Castro](https://gitlab.com/leirbagOstarc)
- [Giusepp de Couto](https://gitlab.com/giuuppa)
- [igor Coelho](https://gitlab.com/igorcoelh0)
- [Isadora](https://gitlab.com/isaapmachado2001)
- [Betania](https://gitlab.com/betaniaAmaral)
- [Diego Nachtigall](https://gitlab.com/ditsguts)
- [Julia Fick](https://gitlab.com/JuFick)
- [Eduarda Vieira](https://gitlab.com/eduarda-wq)
- [Diego P](https://gitlab.com/dgomp)
- [Carlos Daniel](https://gitlab.com/carlos-daniel1)

## Licença

Este projeto está licenciado sob a licença MIT.