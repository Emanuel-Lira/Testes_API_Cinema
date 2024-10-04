# Fundamentos do Teste de Software

## A Pirâmide de Testes ⛰️

- A função da pirâmide de testes é definir níveis de testes e orientar quanto à quantidade de testes que você deve ter em cada um desses níveis.

- No topo da pirâmide, temos os **testes de ponta a ponta (end to end ou e2e)**:
  - O objetivo deles é imitar o comportamento do usuário final nas nossas aplicações.

- Na base, temos os **testes de unidade**:
  - Verificamos o funcionamento da menor unidade de código testável da nossa aplicação.

- Temos os **testes de integração** no meio da pirâmide:
  - A ideia deles é verificar se um conjunto de unidades se comporta da maneira correta.

### Testes de Ponta a Ponta 🎯
- São testes que simulam o ambiente real:
  - Sobem a aplicação ou abrem o navegador, preenchem formulários, clicam em botões e, por fim, verificam se aconteceu o que era esperado.
  - Acontecem em um ambiente controlado e quem executa as ações é um "robô".

### Testes de Unidade 🔍
- Verificam o funcionamento da menor unidade de código testável da nossa aplicação.
- São independentes de colaboradores externos à unidade.
- O teste de unidade fica independente de qualquer agente externo real.
- Quando um teste de unidade falha, você sabe exatamente onde está o problema.

### Testes de Integração 🔗
- Testam algumas unidades funcionando em conjunto.
- São testes que testam funcionalidades e não o sistema como um todo:
  - Mais complicados (de fazer e manter) e demorados que os testes de unidade.
  - Bem mais simples (de fazer e manter) e rápidos que os testes de ponta a ponta.

- A pirâmide nos mostra a importância de que a maior parte do seu código seja coberto por testes de unidade, já que eles rodam muito rápido e são muito simples.  
- Já o nível de teste mais complexo e demorado (os de ponta a ponta) deve possuir menos testes.  
- Nessa lógica, temos menos testes de integração que de unidade, e (bem) menos testes de ponta a ponta que de integração.

## A Pirâmide de Testes Práticos 📊

- O “Test Pyramid” é uma metáfora que nos diz para agrupar testes de software em baldes de granularidade diferente.
- O ciclo de feedback drasticamente reduzido, alimentado por testes automatizados, anda de mãos dadas com práticas de desenvolvimento ágil.

### A Importância da Automação (Teste) 🤖
- Com a entrega contínua, você usa um pipeline de construção para testar automaticamente seu software e implantá-lo em seus ambientes de teste e produção.
- Automatizar tudo — da construção aos testes, implementação e infraestrutura — é o seu único caminho a seguir.
- Automatizar seus testes repetitivos pode ser uma grande virada de jogo na sua vida como desenvolvedor de software.
