(() => {
  const body = document.body;
  const seasonIndex = Number(body.dataset.seasonIndex);
  const seasonNumber = seasonIndex + 1;
  const seasons = [
    { episodes: 24, year: 1994, start: '22 set. 1994', end: '18 mai. 1995' },
    { episodes: 24, year: 1995, start: '21 set. 1995', end: '16 mai. 1996' },
    { episodes: 25, year: 1996, start: '19 set. 1996', end: '15 mai. 1997' },
    { episodes: 24, year: 1997, start: '25 set. 1997', end: '7 mai. 1998' },
    { episodes: 24, year: 1998, start: '24 set. 1998', end: '20 mai. 1999' },
    { episodes: 25, year: 1999, start: '23 set. 1999', end: '18 mai. 2000' },
    { episodes: 24, year: 2000, start: '12 out. 2000', end: '17 mai. 2001' },
    { episodes: 24, year: 2001, start: '27 set. 2001', end: '16 mai. 2002' },
    { episodes: 24, year: 2002, start: '26 set. 2002', end: '15 mai. 2003' },
    { episodes: 18, year: 2003, start: '25 set. 2003', end: '6 mai. 2004' }
  ];
  const season = seasons[seasonIndex];
  if (!season) return;
  const cover = `../assets/images/capas/friends-temporada-${seasonNumber}.jpg`;
  document.title = `Friends: Temporada ${seasonNumber} — Central das Séries`;
  body.innerHTML = `
    <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <header class="site-header">
      <div class="topbar shell">
        <a class="brand" href="../index.html"><span class="brand-mark">C</span><span>CENTRAL DAS SÉRIES</span></a>
        <form class="global-search" role="search"><span class="search-icon">⌕</span><input id="globalSearch" type="search" placeholder="Buscar série..." aria-label="Buscar série"><kbd>Ctrl K</kbd><div class="search-results" id="searchResults" hidden></div></form>
        <div class="header-actions"><a class="login-link auth-guest" href="../login.html">Entrar</a><a class="profile-button auth-user" href="../perfil.html" aria-label="Abrir perfil"><img src="../assets/images/perfil/avatar.png" alt="Foto do usuário"><span class="online-dot"></span></a><button class="menu-toggle" id="menuToggle" type="button">☰</button></div>
      </div>
      <nav class="main-nav" id="mainNav"><div class="shell nav-inner"><a href="../index.html">Home</a><a class="active" href="../series.html">Séries</a><a href="../calendario.html">Calendário</a><a href="../ranking.html">Ranking</a><a href="../ranking-usuarios.html">Ranking de usuários</a></div></nav>
    </header>
    <main id="conteudo" class="details-main">
      <div class="detail-backdrop friends-season-backdrop" style="--friends-season-cover:url('${cover}')"><div class="detail-glow"></div></div>
      <div class="shell breadcrumbs"><a href="../series.html">Séries</a><span>/</span><a href="friends.html">Friends</a><span>/</span><b>Temporada ${seasonNumber}</b></div>
      <section class="detail-hero shell">
        <div class="cover-column">
          <div class="detail-cover"><img src="${cover}" alt="Capa de Friends — Temporada ${seasonNumber}"><span class="cover-ribbon">CONCLUÍDA</span></div>
          <a class="button button-primary full" href="friends.html">Ver série completa</a>
          <a class="button button-outline full" href="#episodios">Ver episódios</a>
          <div class="release-year"><span>Ano de lançamento</span><strong>${season.year}</strong></div>
        </div>
        <div class="detail-copy season-detail-copy">
          <span class="eyebrow">FRIENDS • ${seasonNumber}ª TEMPORADA</span>
          <h1>Temporada ${seasonNumber}</h1>
          <p class="alternative-title">Friends — Season ${seasonNumber}</p>
          <div class="detail-rating-row"><div class="rating-stat"><b>${season.episodes}</b><span>episódios</span></div><div class="rating-stat"><b>${season.year}</b><span>lançamento</span></div><div class="rating-stat"><b>NBC</b><span>emissora</span></div><div class="rating-stat"><b>Concluída</b><span>status</span></div></div>
          <div class="genre-row"><a href="#">Comédia</a><a href="#">Romance</a><a href="#">Sitcom</a></div>
          <p class="detail-lead">Rachel, Ross, Monica, Chandler, Joey e Phoebe enfrentam relacionamentos, trabalho e as surpresas da vida adulta em Nova York.</p>
        </div>
      </section>
      <nav class="detail-tabs"><div class="shell"><button class="active" data-tab="episodios">Episódios <span>${season.episodes}</span></button></div></nav>
      <section class="shell tab-panel placeholder-panel active" id="episodios"><div class="content-card"><h2>Episódios</h2><p>Carregando a lista de episódios...</p></div></section>
      <section class="shell season-compact-info"><div class="info-card"><h2>Informações</h2><dl><div><dt>Episódios</dt><dd>${season.episodes}</dd></div><div><dt>Status</dt><dd><span class="completed-dot"></span> Concluída</dd></div><div><dt>Exibição</dt><dd>${season.start} – ${season.end}</dd></div><div><dt>Emissora</dt><dd>NBC</dd></div><div><dt>Criação</dt><dd>David Crane e Marta Kauffman</dd></div></dl></div></section>
    </main>
    <footer class="site-footer"><div class="shell footer-inner"><a class="brand" href="../index.html"><span class="brand-mark">C</span><span>CENTRAL DAS SÉRIES</span></a><p>Seu acervo de seriados em português.</p></div></footer>
    <div class="toast" id="toast"></div>
  `;
})();
