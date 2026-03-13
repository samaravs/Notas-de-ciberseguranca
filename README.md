# 🛡️ Notas de Cibersegurança

![Status](https://img.shields.io/badge/Status-Online-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

![Demonstração do Notas de Cibersegurança](assets/demo.gif)

## 🔗 Acesso Online

👉 **[Acessar Notas de Cibersegurança](https://samaravs.github.io/Notas-de-ciberseguranca/)**

---

## 🎯 O Objetivo do Projeto (Por que ele existe?)

Este projeto nasceu com um propósito principal: **colocar a mão na massa e aprofundar meus conhecimentos nos fundamentos do Desenvolvimento Web Front-end (HTML semântico, CSS e Vanilla JavaScript)**.

Para tornar o processo de aprendizado mais empolgante, resolvi unir a programação com outra área que gosto muito: a **Cibersegurança**.

O resultado é um laboratório prático de código que funciona como um blog real. Ele traduz termos técnicos (como Phishing e 2FA) e noticia golpes recentes de forma simples, direta e acessível para o usuário comum.

## 🧠 O que eu aprendi desenvolvendo este projeto

Como o foco era dominar a base antes de pular para frameworks complexos (como React ou Vue), construí tudo "do zero". Os meus maiores aprendizados aqui foram:

- **Manipulação de DOM:** Criei um sistema de injeção dinâmica com JavaScript para renderizar o Cabeçalho (Header) e Rodapé (Footer), evitando repetição de código.
- **Filtros e Buscas:** Implementei um `addEventListener` na barra de pesquisa que filtra a renderização dos cards de artigos instantaneamente.
- **CSS Modular:** Utilizei CSS Variables (`:root`) para gerenciar o tema de cores de forma global.
- **Arquitetura de Pastas e URLs Limpas:** Estruturei os diretórios para que os caminhos fiquem amigáveis, lidando com caminhos relativos (`../../`) no CSS e JS de forma eficiente.
- **Renderização baseada em rota:** Implementei detecção de rota em JavaScript puro para adaptar o cabeçalho dinamicamente — exibindo o hero na página inicial e a navegação interna nos artigos, sem nenhum framework.

## 💻 Funcionalidades

- **Busca em tempo real:** Filtro de posts por título sem recarregar a página.
- **Tempo de leitura estimado:** Cada artigo calcula automaticamente o tempo de leitura com base na contagem de palavras do conteúdo.
- **Navbar adaptativa:** Cabeçalho fixo com efeito de desfoque (backdrop-filter) que se adapta visualmente entre a página inicial e os artigos internos.
- **Design Responsivo (Mobile First):** Interface adaptável para desktop, tablet e smartphone, com menu hambúrguer customizado.
- **Tema e Tipografia:** Identidade visual imersiva com fontes importadas (Outfit e Inter) para otimizar a leitura de artigos longos.
- **Performance:** Sem dependências externas nem frameworks, apenas HTML, CSS e JavaScript nativos, mantendo o código leve e fácil de manter.

## 📂 Estrutura

```text
/
├── index.html              # Página principal
├── sobre.html              # Página sobre
├── ferramentas.html        # Ferramentas recomendadas
├── style.css               # Estilos globais
├── script.js               # Lógica e interatividade
├── assets/                 # Ícones, imagens e GIFs de demonstração
│
└── artigos/                # Cada artigo em sua própria pasta 
    ├── megavazamento/
    │   └── index.html
    ├── phishing/
    │   └── index.html
    └── autenticacao/
        └── index.html
```

## ➕ Como adicionar um novo artigo

1. Crie uma pasta em `artigos/nome-do-artigo/`
2. Crie o `index.html` dentro dela — use qualquer artigo existente como template
3. Ajuste os caminhos: `../../style.css`, `../../images/`, `../../script.js`
4. Adicione o post no array `posts` do `script.js`:

```js
{
    titulo: "Título do artigo",
    data: "DD/MM/AAAA",
    descricao: "Descrição curta.",
    categoria: "artigo",
    link: "artigos/nome-do-artigo/"
}
```

## 🚀 Como rodar localmente

```bash
git clone https://github.com/samaravs/Notas-de-ciberseguranca.git
cd Notas-de-ciberseguranca
# abra o index.html no navegador
```

---

Desenvolvido por **Samara Vieira** · [GitHub](https://github.com/samaravs)
