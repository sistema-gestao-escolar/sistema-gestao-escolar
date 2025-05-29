# Site de Cadastro de Alunos

Este Trabalho descreve o desenvolvimento de um sistema web voltado para o cadastro de alunos, com ênfase na otimização da gestão acadêmica por meio de uma interface responsiva e de fácil usabilidade. O projeto contempla aprimoramentos na estrutura da aplicação, incluindo transições dinâmicas entre páginas, escolha criteriosa de um template adequado ao propósito do sistema, bem como a utilização de tecnologias como HTML, CSS, JavaScript e frameworks específicos para o desenvolvimento front-end.

A proposta tem como base os conhecimentos adquiridos na disciplina de Códigos de Alta Performance - Web, integrando conceitos relacionados ao desenvolvimento web, interatividade e usabilidade. O objetivo central consiste em tornar os processos acadêmicos mais ágeis, acessíveis e eficientes, por meio de uma aplicação que atenda aos princípios de responsividade e experiência do usuário (UX).

### Desenvolvedores

- [Davi Serrão Lima](https://github.com/D4vi2205)
- [Rafael Góes Duarte](https://github.com/rafaelgoesti)
- [Marcus Paulo da Silva Batista](https://github.com/marcusbatistadev)
- [Luan Levi Barbosa de Carvalho](https://github.com/Luan-carvalho-b)
- [Emanuel Rodrigues ](https://github.com/Luan-carvalho-b)
---

## Objetivo do Site

O presente projeto foi desenvolvido com o objetivo de facilitar a gestão de informações acadêmicas, viabilizando o registro, a atualização e a consulta de dados dos estudantes de maneira eficiente e organizada.

A aplicação web contempla múltiplas páginas e funcionalidades essenciais, entre as quais se destacam: um formulário para o cadastro de novos alunos, uma página dedicada à listagem dos estudantes registrados e uma seção específica para a visualização detalhada de cada perfil acadêmico. Além disso, foi implementado um sistema de navegação intuitivo, aliado a uma paleta de cores e tipografia agradáveis, de modo a proporcionar uma experiência de uso fluida e acessível.

O desenvolvimento do sistema foi pautado por princípios de usabilidade, responsividade e simplicidade, com o intuito de atender tanto às demandas dos administradores quanto às dos usuários finais. O layout da aplicação foi concebido para oferecer uma interface moderna e amigável, utilizando a biblioteca Bootstrap como base para um design responsivo e visualmente atrativo [Bootstrap, 2024].

Dessa forma, o site propõe-se a otimizar o processo de gerenciamento das informações estudantis, promovendo um ambiente digital funcional, prático e alinhado às boas práticas do desenvolvimento web contemporâneo.

## Tecnologias Utilizadas no Desenvolvimento do Site de Cadastro de Alunos

No desenvolvimento do site de cadastro de alunos, foram empregadas três tecnologias principais: **HTML**, **CSS** e **JavaScript**. Cada uma desempenha um papel fundamental na construção da estrutura, no design e na interatividade do sistema web.

### HTML (Estrutura)
O HTML foi utilizado para estruturar o conteúdo das páginas. Nele foi definido os elementos básicos da interface, como formulários de cadastro, tabelas de listagem de alunos e botões de navegação. A semântica HTML foi aplicada para garantir que o código fosse bem organizado e de fácil compreensão, tanto para os desenvolvedores quanto para futuras manutenções

### CSS (Estilização)
O CSS foi empregado para estilizar o site, proporcionando um design agradável e harmonioso. Através do uso do framework Bootstrap, foi possível criar um layout responsivo que se adapta a diferentes tamanhos de tela, garantindo uma experiência de usuário consistente em dispositivos móveis e desktops. Além disso, a paleta de cores, fontes e espaçaamentos foram ajustados para tornar a interface visualmente atraente e intuitiva, trazendo acessibilidade aos usuários.

### JavaScript (Interatividade)
O JavaScript foi implementado para adicionar interatividade ao site, possibilitando a validação de formulários, a manipulação dinâmica de elementos na página e a melhoria da usabilidade geral do sistema. Com ele, foi possível criar funcionalidades que aprimoram a experiência do usuário, tornando o processo de cadastro e consulta de alunos mais dinâmico e eficiente. A combinação dessas tecnologias permitiu o desenvolvimento de um sistema completo e funcional, atendendo aos requisitos propostos para um gerenciamento eficaz de alunos.

## Criação das Páginas e Estrutura do Site

O desenvolvimento do sistema web para cadastro de alunos foi conduzido de forma modular e organizada, com cada página concebida para atender a funcionalidades específicas dentro da aplicação. A estrutura fundamental do sistema foi construída utilizando HTML5, priorizando o uso de elementos semânticos. Essa abordagem visa facilitar tanto a compreensão do código por parte dos desenvolvedores quanto a manutenção futura do sistema.

Cada página do site incorpora um cabeçalho padronizado, implementado por meio de uma barra de navegação desenvolvida com o framework Bootstrap. Essa barra está presente em todas as seções do sistema, como nos arquivos index.html, cadastro-aluno.html, lista-de-alunos.html e detalhe-aluno.html, proporcionando uma experiência de navegação fluida e intuitiva ao usuário, além de garantir a consistência visual da interface.

Os formulários de cadastro e atualização de alunos foram projetados com campos de entrada bem definidos e identificáveis. Foram utilizadas classes do Bootstrap, como form-control e form-select, para assegurar um layout organizado, com espaçamentos e alinhamentos adequados. Essa padronização contribui para um design responsivo, limpo e de fácil utilização, promovendo uma melhor usabilidade do sistema.

As páginas destinadas à visualização de dados, como a "Lista de Alunos", fazem uso de tabelas organizadas para exibir os registros de forma clara e estruturada. Por sua vez, a página de "Detalhes do Aluno" utiliza listas de definição (dl, dt, dd) para apresentar as informações individuais, o que melhora a legibilidade e permite ao usuário localizar rapidamente os dados desejados.

A separação clara entre os arquivos de HTML, CSS e JavaScript reforça a modularidade do projeto, tornando-o escalável e facilitando futuras expansões. Isso inclui a possibilidade de adicionar novos campos nos formulários, incluir novas páginas ou integrar funcionalidades adicionais ao sistema de forma eficiente e sem comprometer a estrutura existente.

## Incremento da Interatividade com JavaScript

A interatividade do sistema foi significativamente aprimorada com a implementação de funcionalidades desenvolvidas em JavaScript, proporcionando uma experiência mais dinâmica e envolvente para o usuário. A integração entre JavaScript e o framework Bootstrap foi essencial para a criação de componentes responsivos, como a barra de navegação.

Um exemplo dessa integração é o botão de menu da barra de navegação, que utiliza scripts nativos do Bootstrap para alternar automaticamente a exibição dos itens em dispositivos com telas menores. Essa funcionalidade melhora a navegabilidade e a acessibilidade do site em diferentes tamanhos de tela, especialmente em dispositivos móveis.

Além disso, foram desenvolvidas funções personalizadas em JavaScript para validar os formulários de cadastro e atualização de alunos. Essas validações garantem que todos os campos obrigatórios sejam preenchidos corretamente antes do envio das informações, prevenindo erros e contribuindo para a confiabilidade e robustez do sistema.

A manipulação do DOM (Document Object Model), viabilizada pelo JavaScript, permite a exibição de mensagens de erro em tempo real, oferecendo um feedback imediato ao usuário. Isso facilita a correção de dados inseridos incorretamente, otimizando a interação com a aplicação.

Em páginas como a "Lista de Alunos", também foram implementadas funcionalidades interativas adicionais, como a filtragem dinâmica dos registros. Eventos de clique ou digitação em campos de busca acionam scripts que reorganizam e exibem os dados de acordo com os filtros aplicados.

Essa combinação de recursos torna o site mais responsivo às ações do usuário, além de proporcionar uma experiência de uso mais fluida, personalizada e alinhada com as boas práticas do desenvolvimento web moderno.



