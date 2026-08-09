'use client';

import { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const GOOGLE_URL = 'https://www.google.com/search?q=World+Imports+Celulares+e+Games+Catal%C3%A3o';

const reviews = [
  { text: 'Ótimos profissionais e ótimos preços!', initials: 'C' },
  { text: 'Ótimo atendimento', initials: 'A' },
];

export default function Testimonials() {
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
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="avaliacoes"
      ref={ref}
      className="py-28 px-6"
      style={{ background: 'var(--color-black)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p
            className="reveal text-xs tracking-[0.4em] uppercase mb-4"
            style={{ color: 'var(--color-silver)', fontFamily: 'var(--font-body)' }}
          >
            AVALIAÇÕES
          </p>
          <h2
            className="reveal"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              textTransform: 'uppercase',
              color: 'var(--color-white)'
            }}
          >
            QUEM COMPRA,{' '}
            <span className="text-metallic">RECOMENDA.</span>
          </h2>

          {/* Score */}
          <div className="reveal flex flex-col items-center gap-2 mt-10">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: 'var(--color-silver)', fontSize: '1.6rem' }}>★</span>
              ))}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: '4rem',
                lineHeight: 1,
                color: 'var(--color-white)'
              }}
            >
              5,0
            </div>
            <p
              style={{
                color: 'var(--color-gray)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                letterSpacing: '0.1em'
              }}
            >
              6 avaliações no Google
            </p>
          </div>
        </div>

        {/* Review cards */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto mb-12">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="reveal flex-1 flex flex-col gap-4 p-8"
              style={{
                background: 'var(--color-graphite)',
                border: '1px solid var(--color-border)'
              }}
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <span key={j} style={{ color: 'var(--color-silver)', fontSize: '0.8rem' }}>★</span>
                ))}
              </div>
              <p
                style={{
                  color: 'var(--color-white)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  fontStyle: 'italic'
                }}
              >
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold"
                  style={{
                    background: 'linear-gradient(135deg, #2A2A2A, #1C1C1C)',
                    border: '1px solid var(--color-border)',
                    color: 'var(--color-silver)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  {r.initials}
                </div>
                <span
                  style={{
                    color: 'var(--color-gray)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.1em'
                  }}
                >
                  Cliente verificado
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal text-center">
          <a
            href={GOOGLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs tracking-widest uppercase transition-all duration-300 hover:-translate-y-0.5"
            style={{
              border: '1px solid var(--color-border)',
              color: 'var(--color-gray)',
              fontFamily: 'var(--font-body)',
              letterSpacing: '0.12em'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--color-silver)';
              e.currentTarget.style.color = 'var(--color-white)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--color-border)';
              e.currentTarget.style.color = 'var(--color-gray)';
            }}
          >
            <ExternalLink size={12} />
            Ver no Google
          </a>
        </div>
      </div>
    </section>
  );
}
