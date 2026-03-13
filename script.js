/* ═══════════════════════════════════════════
   POSTS
═══════════════════════════════════════════ */
const posts = [
  {
    titulo:    'Autenticação de 2FA, o que é?',
    data:      '30/10/2025',
    descricao: 'Entenda como uma camada extra de segurança pode salvar suas contas.',
    categoria: 'artigo',
    link:      'artigos/autenticacao/',
  },
  {
    titulo:    'O que é Phishing?',
    data:      '28/10/2025',
    descricao: 'Como criminosos usam mensagens falsas para roubar seus dados.',
    categoria: 'artigo',
    link:      'artigos/phishing/',
  },
  {
    titulo:    'O que é um Firewall?',
    data:      '19/10/2025',
    descricao: 'Veja como um firewall ajuda a proteger sua rede.',
    categoria: 'artigo',
    link:      'artigos/firewall/',
  },
  {
    titulo:    'Como criar senhas fortes',
    data:      '10/12/2025',
    descricao: 'Aprenda a criar senhas seguras e fáceis de lembrar.',
    categoria: 'guia',
    link:      'artigos/senhas/',
  },
  {
    titulo:    'Golpes comuns no WhatsApp em 2025',
    data:      '08/12/2025',
    descricao: 'Veja quais são os golpes mais usados e como evitá-los.',
    categoria: 'alerta',
    link:      'artigos/golpes/',
  },
];

/* Ordena por data mais recente */
function parseDateBR(str) {
  const [d, m, y] = str.split('/');
  return new Date(`${y}-${m}-${d}`);
}

posts.sort((a, b) => parseDateBR(b.data) - parseDateBR(a.data));

/* ═══════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════ */

function getRouteBase(path) {
  if (path.includes('/artigos/')) return '../../';
  return '';
}

function detectPageType(path) {
  const isArticleRoute = path.includes('/artigos/');
  const isHomeFile = path.endsWith('/index.html') || path.endsWith('index.html');
  const isHomeRoot = path === '/' || path.endsWith('/');
  const isHome = !isArticleRoute && (isHomeFile || isHomeRoot);
  return { isHome, base: getRouteBase(path) };
}

function buildPostCard(post, base) {
  const hasLink = post.link !== '#';
  const titleEl = hasLink
    ? `<a href="${base}${post.link}">${post.titulo}</a>`
    : `<span>${post.titulo}</span>`;

  const ctaEl = hasLink
    ? `<a href="${base}${post.link}" class="read-more" aria-label="Ler artigo: ${post.titulo}">Ler artigo →</a>`
    : `<span class="post-em-breve" aria-label="Em breve">Em breve</span>`;

  return `
    <article class="post-preview" role="listitem">
      <div>
        <h3>${titleEl}</h3>
        <time class="post-date" datetime="${formatDateISO(post.data)}">${post.data}</time>
        <p>${post.descricao}</p>
      </div>
      ${ctaEl}
    </article>
  `;
}

function formatDateISO(str) {
  const [d, m, y] = str.split('/');
  return `${y}-${m}-${d}`;
}

function normalizeSearchText(value) {
  return (value ?? '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

/* ═══════════════════════════════════════════
   COMPONENTES DE LAYOUT
═══════════════════════════════════════════ */

function buildNav(isHome, base) {
  return `
    <nav class="${isHome ? '' : 'nav-interna'}" aria-label="Navegação principal">
      <div class="container">
        <a href="${base}index.html" class="mini-logo" aria-label="Página inicial">Notas de Cibersegurança</a>
        <button class="menu-toggle" aria-label="Abrir menu" aria-expanded="false" aria-controls="menu-principal">
          <span class="linha" aria-hidden="true"></span>
          <span class="linha" aria-hidden="true"></span>
          <span class="linha" aria-hidden="true"></span>
        </button>
        <ul id="menu-principal" role="list">
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
}

function buildHero() {
  return `
    <header class="hero" role="banner">
      <div class="container">
        <span class="hero-tag">✦ Segurança Digital</span>
        <h1>Notas de Cibersegurança</h1>
        <p class="hero-desc">Meu diário pessoal sobre Segurança Digital.</p>
      </div>
    </header>
  `;
}

function buildFooter() {
  return `
    <div class="container">
      <p>&copy; ${new Date().getFullYear()} Notas de Cibersegurança.</p>
    </div>
  `;
}

/* ═══════════════════════════════════════════
   BARRA DE PROGRESSO DE LEITURA
═══════════════════════════════════════════ */
function initReadProgress() {
  const bar = document.getElementById('read-progress');
  if (!bar) return;

  function updateProgress() {
    const doc = document.documentElement;
    const scrolled = doc.scrollTop / (doc.scrollHeight - doc.clientHeight);
    bar.style.width = `${Math.min(scrolled * 100, 100)}%`;
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
}

function initReadingTime() {
  const readingEl = document.querySelector('.post-meta-reading');
  const articleContent = document.querySelector('.post-content');
  if (!readingEl || !articleContent) return;

  const contentText = articleContent.textContent ?? '';
  const words = contentText
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  const WORDS_PER_MINUTE = 220;
  const readingMinutes = Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
  readingEl.textContent = `⏱ ${readingMinutes} min de leitura`;
}

/* ═══════════════════════════════════════════
   LISTAGEM DE POSTS
═══════════════════════════════════════════ */
function loadPosts(base) {
  const containers = {
    artigo: document.getElementById('lista-ultimos'),
    guia:   document.getElementById('lista-guias'),
    alerta: document.getElementById('lista-alertas'),
  };

  if (!Object.values(containers).some(Boolean)) return;

  Object.values(containers).forEach(el => { if (el) el.innerHTML = ''; });

  posts.forEach(post => {
    const target = containers[post.categoria];
    if (target) target.innerHTML += buildPostCard(post, base);
  });
}

/* ═══════════════════════════════════════════
   BUSCA EM TEMPO REAL
═══════════════════════════════════════════ */
function initSearch() {
  const input = document.getElementById('search-input');
  if (!input) return;

  const sections = Array.from(document.querySelectorAll('.secao-artigos, .secao-guias, .secao-alertas'));
  let wasSearching = false;

  const categoryByListId = {
    'lista-ultimos': 'artigo',
    'lista-guias': 'guia',
    'lista-alertas': 'alerta',
  };

  const searchContainer = input.closest('.search-container');
  let emptyState = document.getElementById('search-empty');

  if (!emptyState && searchContainer) {
    emptyState = document.createElement('p');
    emptyState.id = 'search-empty';
    emptyState.className = 'search-empty';
    emptyState.textContent = 'Nenhum artigo encontrado para sua busca.';
    emptyState.style.display = 'none';
    searchContainer.appendChild(emptyState);
  }

  input.addEventListener('input', () => {
    const query = normalizeSearchText(input.value);
    const isSearching = query.length > 0;
    let visibleCount = 0;

    document.querySelectorAll('.post-preview').forEach(card => {
      const title = card.querySelector('h3')?.textContent ?? '';
      const description = card.querySelector('p')?.textContent ?? '';
      const listId = card.closest('.post-list')?.id ?? '';
      const category = categoryByListId[listId] ?? '';

      const searchableText = normalizeSearchText(`${title} ${description} ${category}`);
      const isMatch = searchableText.includes(query);

      card.style.display = isMatch ? '' : 'none';
      if (isMatch) visibleCount += 1;
    });

    sections.forEach(section => {
      const cards = section.querySelectorAll('.post-preview');
      const hasVisibleCards = Array.from(cards).some(card => card.style.display !== 'none');
      section.style.display = !isSearching || hasVisibleCards ? '' : 'none';
    });

    if (isSearching && !wasSearching) {
      const firstVisibleSection = sections.find(section => section.style.display !== 'none');
      if (firstVisibleSection) {
        firstVisibleSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    if (emptyState) {
      emptyState.style.display = isSearching && visibleCount === 0 ? 'block' : 'none';
    }

    wasSearching = isSearching;
  });
}

/* ═══════════════════════════════════════════
   MENU MOBILE
═══════════════════════════════════════════ */
function initMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const menu   = document.getElementById('menu-principal');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('menu-ativo');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

/* ═══════════════════════════════════════════
   LINK ATIVO NO NAV
═══════════════════════════════════════════ */
function markActiveLink(base) {
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('#menu-principal a').forEach(link => {
    const href     = link.getAttribute('href') ?? '';
    const linkFile = href.split('#')[0].replace(base, '');
    const hasHash  = href.includes('#');

    if (!hasHash && (linkFile === currentFile || (currentFile === '' && linkFile === 'index.html'))) {
      link.classList.add('ativo');
    }
  });
}

/* ═══════════════════════════════════════════
   INICIALIZAÇÃO
═══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  const { isHome, base } = detectPageType(window.location.pathname);

  document.body.classList.toggle('has-nav-interna', !isHome);

  const headerEl = document.getElementById('app-header');
  if (headerEl) {
    headerEl.innerHTML = isHome
      ? buildNav(true, base) + buildHero()
      : buildNav(false, base);
  }

  const footerEl = document.getElementById('app-footer');
  if (footerEl) footerEl.innerHTML = buildFooter();

  /* Funcionalidades */
  loadPosts(base);
  initSearch();
  initMobileMenu();
  markActiveLink(base);
  initReadProgress();
  initReadingTime();
});