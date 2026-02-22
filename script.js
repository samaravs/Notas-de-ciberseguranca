const posts = [
    {
        titulo: "O que é Phishing?",
        data: "28/10/2025",
        descricao: "Como criminosos usam mensagens falsas para roubar seus dados.",
        categoria: "artigo",
        link: "phishing.html"
    },

    {
        titulo: "Autenticação de 2FA, o que é?",
        data: "30/10/2025",
        descricao: "Entenda como uma camada extra de segurança pode salvar suas contas.",
        categoria: "artigo",
        link: "autenticacao.html"
    },

    {
        titulo: "O que é um Firewall?",
        data: "19/10/2025",
        descricao: "Veja como um firewall ajuda a proteger sua rede.",
        categoria: "artigo",
        link: "firewall.html"
    },

    {
        titulo: "Como criar senhas fortes",
        data: "10/12/2025",
        descricao: "Aprenda a criar senhas seguras e fáceis de lembrar.",
        categoria: "guia",
        link: "senhas.html"
    },

    {
        titulo: "Golpes comuns no WhatsApp em 2025",
        data: "08/12/2025",
        descricao: "Veja quais são os golpes mais usados e como evitá-los.",
        categoria: "alerta",
        link: "golpes.html"
    },

    {
        titulo: "O que é autenticação em duas etapas?",
        data: "05/12/2025",
        descricao: "Entenda como funciona o 2FA e por que ativar hoje.",
        categoria: "artigo",
        link: "autenticacao.html"
    }

];

function parseDataBrasil(dataStr) {
    const [dia, mes, ano] = dataStr.split('/');
    return new Date(`${ano}-${mes}-${dia}`);
}

posts.sort((a, b) => {
    const dataA = parseDataBrasil(a.data);
    const dataB = parseDataBrasil(b.data);
    return dataB - dataA;
});


document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    const isHome = path.includes('index.html') || path.endsWith('/') || path.length <= 1;

    const navHTML = `
        <nav class="${isHome ? '' : 'nav-interna'}">
            <div class="container">
                
                ${!isHome ? '<a href="index.html" class="mini-logo">Notas de Cibersegurança</a>' : ''}

                <button class="menu-toggle" aria-label="Abrir menu">
                    <span class="linha"></span>
                    <span class="linha"></span>
                    <span class="linha"></span>
                </button>
                <ul id="menu-principal">
                    <li><a href="index.html">Início</a></li>
                    <li><a href="index.html#guias">Conceitos básicos</a></li>
                    <li><a href="index.html#ultimos-artigos">Tutoriais</a></li>
                    <li><a href="index.html#alertas">Notícias de segurança</a></li>
                    <li><a href="ferramentas.html">Ferramentas</a></li>
                    <li><a href="sobre.html">Sobre</a></li>
                </ul>
                </div>
        </nav>
    `;
    const heroHTML = `
        <header class="hero">
            <div class="container">
                <span class="hero-tag">✦ Segurança Digital</span>
                <h1>
                    <span class="texto-destaque">Notas de Cibersegurança</span>
                </h1>
                <p class="hero-desc">Meu diário pessoal sobre Segurança Digital.</p>
            </div>
        </header>
    `;

    let finalHeaderHTML;

    if (isHome) {
        finalHeaderHTML = heroHTML + navHTML;
    } else {
        finalHeaderHTML = navHTML;
    }

    const footerHTML = `
        <div class="container">
            <p>Conecte-se comigo pelo Instagram: <a href="https://www.instagram.com/notas.ciberseguranca/" target="_blank">@notas.ciberseguranca</a></p>
            <p>&copy; 2025 Meu diário de Cibersegurança.</p>
        </div>
    `;


    function carregarLayout() {
        const headerContainer = document.getElementById('app-header');
        const footerContainer = document.getElementById('app-footer');

        if (headerContainer) headerContainer.innerHTML = finalHeaderHTML;
        if (footerContainer) footerContainer.innerHTML = footerHTML;
    }

    function carregarPosts() {
        const ultimosContainer = document.getElementById('lista-ultimos');
        const guiasContainer = document.getElementById('lista-guias');
        const alertasContainer = document.getElementById('lista-alertas');

        if (!ultimosContainer || !guiasContainer || !alertasContainer) return;

        ultimosContainer.innerHTML = '';
        guiasContainer.innerHTML = '';
        alertasContainer.innerHTML = '';

        posts.forEach(post => {
            const postHTML = `
                <article class="post-preview">
                    <div>
                        <h3>${post.link !== '#' ? `<a href="${post.link}">${post.titulo}</a>` : `<span>${post.titulo}</span>`}</h3>
                        <span class="post-date">${post.data}</span>
                        <p>${post.descricao}</p>
                    </div>
                    ${post.link !== '#' 
                        ? `<a href="${post.link}" class="read-more">Ler artigo →</a>` 
                        : `<span class="post-em-breve">Em breve</span>`}
                </article>
            `;

            if (post.categoria === 'artigo') {
                ultimosContainer.innerHTML += postHTML;
            }

            if (post.categoria === 'guia') {
                guiasContainer.innerHTML += postHTML;
            }

            if (post.categoria === 'alerta') {
                alertasContainer.innerHTML += postHTML;
            }
        });
    }


    carregarLayout();
    carregarPosts();

    // marca o link ativo com base na página atual
    const currentFile = path.split('/').pop() || 'index.html';
    document.querySelectorAll('#menu-principal a').forEach(link => {
        const href = link.getAttribute('href');
        const linkFile = href.split('#')[0];
        const temAncora = href.includes('#');
        // só marca como ativo se for a página exata e não tiver âncora
        if (!temAncora && (linkFile === currentFile || (currentFile === '' && linkFile === 'index.html'))) {
            link.classList.add('ativo');
        }
    });

    const menuToggleButton = document.querySelector('.menu-toggle');
    const menuPrincipal = document.querySelector('#menu-principal');

    if (menuToggleButton && menuPrincipal) {
        menuToggleButton.addEventListener('click', () => {
            menuPrincipal.classList.toggle('menu-ativo');
        })
    }


    const searchInput = document.getElementById('search-input');

    const containersPosts = document.querySelectorAll('.post-list');

    if (searchInput && containersPosts.length) {
        searchInput.addEventListener('input', (e) => {
            const termo = e.target.value.toLowerCase();

            containersPosts.forEach(container => {
                const postsRenderizados = container.querySelectorAll('.post-preview');

                postsRenderizados.forEach(post => {
                    const titulo = post.querySelector('h3').innerText.toLowerCase();
                    if (titulo.includes(termo)) {
                        post.style.display = 'block';
                    } else {
                        post.style.display = 'none';
                    }
                });
            });
        });
    }
});