# 📚 Site de Cadastro de Alunos

![Capa](img/imagem-readme/capa.png)

Este Trabalho descreve o desenvolvimento de um sistema web voltado para o cadastro de alunos, com ênfase na otimização da gestão acadêmica por meio de uma interface responsiva e de fácil usabilidade. O projeto contempla aprimoramentos na estrutura da aplicação, incluindo transições dinâmicas entre páginas, escolha criteriosa de um template adequado ao propósito do sistema, bem como a utilização de tecnologias como HTML, CSS, JavaScript e frameworks específicos para o desenvolvimento front-end.

A proposta tem como base os conhecimentos adquiridos na disciplina de Códigos de Alta Performance - Web, integrando conceitos relacionados ao desenvolvimento web, interatividade e usabilidade. O objetivo central consiste em tornar os processos acadêmicos mais ágeis, acessíveis e eficientes, por meio de uma aplicação que atenda aos princípios de responsividade e experiência do usuário (UX).

### 👥 Desenvolvedores

- [Davi Serrão Lima](https://github.com/D4vi2205)
- [Rafael Góes Duarte](https://github.com/rafaelgoesti)
- [Marcus Paulo da Silva Batista](https://github.com/marcusbatistadev)
- [Luan Levi Barbosa de Carvalho](https://github.com/Luan-carvalho-b)
- [Emanuel Rodrigues ](https://github.com/Luan-carvalho-b)
---

## 🎯 Objetivo do Site

O presente projeto foi desenvolvido com o objetivo de facilitar a gestão de informações acadêmicas, viabilizando o registro, a atualização e a consulta de dados dos estudantes de maneira eficiente e organizada.

A aplicação web contempla múltiplas páginas e funcionalidades essenciais, entre as quais se destacam: um formulário para o cadastro de novos alunos, uma página dedicada à listagem dos estudantes registrados e uma seção específica para a visualização detalhada de cada perfil acadêmico. Além disso, foi implementado um sistema de navegação intuitivo, aliado a uma paleta de cores e tipografia agradáveis, de modo a proporcionar uma experiência de uso fluida e acessível.

O desenvolvimento do sistema foi pautado por princípios de usabilidade, responsividade e simplicidade, com o intuito de atender tanto às demandas dos administradores quanto às dos usuários finais. O layout da aplicação foi concebido para oferecer uma interface moderna e amigável, utilizando a biblioteca Bootstrap como base para um design responsivo e visualmente atrativo [Bootstrap, 2024].

Dessa forma, o site propõe-se a otimizar o processo de gerenciamento das informações estudantis, promovendo um ambiente digital funcional, prático e alinhado às boas práticas do desenvolvimento web contemporâneo.

## 💻 Tecnologias Utilizadas no Desenvolvimento do Site de Cadastro de Alunos

No desenvolvimento do site de cadastro de alunos, foram empregadas três tecnologias principais: **HTML**, **CSS** e **JavaScript**. Cada uma desempenha um papel fundamental na construção da estrutura, no design e na interatividade do sistema web.

### 🧱 HTML (Estrutura)
O HTML foi utilizado para estruturar o conteúdo das páginas. Nele foi definido os elementos básicos da interface, como formulários de cadastro, tabelas de listagem de alunos e botões de navegação. A semântica HTML foi aplicada para garantir que o código fosse bem organizado e de fácil compreensão, tanto para os desenvolvedores quanto para futuras manutenções

### 🔧 Bootstrap (Estilo e Componentes)
O Bootstrap foi utilizado para estilizar a interface e proporcionar uma experiência de usuário moderna, responsiva e visualmente agradável. Foram aplicados seus componentes prontos, como botões, formulários e tabelas, para garantir consistência visual e economia de tempo no desenvolvimento. Além disso, o uso do sistema de grid do Bootstrap permitiu uma estrutura responsiva e bem organizada, adaptando o layout para diferentes tamanhos de tela, sem a necessidade de escrever CSS manualmente.

### 🎨 CSS (Estilização)
O CSS foi empregado para estilizar o site, proporcionando um design agradável e harmonioso. Através do uso do framework Bootstrap, foi possível criar um layout responsivo que se adapta a diferentes tamanhos de tela, garantindo uma experiência de usuário consistente em dispositivos móveis e desktops. Além disso, a paleta de cores, fontes e espaçaamentos foram ajustados para tornar a interface visualmente atraente e intuitiva, trazendo acessibilidade aos usuários.

### ⚙️ JavaScript (Interatividade)
O JavaScript foi implementado para adicionar interatividade ao site, possibilitando a validação de formulários, a manipulação dinâmica de elementos na página e a melhoria da usabilidade geral do sistema. Com ele, foi possível criar funcionalidades que aprimoram a experiência do usuário, tornando o processo de cadastro e consulta de alunos mais dinâmico e eficiente. A combinação dessas tecnologias permitiu o desenvolvimento de um sistema completo e funcional, atendendo aos requisitos propostos para um gerenciamento eficaz de alunos.

## 🗂️ Criação das Páginas e Estrutura do Site

O desenvolvimento do sistema web para cadastro de alunos foi conduzido de forma modular e organizada, com cada página concebida para atender a funcionalidades específicas dentro da aplicação. A estrutura fundamental do sistema foi construída utilizando HTML5, priorizando o uso de elementos semânticos. Essa abordagem visa facilitar tanto a compreensão do código por parte dos desenvolvedores quanto a manutenção futura do sistema.

Cada página do site incorpora um cabeçalho padronizado, implementado por meio de uma barra de navegação desenvolvida com o framework Bootstrap. Essa barra está presente em todas as seções do sistema, como nos arquivos index.html, cadastro-aluno.html, lista-de-alunos.html e detalhe-aluno.html, proporcionando uma experiência de navegação fluida e intuitiva ao usuário, além de garantir a consistência visual da interface.

Os formulários de cadastro e atualização de alunos foram projetados com campos de entrada bem definidos e identificáveis. Foram utilizadas classes do Bootstrap, como form-control e form-select, para assegurar um layout organizado, com espaçamentos e alinhamentos adequados. Essa padronização contribui para um design responsivo, limpo e de fácil utilização, promovendo uma melhor usabilidade do sistema.

As páginas destinadas à visualização de dados, como a "Lista de Alunos", fazem uso de tabelas organizadas para exibir os registros de forma clara e estruturada. Por sua vez, a página de "Detalhes do Aluno" utiliza listas de definição (dl, dt, dd) para apresentar as informações individuais, o que melhora a legibilidade e permite ao usuário localizar rapidamente os dados desejados.

A separação clara entre os arquivos de HTML, CSS e JavaScript reforça a modularidade do projeto, tornando-o escalável e facilitando futuras expansões. Isso inclui a possibilidade de adicionar novos campos nos formulários, incluir novas páginas ou integrar funcionalidades adicionais ao sistema de forma eficiente e sem comprometer a estrutura existente.

### 📂 Estrutura de Pastas e Arquivos
```SISTEMA-GESTAO-ESCOLAR
├── 📁 css
│   ├── cadastro-aluno.css
│   ├── detalhes-aluno.css
│   ├── index.css
│   ├── lista-de-alunos.css
│   ├── notas.css
│   ├── relatorio.css
│   ├── sobre.css
│   └── turmas.css
│
├── 📁 img
│   ├── imagem-readme
│   │   └── capa.png
│   ├── davi-lima.png
│   ├── emanuelrodrigues.png
│   ├── erminio.png
│   ├── igorfalcao.png
│   ├── luancarvalho.png
│   ├── marcusbabista.png
│   └── rafaelgoes.png
│
├── 📁 js
│   ├── cadastro-aluno.js
│   ├── detalhes-aluno.js
│   ├── index.js
│   ├── lista-de-alunos.js
│   ├── nota.js
│   ├── relatorio.js
│   └── turmas.js
│
├── cadastro-aluno.html
├── detalhe-aluno.html
├── index.html
├── lista-de-alunos.html
├── notas.html
├── relatorios.html
├── sobre.html
├── turmas.html
├── LICENSE
└── README.md
```

## ⚡ Incremento da Interatividade com JavaScript

A interatividade do sistema foi significativamente aprimorada com a implementação de funcionalidades desenvolvidas em JavaScript, proporcionando uma experiência mais dinâmica e envolvente para o usuário. A integração entre JavaScript e o framework Bootstrap foi essencial para a criação de componentes responsivos, como a barra de navegação.

Um exemplo dessa integração é o botão de menu da barra de navegação, que utiliza scripts nativos do Bootstrap para alternar automaticamente a exibição dos itens em dispositivos com telas menores. Essa funcionalidade melhora a navegabilidade e a acessibilidade do site em diferentes tamanhos de tela, especialmente em dispositivos móveis.

Além disso, foram desenvolvidas funções personalizadas em JavaScript para validar os formulários de cadastro e atualização de alunos. Essas validações garantem que todos os campos obrigatórios sejam preenchidos corretamente antes do envio das informações, prevenindo erros e contribuindo para a confiabilidade e robustez do sistema.

A manipulação do DOM (Document Object Model), viabilizada pelo JavaScript, permite a exibição de mensagens de erro em tempo real, oferecendo um feedback imediato ao usuário. Isso facilita a correção de dados inseridos incorretamente, otimizando a interação com a aplicação.

Em páginas como a "Lista de Alunos", também foram implementadas funcionalidades interativas adicionais, como a filtragem dinâmica dos registros. Eventos de clique ou digitação em campos de busca acionam scripts que reorganizam e exibem os dados de acordo com os filtros aplicados.

Essa combinação de recursos torna o site mais responsivo às ações do usuário, além de proporcionar uma experiência de uso mais fluida, personalizada e alinhada com as boas práticas do desenvolvimento web moderno.

## 🧪 Testes

### ✅ Validação e Testes de Funcionalidades

 Para garantir o pleno funcionamento do sistema, foram realizados diversos testes abrangendo suas principais funcionalidades. Inicialmente, verificou-se a navegação entre as páginas do site, assegurando que todos os links e botões estivessem corretamente configurados, direcionando o usuário para as respectivas seções, sem apresentar erros ou falhas no carregamento.

Os formulários também foram submetidos a testes específicos, com o objetivo de validar a correta captura e submissão dos dados. Esses testes foram fundamentais para evitar problemas de compatibilidade e garantir a integridade das informações inseridas pelos usuários.

Outro aspecto avaliado foi a compatibilidade do site com diferentes navegadores. Para isso, a aplicação foi testada no navegador Google Chrome, onde foram identificadas e corrigidas eventuais discrepâncias na renderização dos elementos da interface, assegurando a consistência visual e o funcionamento adequado das funcionalidades em diferentes ambientes.

Adicionalmente, foram conduzidos testes de desempenho, focando na velocidade de carregamento das páginas. Para isso, foram adotadas medidas de otimização, como a compressão de imagens e a análise do tempo de resposta do sistema.

Também foi avaliada a acessibilidade da interface, com ênfase na usabilidade dos elementos interativos. Garantiu-se que botões e textos estivessem bem posicionados, visíveis e de fácil acesso, contemplando as necessidades de diferentes perfis de usuários.

Esses testes são essenciais para assegurar a qualidade da aplicação, proporcionando uma experiência estável, eficiente e acessível, conforme os padrões recomendados no desenvolvimento de sistemas web.

### 📱 Testes de Responsividade e Experiência do Usuário

A responsividade do site foi avaliada por meio de testes em diferentes tamanhos de tela, com o objetivo de garantir que a estrutura da interface se adaptasse de forma eficiente aos variados dispositivos. Para isso, foram utilizadas as ferramentas de desenvolvedor dos navegadores, permitindo a simulação de diversas resoluções.

Durante os testes, foram identificados e corrigidos desalinhamentos e inconsistências no layout, assegurando que os elementos da página se redistribuíssem adequadamente de acordo com o tamanho da tela. Essas correções foram fundamentais para garantir uma visualização adequada tanto em monitores maiores quanto em dispositivos móveis, como tablets e smartphones.

Além da adaptação do layout, também foi analisado o comportamento das transições entre páginas e os efeitos visuais aplicados por meio de CSS. As animações foram cuidadosamente avaliadas quanto à sua fluidez, de modo a evitar travamentos, lentidão ou atrasos que pudessem prejudicar a experiência do usuário.

Com esses ajustes e validações, foi possível assegurar que o site não apenas mantivesse um design responsivo, mas também proporcionasse uma navegação intuitiva, fluida e visualmente agradável, alinhada às boas práticas de usabilidade em desenvolvimento web.

## 🧾 Considerações Finais e Possíveis Melhorias

Apesar dos avanços obtidos com o desenvolvimento do sistema, ainda há oportunidades para otimizar a experiência do usuário por meio de melhorias específicas. Uma das principais recomendações é o aprimoramento da acessibilidade, visando garantir maior compatibilidade com tecnologias assistivas, como leitores de tela e navegação por teclado. Essa adaptação tornaria o site mais inclusivo, atendendo a usuários com diferentes necessidades.

Outra sugestão relevante diz respeito à otimização de desempenho, por meio da redução do tempo de carregamento das páginas. Isso pode ser alcançado com a compressão adequada de imagens, bem como pela minimização de arquivos CSS e JavaScript, práticas que contribuem para uma navegação mais ágil e eficiente.

Além disso, futuras implementações podem incluir um sistema de login seguro para usuários cadastrados, reforçando a proteção de dados e a autenticação. A criação de um painel administrativo também se mostra pertinente, pois permitiria uma gestão mais eficiente dos conteúdos e usuários do sistema.

Por fim, a adição de novas funcionalidades interativas, como animações mais sofisticadas e uma interface ainda mais otimizada para dispositivos móveis, pode tornar a experiência do usuário ainda mais fluida e intuitiva.

Dessa forma, o projeto apresenta-se como uma base sólida para o desenvolvimento contínuo, proporcionando oportunidades de aprendizado e aprimoramento constante dentro das boas práticas de desenvolvimento web.
