# 🛡️ Notas de Cibersegurança

![Status](https://img.shields.io/badge/Status-Online-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

Site desenvolvido para a disseminação de boas práticas, alertas e guias sobre Segurança da Informação. O projeto foca em oferecer uma interface limpa, com navegação intuitiva e performance otimizada. 

## 🔗 Acesso Online

👉 **[Acessar Notas de Cibersegurança](https://samaravs.github.io/Notas-de-ciberseguranca/)**

---

## 💻 Funcionalidades

- **Categorização de Conteúdo:** Seções de Artigos, Guias para Iniciantes e Alertas Recentes
- **Busca em tempo real:** Filtro de posts por título sem recarregar a página
- **Design Responsivo:** Interface adaptável para desktop, tablet e smartphone
- **Tema Dark:** Identidade visual inspirada no universo de cibersegurança
- **Performance:** Carregamento rápido usando apenas tecnologias nativas (sem frameworks)
- **Nav dinâmica:** Header e footer gerados via JavaScript com estado ativo por página

## 🛠 Tecnologias

- **HTML5 Semântico**
- **CSS3** — variáveis, Flexbox, Grid, responsividade
- **JavaScript Vanilla** — manipulação do DOM, ordenação de posts, busca, menu mobile

## 📂 Estrutura

```
/
├── index.html              # Página principal
├── sobre.html              # Página sobre
├── ferramentas.html        # Ferramentas recomendadas
├── style.css               # Estilos globais
├── script.js               # Lógica e interatividade
├── images/                 # Ícones e imagens
│
└── artigos/                # Cada artigo em sua própria pasta
    ├── phishing/
    │   └── index.html
    ├── autenticacao/
    │   └── index.html
    ├── firewall/
    │   └── index.html
    ├── senhas/
    │   └── index.html
    └── golpes/
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
