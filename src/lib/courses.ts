import coverRetorno from "@/assets/cover-retorno-memoravel.jpg";
import coverChave from "@/assets/cover-chave-industria.jpg";
import cover10x from "@/assets/cover-impacta-10x.jpg";
import coverJogo from "@/assets/cover-jogo-real.jpg";
import coverInabalavel from "@/assets/cover-inabalavel.jpg";

export type Lesson = {
  t: string;
  d?: string;
  s: "done" | "current" | "locked";
};

export type Module = {
  title: string;
  lessons: Lesson[];
};

export type Course = {
  id: string;
  title: string;
  subtitle?: string;
  type: "Curso" | "Palestra" | "Mentoria" | "Evento";
  price: string;
  tag?: string;
  cover: { from: string; via?: string; to: string; label: string; image?: string };
  modules: Module[];
  progress?: number;
};

const navy = "oklch(0.16 0.05 265)";
const royal = "oklch(0.32 0.14 295)";
const purple = "oklch(0.42 0.16 295)";
const gold = "oklch(0.78 0.13 82)";
const teal = "oklch(0.55 0.14 220)";

export const courses: Course[] = [
  {
    id: "retorno-memoravel",
    title: "Retorno Memorável",
    subtitle: "O Core · Identidade + Algoritmo de Recolocação",
    type: "Curso",
    price: "R$ 3.000",
    tag: "Curso Core",
    cover: { from: navy, via: royal, to: gold, label: "RM", image: coverRetorno },
    progress: 0,
    modules: [
      {
        title: "Módulo 01 · A Reprogramação e o Hacking (Identidade + Algoritmo)",
        lessons: [
          { t: "Boas-vindas", d: "Comece por aqui", s: "current" },
          { t: "Aula 1.1 · A verdade nua e crua", d: "O fim do luto", s: "locked" },
          { t: "Prática · Aula 01", d: "O ritual do adeus", s: "locked" },
          { t: "Aula 1.2 · A Ciência da Confiança", d: 'Por que o "coitadinho" nunca é contratado', s: "locked" },
          { t: "Aula 1.3 · O Detox do Ambiente", d: "Blindagem mental", s: "locked" },
          { t: 'Aula 1.4 · Método "CEO de Si Mesmo"', d: "A rotina do sucesso", s: "locked" },
          { t: "Aula 1.5 · Resignificando o gap", d: "A narrativa do herói", s: "locked" },
          { t: "Aula 1.6 · O Alvo Estratégico", d: "Primary Care vs Oncologia", s: "locked" },
          { t: "Aula 1.7 · Atualização Tecnológica", d: "Obrigatória — o chão de fábrica", s: "locked" },
          { t: "Aula 1.8 · Auditoria de Competências", d: "Individual", s: "locked" },
        ],
      },
      {
        title: "Módulo 02 · Como Vender o Seu Peixe",
        lessons: [
          { t: 'Aula 2.1 · O fim do "QI de campo"', d: "Vencendo o inimigo invisível: Robô/ATS", s: "locked" },
          { t: "Aula 2.2 · O paradoxo do vendedor", d: "Vende produtos complexos, mas não sabe se vender", s: "locked" },
          { t: "Aula 2.3 · Você S.A. vs. o sobrenome da empresa", d: "Análise fria da sua vitrine digital", s: "locked" },
          { t: "Aula 2.4 · Vencendo o preconceito 50+", d: "Como provar o ROI da senioridade", s: "locked" },
          { t: "Aula 2.5 · O currículo que o robô entende", d: "Engenharia das palavras-chave e CHA", s: "locked" },
          { t: "Aula 2.6 · LinkedIn & Re-Branding total", s: "locked" },
          { t: "Aula 2.7 · Resumo e preparatório", d: "Checklist da vitrine blindada", s: "locked" },
          { t: "Aula 2.8 · Estratégia de Networking 3.0", s: "locked" },
          { t: "Bônus · LinkedIn Memorável", s: "locked" },
          { t: "Bônus · Networking no LinkedIn", s: "locked" },
        ],
      },
      {
        title: "Módulo 03 · Engenharia Social e Oportunidades (A Caça Estratégica)",
        lessons: [
          { t: 'Aula 3.1 · A ilusão da "vaga perfeita"', d: "Intro do módulo", s: "locked" },
          { t: "Aula 3.2 · O garimpo de ouro", d: "Dominando as plataformas", s: "locked" },
          { t: "Aula 3.3 · O jogo híbrido", d: "Online vs. Offline", s: "locked" },
          { t: "Aula 3.4 · O investimento certo", d: "Mentor, curso ou carreira solo?", s: "locked" },
          { t: "Aula 3.5 · Seu estagiário de luxo", d: "Aceleração com IA", s: "locked" },
          { t: "Aula 3.6 · Matriz de decisão", d: "CLT vs. RJ — o dilema atual", s: "locked" },
          { t: "Aula 3.7 · O networking elegante", d: 'Sem ser o "pidão"', s: "locked" },
          { t: "Aula 3.8 · Scripts de abordagem", d: "Copiar e colar com inteligência", s: "locked" },
          { t: "Aula 3.9 · Resumo e preparatório", d: "Sua agenda de ataque", s: "locked" },
          { t: "Aula 3.10 · Entrevistas — perguntas e respostas", s: "locked" },
          { t: "Aula 3.11 · Entrevista x Negociação de vaga", s: "locked" },
          { t: "Aula 3.12 · Engenharia de Negociação", s: "locked" },
        ],
      },
    ],
  },
  {
    id: "chave-industria",
    title: "A Chave da Indústria",
    subtitle: "O mapa rápido do setor farmacêutico",
    type: "Curso",
    price: "R$ 997",
    tag: "Curso",
    cover: { from: navy, via: teal, to: purple, label: "KF" },
    modules: [
      {
        title: "Comece por Aqui",
        lessons: [
          { t: "Boas-vindas", s: "locked" },
          { t: "Explicando o conteúdo do curso", s: "locked" },
          { t: "Como aproveitar ao máximo este curso", s: "locked" },
        ],
      },
      {
        title: "Módulo 01 · O Despertar da Mentalidade Pharma",
        lessons: [
          { t: "1.1 · O ecossistema invisível", d: "Além da propaganda", s: "locked" },
          { t: "1.2 · A anatomia da vaga de elite", d: "O que o RH não escreve", s: "locked" },
          { t: "1.3 · Postura executiva", d: 'Mindset do representante 360°', s: "locked" },
          { t: "1.4 · Auditoria de carreira e o código ATS", s: "locked" },
        ],
      },
      {
        title: "Módulo 02 · Identidade de Elite e Inteligência de Mercado",
        lessons: [
          { t: "2.1 · O dialeto de campo", d: "Imersão técnica", s: "locked" },
          { t: "2.2 · Branding magnético", d: "CV e LinkedIn blindados", s: "locked" },
          { t: "2.3 · Inteligência de mercado e mapeamento", s: "locked" },
          { t: "2.4 · O dia a dia real", d: "Job description na prática", s: "locked" },
        ],
      },
      {
        title: "Módulo 03 · Campo de Batalha — Da Entrevista à Contratação",
        lessons: [
          { t: "3.1 · A engenharia da entrevista", d: "HR, GD e Direção", s: "locked" },
          { t: "3.2 · Business Case e simulação de propaganda médica", s: "locked" },
          { t: "3.3 · LinkedIn estratégico", d: "O ímã de vagas", s: "locked" },
          { t: "3.4 · Curadoria e escolha", d: "Onde jogar sua energia", s: "locked" },
          { t: "3.5 · Entrevista com RH", d: "O crivo comportamental", s: "locked" },
          { t: "3.6 · Entrevista com o Gestor (GD/GR)", d: "A prova de fogo", s: "locked" },
          { t: "3.7 · O Business Case e o teste de propaganda", s: "locked" },
        ],
      },
    ],
  },
  {
    id: "impacta-10x",
    title: "IMPACTA 10X",
    subtitle: "Desvende o método. Multiplique o sucesso.",
    type: "Curso",
    price: "R$ 499",
    tag: "Programa",
    cover: { from: "oklch(0.18 0.08 270)", via: royal, to: "oklch(0.22 0.1 275)", label: "10X" },
    modules: [
      {
        title: "Módulo 01 · O DNA da Carreira Estratégica",
        lessons: [
          { t: "Vídeo introdutório", s: "locked" },
          { t: "1.1 · O protagonista do futuro", s: "locked" },
          { t: "1.2 · A regra de ouro — o segredo da elite", s: "locked" },
          { t: "1.3 · Quem vende você? Perfil estratégico", s: "locked" },
          { t: "1.4 · A bússola — mapeando seu destino", s: "locked" },
          { t: "1.5 · Blindagem do DNA — autoconhecimento e resiliência", s: "locked" },
        ],
      },
      {
        title: "Módulo 02 · Construindo Seu Império Digital",
        lessons: [
          { t: "2.1 · O palco do século XXI — presença digital", s: "locked" },
          { t: "2.2 · Branding profissional — sua marca, seu legado", s: "locked" },
          { t: "2.3 · A proposta de valor irrecusável (PUV)", s: "locked" },
          { t: "2.4 · LinkedIn magnético — vitrine de oportunidades", s: "locked" },
          { t: "2.5 · O mentor inteligente (IA) e o conteúdo 10X", s: "locked" },
          { t: "2.6 · Teia de poder — networking estratégico", s: "locked" },
        ],
      },
      {
        title: "Módulo 03 · Alavancando Influência e Liderança",
        lessons: [
          { t: "3.1 · Teia de poder — networking estratégico (teoria e ação)", s: "locked" },
          { t: "3.2 · A arte de encantar — comunicação de alto impacto", s: "locked" },
          { t: "3.3 · Lições dos deuses — Jobs, Bezos, Winfrey", s: "locked" },
          { t: "3.4 · O ápice da influência — negociação e política corporativa", s: "locked" },
          { t: "3.5 · A escalada — liderança real e posicionamento para promoção", s: "locked" },
        ],
      },
      {
        title: "Módulo 04 · O Profissional 4.0 — Vendas e IA",
        lessons: [
          { t: "4.1 · O mestre dos mestres — planejamento avançado e PDI", s: "locked" },
          { t: "4.2 · O poder do foco — produtividade imbatível", s: "locked" },
          { t: "4.3 · A mente do vencedor e sua oferta única", s: "locked" },
          { t: "4.4 · Diga fim ao interrogatório — storytelling e condução", s: "locked" },
          { t: "4.5 · O segredo do fechamento — evidenciação e follow-up", s: "locked" },
          { t: "4.6 · O maestro da produtividade — otimização com IA", s: "locked" },
          { t: "4.7 · Guerra Fria 4.0 — IA na venda consultiva", s: "locked" },
        ],
      },
      {
        title: "Módulo 05 · Multiplicando Seu Legado",
        lessons: [
          { t: "5.1 · A caça aos tesouros — reconhecimento e autoridade", s: "locked" },
          { t: "5.2 · O oráculo — mentoria, consultoria e empacotamento", s: "locked" },
          { t: "5.3 · O labirinto — protocolo de crise e armadilhas", s: "locked" },
          { t: "5.4 · O gerador de oportunidades — alavancagem contínua", s: "locked" },
          { t: "5.5 · O tesouro oculto — patrimônio e liberdade financeira", s: "locked" },
          { t: "5.6 · O encerramento do ciclo — preparação para o assessment", s: "locked" },
        ],
      },
    ],
  },
  {
    id: "jogo-real",
    title: "Aqui é Onde o Jogo Real Começa",
    subtitle: "Aula aberta · porta de entrada da Irmandade",
    type: "Curso",
    price: "Gratuito",
    tag: "Gratuito",
    cover: { from: navy, via: purple, to: gold, label: "JR" },
    modules: [
      {
        title: "Conteúdo",
        lessons: [
          { t: "1 · O Pacto Secreto", d: "Por que a história que te contaram é mentira", s: "current" },
          { t: "2 · O Ecossistema Pharma", d: "A arquitetura do profissional insubstituível", s: "locked" },
          { t: "3 · O Arsenal", d: "Inteligência privilegiada e execução de elite", s: "locked" },
        ],
      },
    ],
  },
  {
    id: "inabalavel",
    title: "Inabalável: A Ciência do Valor Inegociável",
    subtitle: "Palestra · evento online gratuito",
    type: "Palestra",
    price: "Gratuito",
    tag: "Ao vivo",
    cover: { from: "oklch(0.2 0.06 268)", to: "oklch(0.4 0.12 285)", label: "VI" },
    modules: [
      {
        title: "Palestra",
        lessons: [
          { t: "Sessão única · 90 minutos", d: "Online, ao vivo", s: "locked" },
        ],
      },
    ],
  },
];

export const getCourse = (id: string) => courses.find((c) => c.id === id);
