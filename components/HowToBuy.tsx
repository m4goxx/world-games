'use client';

import { useEffect, useRef } from 'react';

const steps = [
  { num: '01', title: 'CONSULTE', desc: 'Fale conosco pelo WhatsApp e consulte os produtos disponíveis.' },
  { num: '02', title: 'ESCOLHA', desc: 'Encontre o produto que atende às suas necessidades.' },
  { num: '03', title: 'COMBINE', desc: 'Consulte preço, disponibilidade e condições.' },
  { num: '04', title: 'RECEBA', desc: 'Retire na loja ou combine a entrega.' },
];

export default function HowToBuy() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('[data-step]').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 120);
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
      ref={ref}
      className="py-28 px-6"
      style={{ background: 'var(--color-carbon)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <p
            className="text-xs tracking-[0.4em] uppercase mb-4"
            style={{ color: 'var(--color-silver)', fontFamily: 'var(--font-body)' }}
          >
            PROCESSO
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              textTransform: 'uppercase',
              color: 'var(--color-white)'
            }}
          >
            SIMPLES.{' '}
            <span className="text-metallic">RÁPIDO.</span>{' '}
            DIRETO.
          </h2>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:flex items-start gap-0">
          {steps.map((step, i) => (
            <div
              key={step.num}
              data-step
              className="reveal flex-1 flex flex-col gap-4 p-8 relative"
              style={{
                borderTop: '1px solid var(--color-border)'
              }}
            >
              {/* Top line accent */}
              <div
                className="absolute top-0 left-0 h-px w-0 transition-all duration-700"
                style={{ background: 'var(--color-silver)', transitionDelay: `${i * 120 + 300}ms` }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 900,
                  fontSize: '3.5rem',
                  lineHeight: 1,
                  color: 'rgba(192,192,192,0.12)'
                }}
              >
                {step.num}
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '1.3rem',
                  letterSpacing: '0.08em',
                  color: 'var(--color-white)'
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  color: 'var(--color-gray)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.88rem',
                  lineHeight: 1.7
                }}
              >
                {step.desc}
              </p>
              {i < steps.length - 1 && (
                <div
                  className="absolute top-0 right-0 h-full w-px"
                  style={{ background: 'var(--color-border)' }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Mobile: vertical */}
        <div className="flex lg:hidden flex-col">
          {steps.map((step, i) => (
            <div
              key={step.num}
              data-step
              className="reveal flex gap-6 py-8"
              style={{
                borderBottom: i < steps.length - 1 ? '1px solid var(--color-border)' : 'none'
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 900,
                  fontSize: '2.5rem',
                  lineHeight: 1,
                  color: 'rgba(192,192,192,0.15)',
                  minWidth: '60px'
                }}
              >
                {step.num}
              </span>
              <div className="flex flex-col gap-2">
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '1.2rem',
                    letterSpacing: '0.08em',
                    color: 'var(--color-white)'
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    color: 'var(--color-gray)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.88rem',
                    lineHeight: 1.7
                  }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
