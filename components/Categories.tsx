'use client';

import { useEffect, useRef } from 'react';
import { ArrowRight, Smartphone, Gamepad2, Headphones, Cpu } from 'lucide-react';

const WA_LINK = 'https://wa.me/5564992628827?text=Ol%C3%A1!%20Vi%20o%20site%20da%20World%20Imports%20e%20gostaria%20de%20consultar%20os%20produtos%20dispon%C3%ADveis.';

const categories = [
  {
    num: '01',
    icon: Smartphone,
    title: 'CELULARES',
    desc: 'Consulte modelos e disponibilidade.',
  },
  {
    num: '02',
    icon: Gamepad2,
    title: 'GAMES',
    desc: 'Produtos para quem leva diversão a sério.',
  },
  {
    num: '03',
    icon: Headphones,
    title: 'ACESSÓRIOS',
    desc: 'Complementos para sua experiência.',
  },
  {
    num: '04',
    icon: Cpu,
    title: 'TECNOLOGIA',
    desc: 'Soluções e produtos para o seu dia a dia.',
  },
];

export default function Categories() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          const cards = e.target.querySelectorAll('[data-card]');
          cards.forEach((card, i) => {
            setTimeout(() => card.classList.add('visible'), i * 120);
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
      id="categorias"
      ref={ref}
      className="py-28 px-6"
      style={{ background: 'var(--color-carbon)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p
            className="text-xs tracking-[0.4em] uppercase mb-4"
            style={{ color: 'var(--color-silver)', fontFamily: 'var(--font-body)' }}
          >
            CATEGORIAS
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              textTransform: 'uppercase',
              lineHeight: 1.05,
              color: 'var(--color-white)'
            }}
          >
            ENCONTRE O QUE
            <span className="text-metallic"> VOCÊ PROCURA</span>
          </h2>
          <p
            className="mt-4 max-w-lg"
            style={{ color: 'var(--color-gray)', fontFamily: 'var(--font-body)', lineHeight: 1.7 }}
          >
            Explore nossas principais categorias e fale conosco para consultar disponibilidade.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map(cat => {
            const Icon = cat.icon;
            return (
              <a
                key={cat.num}
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-card
                className="reveal group flex flex-col gap-6 p-7 cursor-pointer transition-all duration-400"
                style={{
                  background: 'var(--color-graphite)',
                  border: '1px solid var(--color-border)',
                  textDecoration: 'none'
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget;
                  el.style.borderColor = 'var(--color-silver)';
                  el.style.transform = 'translateY(-6px)';
                  el.style.boxShadow = '0 20px 60px rgba(0,0,0,0.4)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget;
                  el.style.borderColor = 'var(--color-border)';
                  el.style.transform = 'translateY(0)';
                  el.style.boxShadow = 'none';
                }}
              >
                <div className="flex items-start justify-between">
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 900,
                      fontSize: '2.5rem',
                      lineHeight: 1,
                      color: 'rgba(192,192,192,0.15)'
                    }}
                  >
                    {cat.num}
                  </span>
                  <Icon
                    size={22}
                    style={{ color: 'var(--color-silver)', opacity: 0.7 }}
                  />
                </div>

                <div className="flex flex-col gap-2 flex-1">
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '1.4rem',
                      letterSpacing: '0.05em',
                      color: 'var(--color-white)'
                    }}
                  >
                    {cat.title}
                  </h3>
                  <p
                    style={{
                      color: 'var(--color-gray)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.88rem',
                      lineHeight: 1.65
                    }}
                  >
                    {cat.desc}
                  </p>
                </div>

                <div className="flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-1">
                  <span
                    style={{
                      color: 'var(--color-silver)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.75rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase'
                    }}
                  >
                    Consultar
                  </span>
                  <ArrowRight size={14} style={{ color: 'var(--color-silver)' }} />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
