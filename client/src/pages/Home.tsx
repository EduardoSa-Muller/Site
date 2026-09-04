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
  MoveUpRight,
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
    title: "Mundos com memória",
    copy: "Cada reino carrega cicatrizes, rumores e escolhas que continuam existindo depois da sessão.",
  },
  {
    number: "02",
    title: "Sistemas que convidam",
    copy: "Regras que dão espaço para estratégia, improviso e aquela ideia inesperada da sua mesa.",
  },
  {
    number: "03",
    title: "Feito em conversa",
    copy: "Construímos em público: ouvindo quem joga, testando cedo e deixando a comunidade entrar no mapa.",
  },
];

const roadmap = [
  { year: "2025", label: "Fundação", copy: "Conceito, identidade e primeiros fragmentos de mundo.", state: "feito" },
  { year: "2026", label: "Primeira expedição", copy: "Protótipo jogável de RealmCodex e playtests abertos.", state: "agora" },
  { year: "2027", label: "Aeldria ganha forma", copy: "Campanha de financiamento e publicação do primeiro livro-base.", state: "próximo" },
  { year: "2028", label: "Mais longe do mapa", copy: "Expansões, colaborações e novas formas de jogar nossos mundos.", state: "depois" },
];

function scrollToId(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  }

  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="RealmCodex & Aeldria — início">
          <span className="brand-mark"><Compass size={20} strokeWidth={1.5} /></span>
          <span className="brand-lockup">
            <strong>R/C</strong>
            <span>RealmCodex · Aeldria</span>
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
          <p className="eyebrow"><span className="eyebrow-dot" /> Estúdio indie de mundos jogáveis</p>
          <h1>Histórias para<br /><em>deixar marca.</em></h1>
          <p className="hero-copy">Criamos jogos e experiências de RPG onde cada escolha redesenha o mapa — na mesa, na tela e na memória.</p>
          <div className="hero-actions">
            <button className="button button-primary" type="button" onClick={() => scrollToId("#projetos")}>
              Explorar os mundos <ArrowDownRight size={17} />
            </button>
            <button className="text-button" type="button" onClick={() => scrollToId("#apoie")}>
              Entrar na expedição <ChevronRight size={16} />
            </button>
          </div>
        </div>
        <div className="hero-note hero-note-left">Est. 2025 · Brasil</div>
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
          <h2>Não fazemos só jogos.<br /><em>Fazemos lugares para voltar.</em></h2>
          <div className="intro-aside">
            <p>RealmCodex & Aeldria é um estúdio pequeno, independente e obcecado por mundos que parecem maiores do que a página. Criamos experiências autorais para quem gosta de olhar duas vezes — e encontrar uma nova história.</p>
            <a className="inline-link" href="#equipe">Conheça quem está construindo <ArrowUpRight size={15} /></a>
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
          <p>Projetos diferentes em forma, unidos pela vontade de colocar decisões difíceis nas mãos de quem joga.</p>
        </div>
        <div className="project-feature">
          <div className="project-feature-art" role="img" aria-label="Arte de Aeldria, um mapa celeste com astrolábio e frasco azul" />
          <div className="project-feature-overlay" />
          <div className="project-feature-content">
            <p className="project-status"><span /> Em desenvolvimento · 2026</p>
            <div>
              <p className="project-type">TTRPG · Livro-base</p>
              <h3>Aeldria</h3>
              <p className="project-description">Um mundo de fronteiras móveis, onde cartógrafos, órfãos das estrelas e cidades que esquecem lutam para decidir o que merece ser lembrado.</p>
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
              <p>Uma ferramenta narrativa para transformar anotações soltas em aventuras vivas, prontas para atravessar a mesa.</p>
              <button className="inline-link" type="button" onClick={() => scrollToId("#roadmap")}>Acompanhar o desenvolvimento <ArrowUpRight size={15} /></button>
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
          <p>Transparência faz parte do design. Aqui está o que já atravessamos — e para onde estamos indo agora.</p>
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
            <p className="team-lede">Somos um núcleo criativo independente que mistura design de jogos, escrita e direção de arte para construir mundos com personalidade — e espaço para outras pessoas brilharem dentro deles.</p>
          </div>
          <div className="team-roles">
            <div className="role-row"><span>01</span><strong>Direção criativa</strong><small>visão · ritmo · tom</small></div>
            <div className="role-row"><span>02</span><strong>Design & sistemas</strong><small>regras · protótipos · playtest</small></div>
            <div className="role-row"><span>03</span><strong>Arte & mundos</strong><small>imagem · texto · atmosfera</small></div>
            <div className="role-row"><span>04</span><strong>Comunidade</strong><small>escuta · acesso · conversa</small></div>
          </div>
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
        <div className="footer-brand"><span className="brand-mark"><Compass size={19} strokeWidth={1.5} /></span><span><strong>RealmCodex & Aeldria</strong><small>Estúdio indie de mundos jogáveis</small></span></div>
        <div className="footer-meta"><span>© 2026 R/C</span><span>Feito com intenção, não com pressa.</span></div>
        <div className="footer-social"><a href="mailto:hello@realmcodex.studio" aria-label="Enviar e-mail"><Mail size={17} /></a><a href="#top" aria-label="Instagram"><Instagram size={17} /></a><a href="#top" aria-label="LinkedIn"><Linkedin size={17} /></a></div>
      </footer>
    </main>
  );
}

export { MoveUpRight };

// Keep the visual language icon-led without introducing another component dependency.
void MoveUpRight;
