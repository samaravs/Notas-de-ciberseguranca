const posts = [
    {
        titulo: "O que é Phishing?",
        data: "28/10/2025",
        descricao: "Como criminosos usam mensagens falsas para roubar seus dados.",
        categoria: "artigo",
        link: "artigos/phishing/"
    },
    {
        titulo: "Autenticação de 2FA, o que é?",
        data: "30/10/2025",
        descricao: "Entenda como uma camada extra de segurança pode salvar suas contas.",
        categoria: "artigo",
        link: "artigos/autenticacao/"
    },
    {
        titulo: "O que é um Firewall?",
        data: "19/10/2025",
        descricao: "Veja como um firewall ajuda a proteger sua rede.",
        categoria: "artigo",
        link: "artigos/firewall/"
    },
    {
        titulo: "Como criar senhas fortes",
        data: "10/12/2025",
        descricao: "Aprenda a criar senhas seguras e fáceis de lembrar.",
        categoria: "guia",
        link: "artigos/senhas/"
    },
    {
        titulo: "Golpes comuns no WhatsApp em 2025",
        data: "08/12/2025",
        descricao: "Veja quais são os golpes mais usados e como evitá-los.",
        categoria: "alerta",
        link: "artigos/golpes/"
    },
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

    /*
      Detecta se está na raiz (index.html) ou dentro de uma subpasta (artigos/...)
      necessário para gerar os links do nav corretamente em cada contexto
    */
    const isHome = path.includes('index.html') || path.endsWith('/Notas-de-ciberseguranca/') || path.endsWith('/');
    const isArtigo = path.includes('/artigos/');

    // Prefixo de caminho: se estiver num artigo, precisa voltar ../../ até a raiz
    const base = isArtigo ? '../../' : '';

    const navHTML = `
        <nav class="${isHome ? '' : 'nav-interna'}">
            <div class="container">
                ${!isHome ? `<a href="${base}index.html" class="mini-logo">Notas de Cibersegurança</a>` : ''}
                <button class="menu-toggle" aria-label="Abrir menu">
                    <span class="linha"></span>
                    <span class="linha"></span>
                    <span class="linha"></span>
                </button>
                <ul id="menu-principal">
                    <li><a href="${base}index.html">Início</a></li>
                    <li><a href="${base}index.html#guias">Conceitos básicos</a></li>
                    <li><a href="${base}index.html#ultimos-artigos">Artigos</a></li>
                    <li><a href="${base}index.html#alertas">Notícias de segurança</a></li>
                    <li><a href="${base}ferramentas.html">Ferramentas</a></li>
                    <li><a href="${base}sobre.html">Sobre</a></li>
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

    const finalHeaderHTML = isHome ? heroHTML + navHTML : navHTML;

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
                        <h3>${post.link !== '#'
                            ? `<a href="${post.link}">${post.titulo}</a>`
                            : `<span>${post.titulo}</span>`}
                        </h3>
                        <span class="post-date">${post.data}</span>
                        <p>${post.descricao}</p>
                    </div>
                    ${post.link !== '#'
                        ? `<a href="${post.link}" class="read-more">Ler artigo →</a>`
                        : `<span class="post-em-breve">Em breve</span>`}
                </article>
            `;

            if (post.categoria === 'artigo') ultimosContainer.innerHTML += postHTML;
            if (post.categoria === 'guia') guiasContainer.innerHTML += postHTML;
            if (post.categoria === 'alerta') alertasContainer.innerHTML += postHTML;
        });
    }

    carregarLayout();
    carregarPosts();

    // Marca link ativo no nav
    const currentFile = path.split('/').pop() || 'index.html';
    document.querySelectorAll('#menu-principal a').forEach(link => {
        const href = link.getAttribute('href');
        const linkFile = href.split('#')[0].replace(base, '');
        const temAncora = href.includes('#');
        if (!temAncora && (linkFile === currentFile || (currentFile === '' && linkFile === 'index.html'))) {
            link.classList.add('ativo');
        }
    });

    // Menu mobile toggle
    const menuToggleButton = document.querySelector('.menu-toggle');
    const menuPrincipal = document.querySelector('#menu-principal');
    if (menuToggleButton && menuPrincipal) {
        menuToggleButton.addEventListener('click', () => {
            menuPrincipal.classList.toggle('menu-ativo');
        });
    }

    // Busca em tempo real
    const searchInput = document.getElementById('search-input');
    const containersPosts = document.querySelectorAll('.post-list');
    if (searchInput && containersPosts.length) {
        searchInput.addEventListener('input', (e) => {
            const termo = e.target.value.toLowerCase();
            containersPosts.forEach(container => {
                container.querySelectorAll('.post-preview').forEach(post => {
                    const titulo = post.querySelector('h3').innerText.toLowerCase();
                    post.style.display = titulo.includes(termo) ? 'block' : 'none';
                });
            });
        });
    }
});
