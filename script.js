/* ═══════════════════════════════════════════
   POSTS
═══════════════════════════════════════════ */
const posts = [
                            {
    titulo:    'Dark web: o lado sombrio da internet',
    data:      '03/03/2026',
    descricao: 'Aprenda o que é a dark web, como ela funciona e o que você não deve fazer lá para se manter seguro o...',
    categoria: 'artigo',
    link:      'artigos/dark-web-o-lado-sombrio-da-internet/',
  },
{
    titulo:    'Vulnerabilidade crítica no Android permite acesso root sem desbloqueio de tela',
    data:      '10/03/2026',
    descricao: 'Vulnerabilidade crítica no Android...',
    categoria: 'alerta',
    link:      'artigos/vulnerabilidade-critica-no-android-permite-acesso-root-sem-desbloqueio-de-tela/',
  },
{
    titulo:    'Gerenciadores de senha: o segredo para uma cibersegurança eficaz',
    data:      '17/03/2026',
    descricao: 'Aprenda a importância de usar um gerenciador de senha e como escolher o melhor para suas necessidade...',
    categoria: 'guia',
    link:      'artigos/gerenciadores-de-senha-o-segredo-para-uma-ciberseguranca-eficaz/',
  },
{
    titulo:    'Desvendando os ataques de Força Bruta: como se proteger na era digital',
    data:      '24/03/2026',
    descricao: 'Aprenda a entender o que é um ataque de Força Bruta e como os Cibercriminosos utilizam essa técnica ...',
    categoria: 'artigo',
    link:      'artigos/desvendando-os-ataques-de-forca-bruta-como-se-proteger-na-era-digital/',
  },
{
    titulo:    'Golpe de Deepfake atinge empresas brasileiras',
    data:      '01/04/2026',
    descricao: 'Campanha de Phishing usa Deepfake...',
    categoria: 'alerta',
    link:      'artigos/golpe-de-deepfake-atinge-empresas-brasileiras/',
  },
{
    titulo:    'Como se proteger de links maliciosos: um guia prático',
    data:      '08/04/2026',
    descricao: 'Aprenda a identificar e evitar links maliciosos que podem comprometer a segurança do seu dispositivo...',
    categoria: 'guia',
    link:      'artigos/como-se-proteger-de-links-maliciosos-um-guia-pratico/',
  },
{
    titulo:    'Malware bancário brasileiro ataca em 2026',
    data:      '15/04/2026',
    descricao: 'Novo Malware mira usuários do Pix...',
    categoria: 'alerta',
    link:      'artigos/malware-bancario-brasileiro-ataca-em-2026/',
  },
{
    titulo:    'Criptografia: o escudo dos dados na era digital',
    data:      '21/04/2026',
    descricao: 'Aprenda como a criptografia protege seus dados online e offline, e descubra dicas práticas para aume...',
    categoria: 'artigo',
    link:      'artigos/criptografia-o-escudo-dos-dados-na-era-digital/',
  },
{
    titulo:    'Guia prático de segurança no Wi-Fi público',
    data:      '28/04/2026',
    descricao: 'Aprenda a se proteger dos Cibercriminosos quando estiver conectado a redes Wi-Fi públicas e descubra...',
    categoria: 'guia',
    link:      'artigos/guia-pratico-de-seguranca-no-wi-fi-publico/',
  },
{
    titulo:    'Descobrindo a verdade sobre VPN: como se proteger na era digital',
    data:      '02/05/2026',
    descricao: 'Aprenda a entender o que é VPN e quando você realmente precisa de uma para proteger sua privacidade ...',
    categoria: 'artigo',
    link:      'artigos/descobrindo-a-verdade-sobre-vpn-como-se-proteger-na-era-digital/',
  },
{
    titulo:    'Ransomware: O pesadelo digital que paralisa o Brasil – entenda, proteja-se e salve seus dados!',
    data:      '14/05/2026',
    descricao: 'Descubra como o Ransomware sequestra dados de empresas e hospitais. Aprenda a im...',
    categoria: 'artigo',
    link:      'artigos/ransomware-o-pesadelo-digital-que-paralyza-o-brasil-entenda-proteja-se-e-salve-seus-dados/',
  },
{
    titulo:    'Engenharia social: quando seu cérebro é o próximo alvo – o hack que nenhum antivírus pega!',
    data:      '14/05/2026',
    descricao: 'Aprenda como criminosos usam persuasão e urgência para hackear sua mente, não se...',
    categoria: 'guia',
    link:      'artigos/engenharia-social-quando-seu-cerebro-e-o-proximo-alvo-o-hack-que-nenhum-antivirus-pega/',
  },
{
    titulo:    'PraisonAI: falha crítica de autenticação (CVE-2026-44338) explorada horas após divulgação',
    data:      '14/05/2026',
    descricao: 'Notícia: Threat actors have been observed attempting to Exploit a recently disclosed secu...',
    categoria: 'alerta',
    link:      'artigos/praisonai-falha-critica-de-autenticacao-cve-2026-44338-explorada-horas-apos-divulgacao/',
  },
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
  const categoryLabels = {
    artigo: '📖 Artigo',
    guia:   '💡 Guia',
    alerta: '🚨 Alerta'
  };
  const categoryLabel = categoryLabels[post.categoria] || '📖 Artigo';

  const titleEl = hasLink
    ? `<a href="${base}${post.link}">${post.titulo}</a>`
    : `<span>${post.titulo}</span>`;

  const ctaEl = hasLink
    ? `<a href="${base}${post.link}" class="read-more" aria-label="Ler artigo: ${post.titulo}">Ler artigo →</a>`
    : `<span class="post-em-breve" aria-label="Em breve">Em breve</span>`;

  return `
    <article class="post-preview" role="listitem">
      <div class="post-card-category">${categoryLabel}</div>
      <div class="post-card-content">
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
          <li><a href="${base}index.html#alertas">Notícias</a></li>

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
        <h1>Notas de Cibersegurança</h1>
        <p class="hero-desc">Meu diário pessoal sobre tecnologia e proteção de dados.</p>
      </div>
    </header>
  `;
}

function buildFooter(base) {
  const currentYear = new Date().getFullYear();
  return `
    <div class="container">
      <div class="footer-content">
        <p class="footer-logo">Notas de Cibersegurança</p>
        <p class="copyright">&copy; ${currentYear} — Compartilhando conhecimento sobre segurança digital.</p>
      </div>
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
    toggle.classList.toggle('menu-ativo', isOpen);
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
   NAVEGAÇÃO DOS ARTIGOS (BOTÃO VOLTAR)
   ═══════════════════════════════════════════ */
function initArticleNavigation() {
  const { isHome, base } = detectPageType(window.location.pathname);
  if (isHome) return;

  const article = document.querySelector('.post-full');
  if (!article) return;

  // Evita duplicar se já existir (seja via script ou hardcoded)
  if (article.querySelector('.back-to-all')) return;

  const backNav = document.createElement('div');
  backNav.className = 'post-footer-nav back-to-all';
  backNav.innerHTML = `
    <a href="${base}index.html#ultimos-artigos" class="read-more">
      ← Voltar para todos os artigos
    </a>
  `;
  
  const postNav = article.querySelector('.post-nav');
  const contents = article.querySelectorAll('.post-content');
  
  if (postNav) {
    // Se houver navegação entre posts, coloca o "Voltar" logo acima dela
    postNav.insertAdjacentElement('beforebegin', backNav);
  } else if (contents.length > 0) {
    // Se não houver, coloca após o último bloco de conteúdo
    contents[contents.length - 1].insertAdjacentElement('afterend', backNav);
  } else {
    article.appendChild(backNav);
  }
}

/* ═══════════════════════════════════════════
   BOTÃO VOLTAR AO TOPO
   ═══════════════════════════════════════════ */
function initBackToTop() {
  const btn = document.createElement('button');
  btn.id = 'back-to-top';
  btn.className = 'back-to-top';
  btn.setAttribute('aria-label', 'Voltar ao topo');
  btn.innerHTML = '↑';
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ═══════════════════════════════════════════
   INICIALIZAÇÃO
═══════════════════════════════════════════ */
/* ═══════════════════════════════════════════
   CENTRAL DE ALERTAS LIVE
   ═══════════════════════════════════════════ */
function initThreatHub() {
  const container = document.getElementById('live-threat-hub');
  if (!container) return;

  const { isHome, base } = detectPageType(window.location.pathname);

  // Alertas locais gerados pela IA
  let localThreats = posts
    .filter(p => p.categoria === 'alerta')
    .map(p => `<a href="${base}${p.link}" style="color: inherit; text-decoration: none;">🚨 ${p.titulo}</a>`);

  // Fallback caso não existam alertas locais
  if (localThreats.length === 0) {
    localThreats = [
      "Aumento de ataques de Ransomware detectado em infraestruturas críticas.",
      "Nova campanha de Phishing explorando temas de declaração de impostos."
    ];
  }

  let threats = [...localThreats];
  let currentIndex = 0;
  let intervalId = null;
  
  function updateThreat() {
    const message = threats[currentIndex];
    
    container.innerHTML = `
      <div class="threat-hub">
        <div class="threat-status" title="Buscando alertas em tempo real">
          <span class="pulse-dot"></span>
          LIVE THREAT
        </div>
        <div class="threat-message">${message}</div>
      </div>
    `;
    currentIndex = (currentIndex + 1) % threats.length;
  }

  updateThreat();
  intervalId = setInterval(updateThreat, 6000); // 6s

  // Busca notícias reais da API em background
  fetch('https://api.rss2json.com/v1/api.json?rss_url=https://feeds.feedburner.com/TheHackersNews')
    .then(response => response.json())
    .then(data => {
      if (data && data.status === 'ok' && data.items && data.items.length > 0) {
        const apiThreats = data.items.slice(0, 7).map(item => 
          `<a href="${item.link}" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: underline; text-underline-offset: 3px;">📰 ${item.title} (The Hacker News)</a>`
        );
        
        // Intercala um alerta local e uma notícia internacional
        const combinedThreats = [];
        const maxLen = Math.max(localThreats.length, apiThreats.length);
        for (let i = 0; i < maxLen; i++) {
          if (i < localThreats.length) combinedThreats.push(localThreats[i]);
          if (i < apiThreats.length) combinedThreats.push(apiThreats[i]);
        }
        
        threats = combinedThreats;
        currentIndex = 0;
        clearInterval(intervalId);
        updateThreat(); // força a próxima mensagem instantaneamente
        intervalId = setInterval(updateThreat, 6000); // tempo de troca
      }
    })
    .catch(error => console.error("Erro ao carregar notícias live:", error));
}

/* ═══════════════════════════════════════════
   TRILHA DE ESTUDOS (ROADMAP)
   ═══════════════════════════════════════════ */
function initRoadmap() {
  const container = document.getElementById('learning-roadmap');
  if (!container) return;

  const steps = [
    { n: 1, t: "Fundamentos", d: "Entenda como a internet funciona e proteja suas senhas.", link: "#guias" },
    { n: 2, t: "Engenharia Social", d: "Aprenda a identificar manipulações e golpes digitais.", link: "artigos/engenharia-social-quando-seu-cerebro-e-o-proximo-alvo-o-hack-que-nenhum-antivirus-pega/" },
    { n: 3, t: "Defesa de Rede", d: "Configure firewalls e entenda a segurança de conexões.", link: "artigos/firewall/" },
    { n: 4, t: "Proteção Avançada", d: "MFA, Criptografia e planos de resposta a incidentes.", link: "artigos/autenticacao/" }
  ];

  container.innerHTML = `
    <section class="roadmap-container">
      <span class="section-label">Guia de Estudos</span>
      <h2>Trilha do Iniciante</h2>
      <div class="roadmap-grid">
        ${steps.map(s => `
          <a href="${s.link}" class="roadmap-step">
            <div class="step-number">${s.n}</div>
            <span class="step-title">${s.t}</span>
            <p class="step-desc">${s.d}</p>
          </a>
        `).join('')}
      </div>
    </section>
  `;
}


/* ═══════════════════════════════════════════
   QUIZ INTERATIVO
   ═══════════════════════════════════════════ */
function initQuiz() {
  const quizContainers = document.querySelectorAll('.quiz-placeholder');
  if (quizContainers.length === 0) return;

  quizContainers.forEach(container => {
    const q = container.dataset.question;
    const options = JSON.parse(container.dataset.options);
    const correct = parseInt(container.dataset.correct);
    const feedback = container.dataset.feedback;

    container.innerHTML = `
      <div class="quiz-box">
        <div class="quiz-header">
          <span class="quiz-label">Desafio Rápido</span>
          <div class="quiz-question">${q}</div>
        </div>
        <div class="quiz-options">
          ${options.map((opt, i) => `
            <div class="quiz-option" data-index="${i}">${opt}</div>
          `).join('')}
        </div>
        <div class="quiz-feedback"></div>
      </div>
    `;

    const optionEls = container.querySelectorAll('.quiz-option');
    const feedbackEl = container.querySelector('.quiz-feedback');

    optionEls.forEach(opt => {
      opt.addEventListener('click', () => {
        const index = parseInt(opt.dataset.index);
        optionEls.forEach(el => el.style.pointerEvents = 'none');
        if (index === correct) {
          opt.classList.add('correct');
          feedbackEl.innerHTML = `<strong>✅ Correto!</strong> ${feedback}`;
          feedbackEl.style.display = 'block';
          feedbackEl.style.color = 'var(--green)';
        } else {
          opt.classList.add('wrong');
          optionEls[correct].classList.add('correct');
          feedbackEl.innerHTML = `<strong>❌ Ops!</strong> A resposta correta era a opção ${correct + 1}. ${feedback}`;
          feedbackEl.style.display = 'block';
          feedbackEl.style.color = 'var(--red)';
        }
      });
    });
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
  if (footerEl) footerEl.innerHTML = buildFooter(base);

  loadPosts(base);
  initSearch();
  initMobileMenu();
  markActiveLink(base);
  initReadProgress();
  initReadingTime();
  initBackToTop();
  initArticleNavigation();
  initThreatHub();
  initRoadmap();
  initQuiz();
});