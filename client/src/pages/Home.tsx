import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  ChevronRight,
  Compass,
  Disc3,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Sparkles,
  X,
} from "lucide-react";

const navItems = [
  { label: "Estúdio", href: "#estudio" },
  { label: "Projetos", href: "#projetos" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Equipe", href: "#equipe" },
];

const pillars = [
  {
    number: "01",
    title: "Memórias que viram mundo",
    copy: "Tudo começa nas histórias que vivemos juntos e continua aberto para novas campanhas, grupos e lendas.",
  },
  {
    number: "02",
    title: "Uma mesa sem distância",
    copy: "A RealmCodex nasce para devolver a presença, a imersão e a sensação de jogar lado a lado.",
  },
  {
    number: "03",
    title: "Aberto a novas lendas",
    copy: "Aeldria é nosso ponto de partida — não um ponto final. O mapa foi feito para receber outras histórias.",
  },
];

const roadmap = [
  { year: "2025", label: "A decisão", copy: "Depois de 20 anos jogando juntos, decidimos criar nosso próprio estúdio e mundo.", state: "feito" },
  { year: "2026", label: "Primeira expedição", copy: "RealmCodex ganha forma como plataforma jogável para nossas mesas e campanhas.", state: "agora" },
  { year: "2027", label: "Aeldria se expande", copy: "Financiamento coletivo, novas campanhas e o primeiro grande ciclo de histórias.", state: "próximo" },
  { year: "2028", label: "Novas lendas", copy: "Boardgames, ferramentas e mundos abertos para histórias que ainda não foram contadas.", state: "depois" },
];

const teamCharacters = [
  {
    name: "Eduardo Muller",
    role: "Desenvolvedor criativo",
    detail: "Fantasia imersiva",
    adventure: "/manus-storage/eduardo-cartoon-adventure_d4899874.png",
    heroic: "/manus-storage/eduardo-cartoon-heroic_7fecfc3a.png",
    alt: "Eduardo como um anão inventor de barba castanha em arte cartoon de fantasia",
  },
  {
    name: "Tiago Ramos",
    role: "Desenvolvedor técnico",
    detail: "Mesas através das eras",
    adventure: "/manus-storage/tiago-cartoon-adventure_26d4f5d2.png",
    heroic: "/manus-storage/tiago-cartoon-heroic_c50c9b8c.png",
    alt: "Tiago como um guerreiro humano de armadura escura em arte cartoon de fantasia",
  },
  {
    name: "Herick Muller",
    role: "Analista dos dados do mundo",
    detail: "Histórias e lendas vivas",
    adventure: "/manus-storage/herick-cartoon-adventure_e775c3b7.png",
    heroic: "/manus-storage/herick-cartoon-heroic_b0884e8a.png",
    alt: "Herick como um clérigo humano de armadura dourada em arte cartoon de fantasia",
  },
];

function scrollToId(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [portraitStyle, setPortraitStyle] = useState<"adventure" | "heroic">("adventure");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  }

  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Damiens&Devs — início">
          <span className="brand-mark"><Compass size={20} strokeWidth={1.5} /></span>
          <span className="brand-lockup">
            <strong>D&amp;D</strong>
            <span>Damiens&amp;Devs</span>
          </span>
        </a>
        <nav className={`nav-links ${menuOpen ? "is-open" : ""}`} aria-label="Navegação principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="nav-cta" href="#apoie" onClick={() => setMenuOpen(false)}>
            Apoie o projeto <ArrowUpRight size={15} />
          </a>
        </nav>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-art" aria-hidden="true" />
        <div className="hero-vignette" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content page-pad">
          <p className="eyebrow"><span className="eyebrow-dot" /> Damiens&amp;Devs · 20 anos de RPG</p>
          <h1>Um mundo nosso.<br /><em>Uma mesa sem distância.</em></h1>
          <p className="hero-copy">Somos amigos que jogam juntos há mais de 20 anos. Criamos a RealmCodex para continuar jogando — e transformamos nossas campanhas em Aeldria.</p>
          <div className="hero-actions">
            <button className="button button-primary" type="button" onClick={() => scrollToId("#projetos")}>
              Explorar os mundos <ArrowDownRight size={17} />
            </button>
            <button className="text-button" type="button" onClick={() => scrollToId("#apoie")}>
              Entrar na expedição <ChevronRight size={16} />
            </button>
          </div>
        </div>
        <div className="hero-note hero-note-left">Est. 2025 · Amigos desde sempre</div>
        <div className="hero-note hero-note-right">Lat. 23° 32' S<br />Long. 46° 38' W</div>
        <div className="hero-index">01 <span>/</span> 04</div>
        <div className="scroll-cue"><span>Desça para descobrir</span><ArrowDownRight size={17} /></div>
      </section>

      <div className="ticker" aria-label="Especialidades do estúdio">
        <div className="ticker-track">
          <span>Worldbuilding</span><i>✳</i><span>Sistemas narrativos</span><i>✳</i><span>RPG de mesa</span><i>✳</i><span>Aventura</span><i>✳</i><span>Comunidade</span><i>✳</i><span>Worldbuilding</span><i>✳</i><span>Sistemas narrativos</span><i>✳</i><span>RPG de mesa</span><i>✳</i><span>Aventura</span><i>✳</i><span>Comunidade</span><i>✳</i>
        </div>
      </div>

      <section className="intro section page-pad" id="estudio">
        <div className="section-kicker"><span>01</span><span>O estúdio</span><span className="line" /></div>
        <div className="intro-layout">
          <h2>A distância nos separou.<br /><em>O jogo nos reuniu.</em></h2>
          <div className="intro-aside">
            <p>Somos a Damiens&amp;Devs: amigos, jogadores e criadores que passaram mais de duas décadas dividindo dados, mapas, risadas e batalhas. Quando a distância tornou nossos encontros mais raros, decidimos construir um lugar onde nossas mesas pudessem continuar vivas.</p>
            <a className="inline-link" href="#equipe">Conheça nossa história <ArrowUpRight size={15} /></a>
          </div>
        </div>
        <div className="rule" />
        <div className="pillar-grid">
          {pillars.map((pillar) => (
            <article className="pillar" key={pillar.number}>
              <span className="pillar-number">{pillar.number}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.copy}</p>
              <span className="pillar-arrow"><ArrowUpRight size={15} /></span>
            </article>
          ))}
        </div>
      </section>

      <section className="projects section page-pad" id="projetos">
        <div className="section-kicker"><span>02</span><span>Projetos em andamento</span><span className="line" /></div>
        <div className="projects-heading">
          <h2>Dois mundos.<br /><em>Um mesmo chamado.</em></h2>
          <p>RealmCodex é a plataforma. Aeldria é o mundo que estamos construindo dentro dela — com campanhas, suor, batalhas e espaço para muitas outras mesas.</p>
        </div>
        <div className="project-feature">
          <div className="project-feature-art" role="img" aria-label="Arte de Aeldria, um mapa celeste com astrolábio e frasco azul" />
          <div className="project-feature-overlay" />
          <div className="project-feature-content">
            <p className="project-status"><span /> Em desenvolvimento · 2026</p>
            <div>
              <p className="project-type">TTRPG · Livro-base</p>
              <h3>Aeldria</h3>
              <p className="project-description">O mundo que nasceu das nossas campanhas. Um lugar vivo, cheio de fronteiras, lendas e cicatrizes das batalhas que atravessamos juntos.</p>
              <a className="button button-light" href="#apoie">Ver o dossiê <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <span className="project-corner">A / 01</span>
        </div>
        <div className="project-secondary-grid">
          <article className="project-secondary">
            <div className="secondary-art" role="img" aria-label="Arte abstrata de um mapa e uma bússola em RealmCodex"><span className="secondary-symbol">⌁</span></div>
            <div className="secondary-body">
              <div className="secondary-top"><p className="project-type">RPG digital · Protótipo</p><span>R / 02</span></div>
              <h3>RealmCodex</h3>
              <p>A plataforma unificada de RPG de mesa e boardgames criada para aproximar jogadores, preservar nossas campanhas e aumentar a imersão — mesmo quando a vida coloca quilômetros entre nós.</p>
              <a className="inline-link" href="https://role-playingz.netlify.app/" target="_blank" rel="noreferrer">Abrir a plataforma RealmCodex <ArrowUpRight size={15} /></a>
            </div>
          </article>
          <aside className="manifesto-card">
            <Sparkles size={20} strokeWidth={1.5} />
            <p>“O melhor mapa é aquele que ainda guarda um lugar que ninguém descobriu.”</p>
            <span>— nota de processo / 014</span>
          </aside>
        </div>
      </section>

      <section className="roadmap section page-pad" id="roadmap">
        <div className="section-kicker"><span>03</span><span>Roadmap público</span><span className="line" /></div>
        <div className="roadmap-heading">
          <h2>Um passo de cada vez.<br /><em>Sem atalhos no mapa.</em></h2>
          <p>Estamos construindo com calma e em comunidade. Aqui está o caminho que começou com uma saudade e virou um universo inteiro.</p>
        </div>
        <div className="roadmap-list">
          {roadmap.map((item, index) => (
            <div className={`roadmap-item ${item.state === "agora" ? "current" : ""}`} key={item.year}>
              <div className="roadmap-year">{item.year}</div>
              <div className="roadmap-marker"><span /></div>
              <div className="roadmap-copy"><div className="roadmap-title"><h3>{item.label}</h3><span>{item.state}</span></div><p>{item.copy}</p></div>
              {index < roadmap.length - 1 && <div className="roadmap-connector" />}
            </div>
          ))}
        </div>
      </section>

      <section className="team section page-pad" id="equipe">
        <div className="section-kicker"><span>04</span><span>Quem faz</span><span className="line" /></div>
        <div className="team-layout">
          <div>
            <h2>Pequeno por escolha.<br /><em>Grande por intenção.</em></h2>
            <p className="team-lede">Somos três amigos que jogam RPG juntos há mais de 20 anos. A Damiens&amp;Devs nasceu da saudade de estar na mesma mesa e da vontade de criar um mundo nosso, com ferramentas para que outras pessoas também possam deixar suas marcas.</p>
          </div>
          <div className="team-roles team-roles-copy">
            <div className="role-row"><span>01</span><strong>Eduardo Muller</strong><small>desenvolvedor criativo · fantasia imersiva</small></div>
            <div className="role-row"><span>02</span><strong>Tiago Ramos</strong><small>desenvolvedor técnico · mesas através das eras</small></div>
            <div className="role-row"><span>03</span><strong>Herick Muller</strong><small>analista dos dados do mundo · histórias e lendas vivas</small></div>
          </div>
        </div>
        <div className="team-gallery-heading">
          <div>
            <p className="project-type">Os personagens por trás do mapa</p>
            <h3>Três jogadores.<br /><em>Uma mesma lenda.</em></h3>
          </div>
          <div className="portrait-switcher" role="group" aria-label="Escolha o estilo dos retratos">
            <button className={portraitStyle === "adventure" ? "active" : ""} type="button" onClick={() => setPortraitStyle("adventure")}>Aventura 80s</button>
            <button className={portraitStyle === "heroic" ? "active" : ""} type="button" onClick={() => setPortraitStyle("heroic")}>Heróico 80/90</button>
          </div>
        </div>
        <div className="team-gallery">
          {teamCharacters.map((character, index) => (
            <article className="character-card" key={character.name}>
              <div className="character-portrait">
                <img src={portraitStyle === "adventure" ? character.adventure : character.heroic} alt={character.alt} />
                <span className="character-index">0{index + 1}</span>
              </div>
              <div className="character-info"><h4>{character.name}</h4><p>{character.role}</p><span>{character.detail}</span></div>
            </article>
          ))}
        </div>
      </section>

      <section className="support section page-pad" id="apoie">
        <div className="support-orbit" aria-hidden="true"><Disc3 size={430} strokeWidth={0.45} /></div>
        <div className="support-content">
          <p className="eyebrow"><span className="eyebrow-dot" /> Próxima parada</p>
          <h2>Ajude a acender<br /><em>o primeiro mapa.</em></h2>
          <p>Estamos preparando nossa campanha de financiamento coletivo. Deixe seu e-mail para receber bastidores, playtests e o aviso de lançamento antes de todo mundo.</p>
          <form className="signup-form" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="email">Seu melhor e-mail</label>
            <input id="email" type="email" placeholder="seu@email.com" value={email} onChange={(event) => setEmail(event.target.value)} required />
            <button className="button button-primary" type="submit">Quero acompanhar <ArrowUpRight size={16} /></button>
          </form>
          {submitted && <p className="form-success"><Sparkles size={14} /> Você entrou para a lista. Nos vemos na próxima coordenada.</p>}
          <span className="support-fineprint">Sem spam. Só sinais de vida, mapas e novidades do estúdio.</span>
        </div>
      </section>

      <footer className="footer page-pad">
        <div className="footer-brand"><span className="brand-mark"><Compass size={19} strokeWidth={1.5} /></span><span><strong>Damiens&amp;Devs</strong><small>Amigos, RPG e mundos jogáveis</small></span></div>
        <div className="footer-meta"><span>© 2026 R/C</span><span>Feito com intenção, não com pressa.</span></div>
        <div className="footer-social"><a href="mailto:hello@realmcodex.studio" aria-label="Enviar e-mail"><Mail size={17} /></a><a href="#top" aria-label="Instagram"><Instagram size={17} /></a><a href="#top" aria-label="LinkedIn"><Linkedin size={17} /></a></div>
      </footer>
    </main>
  );
}
