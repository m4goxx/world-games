'use client';

import { useEffect, useRef } from 'react';
import { Star, TrendingDown, Store, Truck } from 'lucide-react';

const benefits = [
  {
    num: '01',
    icon: Star,
    title: 'ATENDIMENTO DE QUALIDADE',
    desc: 'Atendimento focado em ajudar você a encontrar o produto certo.',
  },
  {
    num: '02',
    icon: TrendingDown,
    title: 'PREÇOS COMPETITIVOS',
    desc: 'Consulte nossas opções e encontre a melhor alternativa para você.',
  },
  {
    num: '03',
    icon: Store,
    title: 'COMPRA PRESENCIAL',
    desc: 'Visite nossa loja em Catalão e veja os produtos pessoalmente.',
  },
  {
    num: '04',
    icon: Truck,
    title: 'ENTREGA E RETIRADA',
    desc: 'Escolha a forma mais conveniente para receber sua compra.',
  },
];

export default function Benefits() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('[data-b]').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 100);
          });
          observer.unobserve(e.target);
        }
      }),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-28 px-6"
      style={{ background: 'var(--color-graphite)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <p
            className="text-xs tracking-[0.4em] uppercase mb-4"
            style={{ color: 'var(--color-silver)', fontFamily: 'var(--font-body)' }}
          >
            DIFERENCIAIS
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
            POR QUE{' '}
            <span className="text-metallic">WORLD IMPORTS?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'var(--color-border)' }}>
          {benefits.map(b => {
            const Icon = b.icon;
            return (
              <div
                key={b.num}
                data-b
                className="reveal flex flex-col gap-5 p-8"
                style={{ background: 'var(--color-graphite)' }}
              >
                <div className="flex items-start justify-between">
                  <div
                    className="p-3"
                    style={{
                      border: '1px solid var(--color-border)',
                      background: 'rgba(192,192,192,0.04)'
                    }}
                  >
                    <Icon size={20} style={{ color: 'var(--color-silver)' }} />
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 900,
                      fontSize: '3rem',
                      lineHeight: 1,
                      color: 'rgba(192,192,192,0.08)'
                    }}
                  >
                    {b.num}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    letterSpacing: '0.05em',
                    color: 'var(--color-white)',
                    lineHeight: 1.2
                  }}
                >
                  {b.title}
                </h3>
                <p
                  style={{
                    color: 'var(--color-gray)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.88rem',
                    lineHeight: 1.7
                  }}
                >
                  {b.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
