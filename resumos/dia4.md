# Fundamentos do teste de software
===================================

## Início Rápido em Teste e QA

### Seção 2

#### Importância do Teste x Danos dos Bugs

  - A Importância dos Testes
    - Prevenção de danos
    - Garantia da qualidade
      - garante que o software funcione conforme o esperado
    - Melhora da experiência do usuário
      - bugs podem causar insatisfação nos usuários
    
  - Impactos dos Bugs

    - Impactos nos Negócios
      - Perda de confiança
        - Clientes insatisfeitos com produtos ou serviços com defeitos podem levar à perda de negócios futuros
      - Prejuízo financeiro
      - Dano à reputação

    - Impactos na Economia
      - Desperdício de recursos
      - Ineficiência

  - Os testes de software são um investimento fundamental para o sucesso de qualquer projeto de desenvolvimento

#### Teste demonstra a Presença de Defeitos, Nunca sua Ausência

  - A busca por um software perfeito é um ideal, mas não uma realidade
  - Múltiplas equipes de teste encontram diferentes defeitos
  - Corrigir defeitos gera novos defeitos
  - O conceito de "suficientemente bom"
    - Em muitos casos, é mais prático e econômico entregar um software com um número aceitável de defeitos do que buscar a perfeição absoluta

  - Em vez de buscar o zero defeito, o objetivo deve ser
    - Maximizar a qualidade do software
    - Minimizar os riscos
    - Satisfazer as necessidades dos usuários

#### Teste Exaustivo não é possivel
  - testar todas as possíveis combinações de um sistema, é inviável na prática
  - Por quê?
    - Custos elevados
    - Mudanças constantes
  - A importância da priorização
    - Análise de risco
      - Identificar as funcionalidades e componentes mais críticos do sistema para direcionar os testes
    - Foco nas áreas de maior impacto
      - Concentrar os testes nas áreas que podem causar maior prejuízo em caso de falha
    - Otimização de recursos
      - Utilizar os recursos de forma eficiente
  
  - Estratégias para lidar com a impossibilidade do teste exaustivo

    - Testes de caixa branca
      - Analisar o código fonte para identificar possíveis falhas
    - Testes de caixa preta
      - Verificar se o sistema funciona conforme o esperado sem se preocupar com a implementação interna
    - Testes de integração
      - Verificar como os diferentes componentes do sistema interagem entre si.
    - Testes de sistema
      - Avaliar o sistema como um todo, simulando as condições de uso real
    - Testes de aceitação
      - Verificar se o sistema atende aos requisitos do cliente.
#### Teste Antecipado

  - Quanto mais cedo, melhor
  - A regra dos 10x
    - A regra de Barry Boehm sugere que o custo de corrigir um defeito aumenta exponencialmente à medida que ele avança no ciclo de desenvolvimento
  - Prevenção de bugs
    - Ao iniciar os testes desde o início, é possível prevenir a propagação de defeitos para as fases seguintes
  - Melhoria da qualidade do software
    - O teste antecipado contribui para a criação de um produto mais confiável
  - Redução de custos
    - Evitar retrabalho e reduzir os custos de desenvolvimento

  - Benefícios do teste antecipado
    - Melhora da qualidade do produto
    - Aumento da produtividade

#### Paradoxo do Pesticida

  - A analogia com os pesticidas
    - Assim como os insetos desenvolvem resistência aos pesticidas, os defeitos em software podem se adaptar às estratégias de teste existentes.
  - A necessidade de inovação
    - Uma suíte de testes estática e automatizada, por mais completa que seja, pode se tornar obsoleta com o tempo
  - A importância da adaptação
    - Os testes devem evoluir junto com o software
  - O papel do teste exploratório
    - é fundamental realizar testes exploratórios para descobrir defeitos inesperados e avaliar a usabilidade do software

#### Teste Depende de Contexto

  - Contexto do negócio
    - As necessidades e prioridades do cliente devem ser levadas em consideração ao definir os objetivos dos testes
  - Customização das estratégias de teste
    - considerando fatores como complexidade, funcionalidades, plataforma e usuários.
  - Otimização dos recursos

#### A Ilusão da Ausencia de Erros
  - A perfeição técnica não garante o sucesso
    - Um software pode estar livre de defeitos técnicos, mas ainda assim falhar em atender às necessidades do usuário
  - A importância da usabilidade
    - A facilidade de uso e a intuitividade são fatores cruciais para a aceitação do software

#### Diferença entre Teste e QA
  - Imagine uma fabrica de carros:
    - Teste
      - Corresponde aos testes de qualidade realizados em cada carro antes de sair da fábrica como verificar se os faróis funcionam, se os freios estão eficientes e se o motor está funcionando corretamente
    - Garantia da qualidade
      - Engloba todas as atividades que garantem a qualidade do carro, desde a seleção dos materiais, o processo de fabricação, os controles de qualidade em cada etapa da produção, até o treinamento dos funcionários e a gestão da qualidade dos fornecedores

  - Teste: Atividade específica focada em identificar defeitos em um produto.
  - Garantia da qualidade (QA): Processo que envolve todas as atividades que visam garantir a qualidade do produto.

#### Erro, Ocorrencia, Defeito e Falha
  - Erro
    - Ação humana incorreta
      - Pode ser um equívoco na codificação, um erro de digitação, uma falha de comunicação
  - Defeito
    - Manifestação do erro no produto
      - É a consequência do erro, uma imperfeição no software

  - Falha
    - Consequência da execução de um defeito
      - É a manifestação externa do defeito

  - Ocorrência
    - Evento que merece investigação
      - qualquer situação que desvie do comportamento esperado do software

#### Tipos de Testes Baseados na IEC/ISO 25010

  - Evolução histórica
    - A ISO 25010 é resultado da evolução de normas anteriores, como a ISO 9126
  - Padronização
    - estabelece um conjunto de requisitos e métricas que podem ser utilizados para avaliar a qualidade de qualquer software
  - Estrutura da norma
    - A ISO 25010 divide a qualidade do software em oito características principais, que serão detalhadas abaixo

#### IEC/ISO 25010 - Adequação Funcional

  - Subcaracterísticas da Adequação Funcional
    - Completude
      - O software oferece todas as funcionalidades necessárias para atender às necessidades do usuário
    - Correção
      - O software produz resultados precisos e corretos
    - Apropriação
      - O software apresenta os resultados de forma clara, concisa e adequada ao usuário

#### IEC/ISO 25010 - Usabilidade
  - se refere à facilidade com que um usuário pode aprender e utilizar um software

  - Reconhecibilidade
    - A facilidade com que o usuário reconhece os elementos da interface e entende suas funções
  Aprendizabilidade
    - A facilidade com que o usuário pode aprender a usar o software.
    - Operabilidade
      - A eficiência com que o usuário pode realizar tarefas no software
    - Proteção contra erros
      - A capacidade do software de prevenir erros do usuário
    - Estética
      - A aparência visual do software, incluindo a escolha de cores, fontes e layout.
    - Acessibilidade
      - A capacidade do software de ser utilizado por pessoas com diferentes habilidades e necessidades

#### IEC/ISO 25010 - Compatibilidade
  - se refere à capacidade de um software de coexistir e interagir com outros softwares em um ambiente compartilhado

  - Interoperabilidade
    -  capacidade do software de se comunicar e trocar dados com outros softwares.

#### IEC/ISO 25010 - Confiança

  - A capacidade do software de funcionar de forma consistente e contínua ao longo do tempo
  - Maturidade
    - A capacidade do software de evitar falhas através de mecanismos de detecção e prevenção
  - Disponibilidade
    - A proporção de tempo em que o software está operacional e acessível aos usuários
  - Tolerância a falhas
    - A capacidade do software de continuar funcionando mesmo na presença de falhas
  - Recuperabilidade
    - A capacidade do software de ser restaurado a um estado operacional após uma falha

#### IEC/ISO 25010 - Eficiência no Desempenho
  - se refere à capacidade de um software de executar suas tarefas de forma rápida e eficiente

  - Tempo de resposta
    - Refere-se à velocidade com que o software responde às solicitações do usuário
  - Utilização de recursos
    - Refere-se à quantidade de recursos do sistema (como CPU, memória e disco) que o software utiliza.
  - Capacidade
    - Refere-se à capacidade do software de lidar com uma carga de trabalho crescente

#### IEC/ISO 25010 - Manutenibilidade
  - se refere à facilidade com que ele pode ser modificado ou ajustado após a sua entrega

  - Analisabilidade
    - Facilidade de diagnosticar as causas de um defeito ou de identificar as partes do software que precisam ser modificadas
  - Modificabilidade
    - Facilidade de implementar as mudanças necessárias
  - Testabilidade
    - Facilidade de testar as mudanças e de verificar se o software ainda funciona corretamente após as modificações
  - Estabilidade
    - A probabilidade de que mudanças em uma parte do software causem efeitos colaterais indesejados em outras partes.
  - Portabilidade
    - Facilidade de adaptar o software para funcionar em diferentes ambientes

#### IEC/ISO 25010 - Portabilidade
  - Capacidade de um software funcionar em diversos ambientes

  - Adaptabilidade
    - Facilidade de um software funcionar em novos ambientes com pouca ou nenhuma modificação.
  - Instabilidade
    - Facilidade de instalar, configurar e remover um software.
  - Substituibilidade
    - Facilidade de substituir uma versão anterior de um software ou um software concorrente.

#### IEC/ISO 25010 - Segurança
  - Proteção de dados e sistemas contra acesso não autorizado, modificação, divulgação ou destruição
  - Confidencialidade:
    - Garantia de que a informação é acessível apenas por pessoas autorizadas.
  - Integridade:
    - Garantia de que a informação não é modificada sem autorização e que as modificações são registradas.
  - Responsabilidade:
    - Garantia de que as ações de um usuário podem ser rastreadas e auditadas.
  - Autenticidade:
    - Garantia de que a identidade de uma pessoa ou dispositivo é verificada de forma confiável.
#### Testes Manuais x Testes Automatizados
  - Teste manual
    - Execução dos testes por um profissional, utilizando o software como um usuário final.
  - Teste automatizado
    - Execução dos testes por um software, seguindo scripts pré-definidos
  - O teste manual é ideal para explorar a aplicação de forma mais livre e identificar defeitos não previstos
  - O teste automatizado garante a execução rápida e repetitiva de casos de teste.

  - Equilíbrio
    - A escolha da técnica depende do contexto e do objetivo do teste

#### Testes Tradicionais x Testes Ágeis

  - Fim dos testes tradicionais
    - A metodologia tradicional de testes, com longos ciclos e pouca interação, não se adapta mais à nova realidade
  - O Papel do Testador Ágil

    - O testador ágil é um membro ativo do time, participando de todas as etapas do desenvolvimento
    - É fundamental que o testador ágil explique a importância da qualidade para todos os membros da equipe
    - O testador ágil trabalha em conjunto com os desenvolvedores para garantir a qualidade do produto
    - O testador ágil precisa ter conhecimento técnico para entender o produto e propor soluções.