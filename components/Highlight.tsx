'use client';

import { useEffect, useRef } from 'react';
import { MessageCircle } from 'lucide-react';

const WA_LINK = 'https://wa.me/5564992628827?text=Ol%C3%A1!%20Vi%20o%20site%20da%20World%20Imports%20e%20gostaria%20de%20falar%20com%20um%20especialista.';

export default function Highlight() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 150);
          });
          observer.unobserve(e.target);
        }
      }),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="destaque"
      ref={ref}
      className="py-28 px-6 overflow-hidden"
      style={{ background: 'var(--color-black)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: visual */}
          <div className="reveal relative">
            <div
              className="w-full aspect-square max-w-lg mx-auto relative"
              style={{
                background: 'linear-gradient(145deg, #1C1C1C 0%, #111111 100%)',
                border: '1px solid var(--color-border)'
              }}
            >
              {/* Glow */}
              <div
                className="absolute inset-0 opacity-10"
                style={{ background: 'radial-gradient(ellipse at 30% 30%, #C0C0C0, transparent 60%)' }}
              />
              {/* Abstract tech shapes */}
              <div className="absolute inset-8 flex flex-col gap-4 justify-center">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      height: '1px',
                      background: `linear-gradient(90deg, transparent, rgba(192,192,192,${0.05 + i * 0.04}), transparent)`,
                      width: `${60 + i * 8}%`
                    }}
                  />
                ))}
                <div className="flex items-center gap-4 mt-4">
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      border: '1px solid rgba(192,192,192,0.2)',
                      borderRadius: '2px',
                      background: 'rgba(192,192,192,0.04)'
                    }}
                  />
                  <div className="flex flex-col gap-2">
                    <div style={{ width: '120px', height: '1px', background: 'rgba(192,192,192,0.15)' }} />
                    <div style={{ width: '80px', height: '1px', background: 'rgba(192,192,192,0.08)' }} />
                  </div>
                </div>
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      height: '1px',
                      background: `linear-gradient(90deg, transparent, rgba(192,192,192,${0.08 - i * 0.02}), transparent)`,
                      width: `${80 - i * 15}%`
                    }}
                  />
                ))}
              </div>
              {/* Label */}
              <div
                className="absolute bottom-4 right-4 text-xs tracking-widest"
                style={{ color: 'rgba(192,192,192,0.25)', fontFamily: 'var(--font-body)', fontSize: '0.6rem' }}
              >
                WORLD IMPORTS — CATALÃO GO
              </div>
            </div>
          </div>

          {/* Right: copy */}
          <div className="flex flex-col gap-8">
            <p
              className="reveal text-xs tracking-[0.4em] uppercase"
              style={{ color: 'var(--color-silver)', fontFamily: 'var(--font-body)' }}
            >
              SOBRE NÓS
            </p>

            <h2
              className="reveal"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                textTransform: 'uppercase',
                lineHeight: 1.05,
                color: 'var(--color-white)'
              }}
            >
              SEU PRÓXIMO{' '}
              <span className="text-metallic">DISPOSITIVO</span>{' '}
              COMEÇA AQUI.
            </h2>

            <p
              className="reveal max-w-lg"
              style={{
                color: 'var(--color-gray)',
                fontFamily: 'var(--font-body)',
                lineHeight: 1.8,
                fontSize: '1rem'
              }}
            >
              Na World Imports, você encontra uma experiência de compra focada
              em atendimento, praticidade e tecnologia. Venha nos visitar em
              Catalão e descubra o produto ideal para você.
            </p>

            <div className="reveal">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="metallic-hover inline-flex items-center gap-2.5 px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  border: '1px solid var(--color-silver)',
                  color: 'var(--color-white)',
                  fontFamily: 'var(--font-body)',
                  letterSpacing: '0.12em'
                }}
              >
                <MessageCircle size={15} />
                Falar com um Especialista
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
