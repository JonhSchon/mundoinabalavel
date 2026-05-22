import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-sm bg-gold-gradient grid place-items-center font-display text-primary font-bold">
            S
          </div>
          <div className="leading-tight">
            <div className="font-display text-base text-background tracking-wide">Schonhardt</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-gold/80">Instituto de Negócios</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-background/80">
          <a href="#ecossistema" className="hover:text-gold transition-colors">Ecossistema</a>
          <a href="#mentoria" className="hover:text-gold transition-colors">Mentoria</a>
          <a href="#metodo" className="hover:text-gold transition-colors">Método</a>
          <a href="#contato" className="hover:text-gold transition-colors">Contato</a>
        </nav>
        <Link
          to="/app"
          className="inline-flex items-center gap-2 rounded-sm border border-gold/40 bg-gold/10 px-5 py-2.5 text-sm text-gold hover:bg-gold hover:text-primary transition-colors"
        >
          Área do mentorado
        </Link>
      </div>
    </header>
  );
}
