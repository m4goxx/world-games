'use client';

import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

const WA_LINK = 'https://wa.me/5564992628827?text=Ol%C3%A1!%20Vi%20o%20site%20da%20World%20Imports%20e%20gostaria%20de%20consultar%20os%20produtos%20dispon%C3%ADveis.';

const links = [
  { label: 'Início',      href: '#inicio' },
  { label: 'Celulares',   href: '#categorias' },
  { label: 'Games',       href: '#categorias' },
  { label: 'Sobre',       href: '#destaque' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato',     href: '#contato' },
];

export default function Header() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 bg-black/80 backdrop-blur-md border-b border-white/5'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex flex-col leading-none group">
          <span
            className="font-display font-900 text-xl tracking-widest uppercase text-white group-hover:text-metallic transition-all duration-300"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 900, letterSpacing: '0.2em' }}
          >
            WORLD IMPORTS
          </span>
          <span
            className="text-xs tracking-[0.35em] uppercase"
            style={{ color: 'var(--color-gray)', fontFamily: 'var(--font-body)', letterSpacing: '0.35em' }}
          >
            CELULARES &amp; GAMES
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm tracking-widest uppercase transition-colors duration-200"
              style={{ color: 'var(--color-gray)', fontFamily: 'var(--font-body)', letterSpacing: '0.12em' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-white)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-gray)')}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-4">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 text-xs tracking-widest uppercase metallic-hover transition-all duration-300"
            style={{
              border: '1px solid var(--color-silver)',
              color: 'var(--color-white)',
              fontFamily: 'var(--font-body)',
              letterSpacing: '0.12em',
              background: 'linear-gradient(135deg, rgba(192,192,192,0.08) 0%, rgba(192,192,192,0.02) 100%)'
            }}
          >
            <MessageCircle size={14} />
            Falar no WhatsApp
          </a>

          <button
            className="lg:hidden p-2"
            style={{ color: 'var(--color-white)' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ background: 'rgba(8,8,8,0.97)', backdropFilter: 'blur(16px)' }}
      >
        <nav className="px-6 py-6 flex flex-col gap-5">
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-widest uppercase"
              style={{ color: 'var(--color-gray)', fontFamily: 'var(--font-body)' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-3 text-xs tracking-widest uppercase mt-2"
            style={{
              border: '1px solid var(--color-silver)',
              color: 'var(--color-white)',
              fontFamily: 'var(--font-body)'
            }}
          >
            <MessageCircle size={14} />
            Falar no WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
