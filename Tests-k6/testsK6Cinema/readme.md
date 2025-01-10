# Testes no K

## Pré-requisitos

Certifique-se de que você possui o seguinte instalado:

- [Node.js](https://gitlab.com/estagio-compassuol/projetoCompassUOL/-/wikis/sprint4/installNode) (versão 14 ou superior)
- [k6](https://gitlab.com/estagio-compassuol/projetoCompassUOL/-/wikis/sprint6/k6_test_tool)

---

## Instalação

1. Clone este repositório ou extraia os arquivos.
   ```bash
   git clone https://gitlab.com/estagio-compassuol/projetoCompassUOL.git
   ```
2. Acesse o diretório do projeto:
   ```bash
   cd k6
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

---

## Execução

### Iniciar o sistema

Se o sistema possui uma aplicação funcional:

```bash
npm start
```

### Executar os testes

Para rodar os testes automatizados com Mocha e Chai:

```bash
k6 run <nome_do_arquivo.js>
```

---

## Estrutura de Arquivos

testsK6/
├── README.md
├── data/
│   ├── static/              # Dados estáticos
│   └── dynamic/             # Dados dinâmicos
├── services/                # Funções auxiliares
│   ├── baseRest.js         # Funções para requisições HTTP
│   └── baseService.js      # Contrutor base para baseRest.js
├── support/                 # Funções de suporte
│   ├── base/                # Funções base
│   │   ├──baseChecks.js     # Funções de validação
│   │   └──baseTest.js       # Centralização de funções comuns
│   │   └──constants.js      # Constantes das rotas
│   └── config/              # Funções de configuração
│       └──enviroment.js     # Configuração de options e thresholds
└── tests/scenarios/               # Cenarios de testes
      ├── fluxos/             # Testes de Fluxo completo
      │   ├── fluxoAdicionarRemoverProduto.js
      │   ├── fluxoCompraCancelada.js
      │   └── fluxoCompraConcluida.js
      ├── produtos/            # Testes para a rota /produtos
      │   ├── loadProdutos.js
      │   ├── smokeProdutos.js
      │   ├── soakProdutos.js
      │   ├── spikeProdutos.js
      │   └── stressProdutos.js
      ├── usuarios/            # Testes para a rota /usuarios
      │   ├── loadUsuarios.js
      │   ├── smokeUsuarios.js
      │   ├── soakUsuarios.js
      │   ├── spikeUsuarios.js
      │   └── stressUsuarios.js
      ├── login/               # Testes para a rota /login
      │   ├── loadLogin.js
      │   ├── spikeLogin.js
      │   └── stressLogin.js
      └── carrinhos/            # Testes para a rota /carrinhos
         ├── loadCarrinhos.js
         ├── smokeCarrinhos.js
         ├── soakCarrinhos.js
         ├── spikeCarrinhos.js
         └── stressCarrinhos.js


---

## Tecnologias Utilizadas

- [**Node.js**](https://nodejs.org/pt/)
- [**K6**](https://k6.io/)

---

[Início](https://gitlab.com/estagio-compassuol/projetoCompassUol)
