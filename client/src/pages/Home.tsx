import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  AudioLines,
  BookOpen,
  ChevronRight,
  Compass,
  Disc3,
  Instagram,
  Layers3,
  Linkedin,
  Mail,
  Map,
  Menu,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

const navItems = [
  { label: "Estúdio", href: "#estudio" },
  { label: "Projetos", href: "#projetos" },
  { label: "RealmCodex", href: "#realmcodex" },
  { label: "Aeldria", href: "#aeldria" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Equipe", href: "#equipe" },
];

const studioPillars = [
  ["01", "Memórias que viram mundos", "Tudo começa nas histórias que vivemos juntos."],
  ["02", "Criamos o que gostaríamos de jogar", "Nossos projetos nascem primeiro na mesa."],
  ["03", "Novas histórias devem encontrar espaço", "Criamos ferramentas e mundos para que outras mesas também deixem suas marcas."],
];

const studioAreas = [
  ["01", "RPG", "Sistemas, aventuras e experiências de mesa."],
  ["02", "Mundos", "Lore, mapas, personagens, culturas e universos narrativos."],
  ["03", "Tecnologia", "Ferramentas digitais que ampliam a mesa sem substituir a imaginação."],
  ["04", "Boardgames", "Experiências físicas e digitais centradas em narrativa, estratégia e grupo."],
];

const productSteps = [
  ["01", "CONSTRUA", "Mapas, dungeons, cidades e encontros em 2D."],
  ["02", "TRANSFORME", "O mesmo mapa ganha paredes, objetos, personagens e espaço em 3D."],
  ["03", "JOGUE", "Combate, dados, personagens, sessões e narrativa."],
  ["04", "MERGULHE", "Luz, som, atmosfera e eventos tornam o cenário vivo."],
];

const immersiveFeatures = [
  ["Som espacial", "Zonas de áudio, distância, vozes e sussurros exclusivos para cada jogador."],
  ["Iluminação", "Tochas, cristais, portais e objetos encantados com alcance, cor e sombras."],
  ["Atmosfera", "Chuva, neve, neblina, fumaça, brasas, vento e partículas mágicas."],
  ["Gatilhos", "Regiões e tokens que iniciam áudio, luz, diálogos, criaturas e mudanças no mundo."],
];

const roadmap = [
  ["ORIGEM", "Mais de duas décadas de campanhas, personagens e histórias compartilhadas."],
  ["FUNDAÇÃO", "A decisão de transformar ideias e ferramentas próprias em projetos reais."],
  ["AGORA", "RealmCodex e o desenvolvimento contínuo do universo de Aeldria."],
  ["PRÓXIMO", "Comunidade, financiamento coletivo e expansão dos projetos."],
  ["FUTURO", "Novos mundos, jogos, boardgames e experiências ainda sem nome."],
];

const team = [
  { number: "01", name: "Eduardo Muller", role: "Desenvolvedor criativo", line: "Garantindo que toda fantasia do mundo seja imersiva.", image: "/manus-storage/eduardo-cartoon-adventure_d4899874.png" },
  { number: "02", name: "Tiago Ramos", role: "Desenvolvedor técnico", line: "Garantindo que todas as mesas suportem as eras que as aguardam.", image: "/manus-storage/tiago-cartoon-adventure_26d4f5d2.png" },
  { number: "03", name: "Herick Muller", role: "Analista dos dados do mundo", line: "Mantendo histórias e lendas vivas para a próxima sessão.", image: "/manus-storage/herick-cartoon-adventure_e775c3b7.png" },
];

function scrollToId(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [activeTeam, setActiveTeam] = useState(0);

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
    team.forEach((member) => {
      const portrait = new Image();
      portrait.decoding = "async";
      portrait.src = member.image;
    });
    return () => observer.disconnect();
  }, []);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  }

  return (
    <main className="site-shell studio-site">
      <header className={`topbar ${menuOpen ? "topbar-open" : ""}`}>
        <a className="brand" href="#top" aria-label="Damiens Studios — início">
          <span className="brand-mark"><Compass size={20} strokeWidth={1.5} /></span>
          <span className="brand-lockup"><strong>DAMIENS STUDIOS</strong><span>RPG · mundos · experiências</span></span>
        </a>
        <nav className={`nav-links ${menuOpen ? "is-open" : ""}`} aria-label="Navegação principal">
          {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
          <a className="nav-cta" href="#apoie" onClick={() => setMenuOpen(false)}>Apoie o estúdio <ArrowUpRight size={15} /></a>
        </nav>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
      </header>

      <section className="hero studio-hero" id="top">
        <div className="hero-art" aria-hidden="true" /><div className="hero-vignette" aria-hidden="true" /><div className="hero-grid" aria-hidden="true" /><div className="hero-character-aura" aria-hidden="true" /><div className="hero-stars" aria-hidden="true" /><div className="hero-constellation" aria-hidden="true" /><div className="hero-mist" aria-hidden="true" /><div className="hero-compass-glow" aria-hidden="true" />
        <div className="hero-content page-pad">
          <p className="eyebrow"><span className="eyebrow-dot" /> Damiens Studios · mais de 20 anos de RPG</p>
          <h1>Um mundo nosso.<br /><em>Uma mesa sem distância.</em></h1>
          <p className="hero-copy">Somos amigos que jogam juntos há mais de 20 anos. Das nossas mesas nasceram histórias, mundos e ferramentas — e hoje elas dão forma à Damiens Studios.</p>
          <div className="hero-actions"><button className="button button-primary" type="button" onClick={() => scrollToId("#projetos")}>Explorar nossos projetos <ArrowDownRight size={17} /></button><button className="text-button" type="button" onClick={() => scrollToId("#estudio")}>Conhecer o estúdio <ChevronRight size={16} /></button></div>
        </div>
        <div className="hero-note hero-note-left">Est. 2025 · amigos desde sempre</div><div className="hero-note hero-note-right">Lat. 23° 32' S<br />Long. 46° 38' W</div><div className="scroll-cue"><span>Desça para descobrir</span><ArrowDownRight size={17} /></div>
      </section>

      <div className="ticker" aria-label="Áreas de atuação"><div className="ticker-track"><span>RPG</span><i>✳</i><span>Worldbuilding</span><i>✳</i><span>Narrativa</span><i>✳</i><span>Tecnologia</span><i>✳</i><span>Boardgames</span><i>✳</i><span>RPG</span><i>✳</i><span>Worldbuilding</span><i>✳</i><span>Narrativa</span><i>✳</i><span>Tecnologia</span><i>✳</i><span>Boardgames</span><i>✳</i></div></div>

      <section className="intro section page-pad reveal" id="estudio">
        <div className="section-kicker"><span>01</span><span>Nossa história</span><span className="line" /></div>
        <div className="intro-layout"><h2>A distância nos separou.<br /><em>O jogo nos reuniu.</em></h2><div className="intro-aside"><p>Antes de existir um estúdio, existia uma mesa. Durante mais de vinte anos dividimos dados, personagens, batalhas, risadas e mundos inteiros. Quando a vida colocou quilômetros entre nós, começamos a construir maneiras de continuar criando juntos. Dessas experiências nasceu a Damiens Studios.</p><a className="inline-link" href="#equipe">Conheça quem faz <ArrowUpRight size={15} /></a></div></div>
        <div className="story-steps" aria-label="Evolução do estúdio"><span>amigos</span><ArrowRight size={15} /><span>campanhas</span><ArrowRight size={15} /><span>histórias</span><ArrowRight size={15} /><span>mundos</span><ArrowRight size={15} /><span>ferramentas</span><ArrowRight size={15} /><strong>estúdio</strong></div>
        <div className="rule" /><div className="pillar-grid">{studioPillars.map(([number, title, copy], index) => <article className="pillar reveal" style={{ "--reveal-delay": `${index * 70}ms` } as React.CSSProperties} key={number}><span className="pillar-number">{number}</span><h3>{title}</h3><p>{copy}</p><span className="pillar-arrow"><ArrowUpRight size={15} /></span></article>)}</div>
      </section>

      <section className="philosophy section page-pad reveal" id="filosofia"><div className="section-kicker"><span>02</span><span>Filosofia do estúdio</span><span className="line" /></div><div className="philosophy-heading"><h2>Não fazemos apenas jogos.<br /><em>Construímos lugares onde histórias podem acontecer.</em></h2></div><div className="area-grid">{studioAreas.map(([number, title, copy], index) => <article className="area-card reveal" style={{ "--reveal-delay": `${index * 65}ms` } as React.CSSProperties} key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

      <section className="projects section page-pad reveal" id="projetos"><div className="section-kicker"><span>03</span><span>Projetos</span><span className="line" /></div><div className="projects-heading"><h2>Mundos diferentes.<br /><em>A mesma vontade de jogar.</em></h2><p>RealmCodex é uma plataforma. Aeldria é um universo. A Damiens Studios existe para criar muitos outros lugares entre eles.</p></div><div className="project-feature reveal" id="aeldria"><div className="project-feature-art" role="img" aria-label="Arte cinematográfica do universo Aeldria" /><div className="project-feature-overlay" /><div className="project-feature-content"><p className="project-status"><span /> Em desenvolvimento · 2026</p><div><p className="project-type">Universo de fantasia</p><h3>Aeldria</h3><p className="project-description">O mundo que nasceu das nossas campanhas. Reinos, deuses, povos, guerras, cidades e cicatrizes deixadas pelas histórias que atravessamos juntos.</p><a className="button button-light" href="#universo">Explorar Aeldria <ArrowUpRight size={16} /></a></div></div><span className="project-corner">A / 01</span></div><div className="project-secondary-grid reveal" id="realmcodex"><article className="project-secondary"><div className="secondary-art"><img src="/manus-storage/realmcodex-digital-platform_83d28fa3.jpg" alt="Mesa digital de RPG com mapa, dados e conexões entre jogadores" /></div><div className="secondary-body"><div className="secondary-top"><p className="project-type">RPG digital / VTT</p><span>R / 02</span></div><h3>RealmCodex</h3><p>Uma plataforma criada para preparar, construir, jogar e preservar campanhas de RPG e boardgames — mantendo a mesa viva mesmo quando seus jogadores estão distantes.</p><a className="inline-link" href="https://role-playingz.netlify.app/" target="_blank" rel="noreferrer">Conhecer RealmCodex <ArrowUpRight size={15} /></a></div></article><aside className="manifesto-card"><Sparkles size={20} strokeWidth={1.5} /><p>“O melhor mapa é aquele que ainda guarda um lugar que ninguém descobriu.”</p><span>— nota de processo / 014</span></aside></div><div className="future-projects"><span>Próximos espaços do catálogo</span><div><b>PROJECT C</b><b>BOARDGAME</b><b>NEW WORLD</b></div><small>Sem anúncios ainda. Apenas espaço reservado para as próximas histórias.</small></div></section>

      <section className="platform-showcase section page-pad reveal"><div className="section-kicker"><span>04</span><span>Um produto Damiens Studios</span><span className="line" /></div><div className="platform-heading"><div><p className="project-type">RealmCodex · RPG digital / VTT</p><h2>Sua mesa.<br /><em>Onde quer que a história leve vocês.</em></h2></div><div className="platform-intro"><p>O RealmCodex amplia a mesa sem substituir a imaginação. É onde o grupo prepara, constrói, joga e guarda o que aconteceu.</p><a className="button button-primary" href="https://role-playingz.netlify.app/" target="_blank" rel="noreferrer">Abrir RealmCodex <ArrowUpRight size={16} /></a></div></div><div className="product-steps">{productSteps.map(([number, title, copy], index) => <article className="product-step reveal" style={{ "--reveal-delay": `${index * 60}ms` } as React.CSSProperties} key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div><div className="product-flow"><span>2D</span><ArrowRight size={24} /><span>3D</span><ArrowRight size={24} /><strong>IMERSÃO</strong></div></section>

      <section className="immersive section page-pad reveal"><div className="immersive-art"><img className="dungeon-art-image" src="/manus-storage/damiens-dungeon-map_97b5109b.png" alt="Mapa de dungeon com as regiões Taverna, Passagem e Cripta, áreas de alcance e pontos de luz" /><span className="dungeon-art-caption">Mapa de teste / região sonora ativa</span></div><div className="immersive-copy"><div className="section-kicker"><span>05</span><span>O diferencial imersivo</span><span className="line" /></div><h2>O mundo reage<br /><em>aos jogadores.</em></h2><p>Uma dungeon pode saber onde cada pessoa está. O mestre pode criar regiões de áudio, luz, atmosfera e gatilhos — e fazer o cenário responder a cada movimento.</p><div className="immersive-list">{immersiveFeatures.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div><p className="editorial-quote">“O mundo sabe onde você está.”</p></div></section>

      <section className="atlas section page-pad reveal" id="universo"><div className="atlas-card"><img className="atlas-map-image" src="/manus-storage/aeldria-atlas-map_8a0b95f3.png" alt="Mapa cartográfico de Aeldria com regiões, linhas de navegação e rosa dos ventos" /><div className="atlas-lines" /><div className="atlas-compass"><Compass size={80} strokeWidth={.6} /></div><span className="atlas-stamp">ARQUIVO / AELDRIA / 001</span><span className="atlas-coordinate">23° 32' S · 46° 38' W</span><div className="atlas-copy"><p className="project-type">Aeldria · universo de fantasia</p><h2>Aeldria não nasceu<br /><em>em um documento.</em></h2><p>Nasceu em uma mesa. Foi sendo construída através das campanhas do grupo: cidades, montanhas, artefatos, criaturas, constelações, personagens e perguntas que ainda não encontraram resposta.</p><a className="button button-light" href="#projetos">Descobrir Aeldria <ArrowUpRight size={16} /></a></div></div></section>

      <section className="process section page-pad reveal"><div className="section-kicker"><span>06</span><span>Processo criativo</span><span className="line" /></div><div className="process-heading"><h2>Da mesa<br /><em>para o mundo.</em></h2><p>Não existe uma linha reta entre uma ideia e uma experiência. Existe papel, conversa, protótipo, teste e a próxima sessão.</p></div><div className="process-line">{["rabisco", "mapa", "conceito", "protótipo", "jogo", "sessão real"].map((label, index) => <div className="process-node" key={label}><span>0{index + 1}</span><b>{label}</b>{index < 5 && <ArrowRight size={16} />}</div>)}</div><div className="workshop-strip"><span>CONCEPT ARTS</span><span>WIRE­FRAMES</span><span>MAPAS</span><span>FICHAS</span><span>MINIATURAS</span><span>TESTES</span><span>ANOTAÇÕES</span></div></section>

      <section className="roadmap section page-pad reveal" id="roadmap"><div className="section-kicker"><span>07</span><span>Roadmap do estúdio</span><span className="line" /></div><div className="roadmap-heading"><h2>Sem atalhos<br /><em>no mapa.</em></h2><p>A trajetória da Damiens Studios representa mais do que um produto. É o caminho de uma mesa que decidiu continuar criando.</p></div><div className="roadmap-list studio-roadmap">{roadmap.map(([title, copy], index) => <article className={`roadmap-item reveal ${index === 2 ? "current" : ""}`} style={{ "--reveal-delay": `${index * 70}ms` } as React.CSSProperties} key={title}><div className="roadmap-year">0{index + 1}</div><div className="roadmap-marker"><span /></div><div className="roadmap-copy"><div className="roadmap-title"><h3>{title}</h3><span>{index === 2 ? "agora" : index < 2 ? "feito" : "a seguir"}</span></div><p>{copy}</p></div>{index < roadmap.length - 1 && <div className="roadmap-connector" />}</article>)}</div></section>

      <section className="team section page-pad reveal" id="equipe"><div className="section-kicker"><span>08</span><span>Equipe</span><span className="line" /></div><div className="team-layout"><div><h2>Pequeno por escolha.<br /><em>Grande por intenção.</em></h2><p className="team-lede">Somos três amigos que jogam RPG juntos há mais de vinte anos. A Damiens Studios nasceu da vontade de continuar na mesma mesa — e de construir coisas que gostaríamos de encontrar como jogadores.</p></div><div className="team-roles team-roles-copy">{team.map((member, index) => <button className={`role-row ${activeTeam === index ? "active" : ""}`} type="button" onMouseEnter={() => setActiveTeam(index)} onFocus={() => setActiveTeam(index)} onClick={() => setActiveTeam(index)} key={member.name}><span>{member.number}</span><strong>{member.name}</strong><small>{member.role} · {member.line}</small></button>)}</div></div><div className="team-hover-portrait"><img key={team[activeTeam].image} src={team[activeTeam].image} alt={`Retrato cartoon de ${team[activeTeam].name}`} decoding="sync" /><div><span>{team[activeTeam].number} / fundador</span><strong>{team[activeTeam].name}</strong><p>{team[activeTeam].line}</p></div></div><div className="team-closing"><span>Três jogadores.</span><em>Uma mesma lenda.</em></div></section>

      <section className="manifesto section page-pad reveal"><div className="manifesto-words"><span>Jogamos.</span><span>Criamos.</span><span>Construímos mundos.</span><em>E ainda estamos na mesma mesa.</em></div><div className="manifesto-signature">DAMIENS STUDIOS</div></section>

      <section className="support section page-pad reveal" id="apoie"><div className="support-orbit" aria-hidden="true"><Disc3 size={430} strokeWidth={0.45} /></div><div className="support-content"><p className="eyebrow"><span className="eyebrow-dot" /> Uma próxima coordenada</p><h2>Ajude-nos a continuar<br /><em>criando.</em></h2><p>Cada apoio ajuda a transformar protótipos em jogos, histórias em mundos e nossas mesas em experiências que outras pessoas também poderão viver.</p><form className="signup-form" onSubmit={handleSubmit}><label className="sr-only" htmlFor="email">Seu melhor e-mail</label><input id="email" type="email" placeholder="seu@email.com" value={email} onChange={(event) => setEmail(event.target.value)} required /><button className="button button-primary" type="submit">Apoiar a Damiens Studios <ArrowUpRight size={16} /></button></form>{submitted && <p className="form-success"><Sparkles size={14} /> Você entrou para a lista. Nos vemos na próxima coordenada.</p>}<span className="support-fineprint">Sem spam. Só sinais de vida, mapas e novidades do estúdio.</span></div></section>

      <footer className="footer page-pad"><div className="footer-brand"><span className="brand-mark"><Compass size={19} strokeWidth={1.5} /></span><span><strong>Damiens Studios</strong><small>RPG · mundos · experiências</small></span></div><div className="footer-links"><a href="#projetos">Projetos</a><a href="#aeldria">Aeldria</a><a href="#realmcodex">RealmCodex</a><a href="#equipe">Equipe</a></div><div className="footer-meta"><span>© 2026 Damiens Studios</span><span>Toda mesa deixa marcas.</span></div><div className="footer-social"><a href="mailto:hello@realmcodex.studio" aria-label="Enviar e-mail"><Mail size={17} /></a><a href="#top" aria-label="Instagram"><Instagram size={17} /></a><a href="#top" aria-label="LinkedIn"><Linkedin size={17} /></a></div></footer>
    </main>
  );
}
