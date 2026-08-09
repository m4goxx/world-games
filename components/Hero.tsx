'use client';

import { useEffect, useRef } from 'react';
import { MessageCircle, MapPin, ChevronRight } from 'lucide-react';

const WA_LINK = 'https://wa.me/5564992628827?text=Ol%C3%A1!%20Vi%20o%20site%20da%20World%20Imports%20e%20gostaria%20de%20consultar%20os%20produtos%20dispon%C3%ADveis.';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = heroRef.current?.querySelectorAll('[data-delay]');
    els?.forEach(el => {
      const delay = parseInt((el as HTMLElement).dataset.delay || '0');
      setTimeout(() => el.classList.add('visible'), delay);
    });
  }, []);

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0D0D0D 0%, #080808 60%, #111111 100%)' }}
    >
      {/* Background grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(var(--color-silver) 1px, transparent 1px), linear-gradient(90deg, var(--color-silver) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}
      />

      {/* Glow orb */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C0C0C0 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: copy */}
          <div className="flex flex-col gap-8">
            {/* Eyebrow */}
            <div
              className="reveal flex items-center gap-3"
              data-delay="100"
            >
              <span
                className="w-8 h-px"
                style={{ background: 'var(--color-silver)' }}
              />
              <span
                className="text-xs tracking-[0.4em] uppercase"
                style={{ color: 'var(--color-silver)', fontFamily: 'var(--font-body)' }}
              >
                TECNOLOGIA • CELULARES • GAMES
              </span>
            </div>

            {/* Title */}
            <h1
              className="reveal"
              data-delay="200"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                lineHeight: 1.0,
                letterSpacing: '-0.01em',
                textTransform: 'uppercase',
                color: 'var(--color-white)'
              }}
            >
              TECNOLOGIA{' '}
              <span className="text-metallic">QUE VOCÊ</span>{' '}
              QUER.<br />
              ATENDIMENTO{' '}
              <span className="text-metallic">QUE VOCÊ</span>{' '}
              CONFIA.
            </h1>

            {/* Subtitle */}
            <p
              className="reveal max-w-lg"
              data-delay="350"
              style={{
                color: 'var(--color-gray)',
                fontFamily: 'var(--font-body)',
                fontSize: '1.05rem',
                lineHeight: 1.75
              }}
            >
              Celulares, games e tecnologia em um só lugar. Consulte nossos
              produtos e encontre a opção ideal para você.
            </p>

            {/* Buttons */}
            <div className="reveal flex flex-col sm:flex-row gap-4" data-delay="480">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="metallic-hover flex items-center justify-center gap-2.5 px-8 py-4 text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, #C0C0C0 0%, #F0F0F0 50%, #A0A0A0 100%)',
                  color: '#080808',
                  fontFamily: 'var(--font-body)',
                  letterSpacing: '0.12em'
                }}
              >
                <MessageCircle size={15} />
                Consultar Produtos
              </a>
              <a
                href="#localizacao"
                className="flex items-center justify-center gap-2.5 px-8 py-4 text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-white)',
                  fontFamily: 'var(--font-body)',
                  letterSpacing: '0.12em'
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--color-gray)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
              >
                <MapPin size={15} />
                Conhecer a Loja
              </a>
            </div>

            {/* Social proof */}
            <div
              className="reveal flex items-center gap-4"
              data-delay="600"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: '#C0C0C0', fontSize: '0.9rem' }}>★</span>
                ))}
              </div>
              <div style={{ fontFamily: 'var(--font-body)' }}>
                <span style={{ color: 'var(--color-white)', fontWeight: 600, fontSize: '0.9rem' }}>5,0</span>
                <span style={{ color: 'var(--color-gray)', fontSize: '0.8rem', marginLeft: '6px' }}>· 6 avaliações no Google</span>
              </div>
            </div>
          </div>

          {/* Right: visual composition */}
          <div className="reveal hidden lg:flex flex-col items-center gap-6" data-delay="300">
            {/* Tech visual grid */}
            <div className="relative w-full max-w-md">
              {/* Main card */}
              <div
                className="w-full aspect-[4/5] rounded-sm relative overflow-hidden"
                style={{
                  background: 'linear-gradient(145deg, #1C1C1C 0%, #111111 100%)',
                  border: '1px solid var(--color-border)'
                }}
              >
                {/* Inner glow */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{ background: 'radial-gradient(ellipse at 50% 20%, #C0C0C0 0%, transparent 60%)' }}
                />
                {/* Smartphone silhouette */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="relative"
                    style={{
                      width: '140px',
                      height: '280px',
                      borderRadius: '20px',
                      border: '2px solid rgba(192,192,192,0.3)',
                      background: 'linear-gradient(160deg, rgba(192,192,192,0.08) 0%, rgba(192,192,192,0.02) 100%)',
                      boxShadow: '0 0 60px rgba(192,192,192,0.08), inset 0 1px 0 rgba(255,255,255,0.1)'
                    }}
                  >
                    {/* Screen */}
                    <div
                      className="absolute inset-2 rounded-2xl"
                      style={{
                        background: 'linear-gradient(160deg, #1a1a1a 0%, #0D0D0D 100%)',
                        boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)'
                      }}
                    >
                      <div
                        className="absolute inset-0 opacity-30"
                        style={{ background: 'linear-gradient(180deg, rgba(192,192,192,0.15) 0%, transparent 30%)' }}
                      />
                    </div>
                    {/* Camera */}
                    <div
                      className="absolute top-3 left-1/2 -translate-x-1/2 w-8 h-1.5 rounded-full"
                      style={{ background: 'rgba(192,192,192,0.2)' }}
                    />
                  </div>
                </div>
                {/* Corner decoration */}
                <div
                  className="absolute top-4 right-4 text-xs tracking-widest uppercase"
                  style={{ color: 'rgba(192,192,192,0.3)', fontFamily: 'var(--font-body)', fontSize: '0.6rem' }}
                >
                  PREMIUM TECH
                </div>
                <div
                  className="absolute bottom-4 left-4 text-xs"
                  style={{ color: 'rgba(192,192,192,0.3)', fontFamily: 'var(--font-body)', fontSize: '0.6rem', letterSpacing: '0.2em' }}
                >
                  WORLD IMPORTS
                </div>
              </div>

              {/* Floating cards */}
              <div
                className="absolute -right-6 top-1/4 px-4 py-3 text-xs"
                style={{
                  background: 'rgba(28,28,28,0.95)',
                  border: '1px solid var(--color-border)',
                  backdropFilter: 'blur(8px)',
                  fontFamily: 'var(--font-body)'
                }}
              >
                <div style={{ color: 'var(--color-silver)', fontSize: '0.65rem', letterSpacing: '0.2em' }}>CELULARES</div>
                <div style={{ color: 'var(--color-white)', fontWeight: 600, fontSize: '0.8rem', marginTop: '2px' }}>Top Models</div>
              </div>

              <div
                className="absolute -left-6 bottom-1/4 px-4 py-3 text-xs"
                style={{
                  background: 'rgba(28,28,28,0.95)',
                  border: '1px solid var(--color-border)',
                  backdropFilter: 'blur(8px)',
                  fontFamily: 'var(--font-body)'
                }}
              >
                <div style={{ color: 'var(--color-silver)', fontSize: '0.65rem', letterSpacing: '0.2em' }}>GAMES</div>
                <div style={{ color: 'var(--color-white)', fontWeight: 600, fontSize: '0.8rem', marginTop: '2px' }}>& Acessórios</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--color-black))' }}
      />
    </section>
  );
}
