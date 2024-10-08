# Dia 1 Conceitos HTTP, API REST, JSON, User Stories & Issues

## ***Definition of Ready* (DoR)**

---

### **Mas que problemas o *Definition of Ready* poderia evitar?**

- **S**eu time tem bloqueios na etapa de desenvolvimento constantemente?
- Parece que nunca conseguem lançar nada em produção, pois sempre há um bloqueio ou algo novo que aparece?
- Time desmotivado, pois se sente culpado por não realizar as entregas no prazo estabelecido?

### **o que é Definition of Ready (DoR)?**

- Basicamente são pré-requisitos de um backlog, para que seja considerado apto para iniciar o desenvolvimento.

### **DoR e DoD tem objetivos diferentes**

- DoD são os critérios para considerar uma história como concluída
- DoR, como eu já descrevi, são os critérios necessários para que uma história possa ser iniciada.

### **O que é importante estar no DoR?**

- O que o devTeam precisa ter para iniciar o desenvolvimento?
- O que precisa estar pronto para iniciar o desenvolvimento?
- Quais acessos, ferramentas, documentação e ambientes precisamos possuir para iniciar o desenvolvimento?
- Quais permissões e aprovações precisam ser realizadas para iniciar o desenvolvimento?
- Quais práticas e técnicas precisam ser feitas para iniciar o desenvolvimento?

### **Exemplo 1:  Equipe Front-End – História XYZ**

- Protótipo de alta fidelidade pronto e validado com o usuário.
- Protótipo de alta fidelidade pronto e entregue para devs.
- Protótipo de acessibilidade pronto e entregue para devs.
- Todas histórias refinadas pelo time de desenvolvimento.
- Todas as APIs prontas e validadas pelo time.

### **Exemplo 2: Produto Open Banking**

- As histórias devem estar escritas utilizando o modelo [INVEST](http://en.wikipedia.org/wiki/INVEST_(mnemonic)).
- Todas histórias refinadas.
- Possuir massa para testes.
- APIs dos parceiros prontas e validadas, que iremos utilizar na jornada X.
- Ambientes de desenvolvimento pronto e devs com acesso
- Ambiente de homologação pronto

### **Caso algum critério não seja cumprido no DoR, posso iniciar o desenvolvimento?**

- Caso esses critérios não sejam cumpridos ou sejam deixados de lado, pode haver bloqueios e dificuldades na etapa do desenvolvimento.
- Poder pode, mas o risco é bem alto.

- Digamos que você irá iniciar o desenvolvimento utilizando mocks. É muito importante mapear os riscos dessa decisão e alinhar muito bem as expectativas com todos os stakeholders do projeto

### **Quem é responsável por definir o DoR?**

- todas as pessoas no time

### **Quem é responsável por tornar um critério Ready?**

- Das lideranças do projeto, por exemplo, Team Lead, Scrum Master, Tech Lead e Product Owner.

### **Benefícios do DoR**

- evitar bloqueios na etapa de desenvolvimento
- cumprimento dos prazos estabelecidos
- time motivado por enxergar seu código sendo entregue na data correta

### **Desafios do DoR**

- A equipe pode inserir critérios do DoR que engessam o processo.

### [Análise de Requisitos de Software com Histórias de Usuários](https://compassuol.udemy.com/course/aprenda-a-mapear-requisitos-solidos-com-historias-de-usuario/)

### O que são historias de usuários

- Descrição resumida da feature que você vai implementar para o seu cliente
- cada historia de usuário é INDEPENDENTE
- precisa ser MENSURAVEL
- tem que ser TESTAVEL, significa que tem que definir os critérios de aceitação nessa historia

### O que é Example Mapping

- é uma técnica que utiliza para identificar as coisas que estão ocultas na historia de usuário
- 3 amigos
    - cliente
    - visão do dev
    - visão do testador

### Como Funciona o Example Mapping

- vai escolher uma historia e selecionar pessoas
    - maximo de 30 minutos na reunião
    - quadro de cartões coloridos(vc pode escolher as cores)
        - cartão amarelo(historia de usuário)
        - cartão azul(regra)
        - cartão verde(exemplos da regra)
        - cartão rosa(questionamentos)
    
    exemplo tem que ter:
    
    - Contexto
    - ação
    - resultado esperado

### Aprendendo na pratica(site para criar anúncios)

- Visão geral do projeto pratico
    - como / sendo
    - eu quero / gostaria / devo
    - para / porque

exemplos:

- como um usuário devo me cadastrar no site para poder criar um anuncio
- sendo um usuário cadastrado quero me autenticar no site
- Como um usuário autenticado, quero criar um anuncio gratuito para vender meu produto
- como um usuário autenticado, quero criar um anuncio pago para vender meu produto
    
    ### Cadastro de Usuário
    
    - **regras**
        - Dados Obrigatórios deverão ser informados
        - Identificador deve ser único no sistema
        - Senha do usuário deve ter no mínimo 8 caracteres
    - **Questão**
        - o usuário tem que validar o email?
    - **exemplos Dados Obrigatórios**
        - preencheu todos os dados e submeteu o form ⇒ ok
        - Deixou algum campo obrigatorio em branco e submeteu ⇒ erro
    - **identificador unico**
        - tem usuario com email “joaosilva.com”, tentar me cadastrar com email igual ⇒ erro
        - não existe usuario com email “joaosilva.com”, tentar me cadastrar ⇒ ok
        
        ### Autenticação de Usuário
        
        - Regras
            - usuario deve ter cadastro
            - Bloquear conta apos muitas tentativas e falhas na autenticação
        - Exemplos
            - usuario informou dados validos e submeteu ⇒ ok
            - usuario informou dados incorretos e submeteu ⇒ erro
            - Dados que o sistema tem um limite de 10 tentativas e o usuario errou 9 vezes, quando ele enviar os dados incorretos novamente ⇒ bloqueio da conta
        - Questões
            - Deve ter limite de tentativas de login?
            - Recuperação de senha?(pode virar uma segunda historia de usuario)
    
    ### Publicando Anuncio Gratuito
    
    - regras
        - Deve preencher os dados obrigatorios do produto
        - Anuncio sem destaque ⇒ publicado imediatamente
    - Exemplos
        - preencheu todos os dados ⇒ ok
        - esqueceu de informar algum dado obrigatorio ⇒ erro
        - preencheu todos os campos, selecionou anuncio sem destaque, submeteu ⇒ publicado
    
    ### Publicando Anuncio Pago
    
    - regra
        - deve preencher os dados obrigatorios do Produto
        - Anuncio com destaque deve ficar pendente ate confirmação do pagamento
    - Exemplos
        - Preencheu todos os dados e submeteu ⇒ ok
        - Esqueceu de informar o titulo do produto e submeteu ⇒ erro
        - preencheu todos os campos, selecionou anuncio destacado e submeteu ⇒ Pendente
    - Questões
        - Como o usuario faz para pagar o anuncio?(se torna uma nova historia de usuario)

### Introdução a APIS

REST - É um estilo de arquitetura que define padrões que facilitam a comunicação entre sistemas via web, permite que o cliente e o servidor sejam implementados independentemente

RESTful - Possui os mesmos princípios de REST. A diferença é que a API precisa estar de acordo com todas as regras e restrições definidas para a construção de APIs REST. Precisa ter um grau de maturidade alto para cumprir todos os critérios