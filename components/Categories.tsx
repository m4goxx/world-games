'use client';
import { ArrowRight } from 'lucide-react';

const WA_LINK = 'https://wa.me/5564992628827?text=Ol%C3%A1!%20Vi%20o%20site%20da%20World%20Imports%20e%20gostaria%20de%20consultar%20os%20produtos%20dispon%C3%ADveis.';

const categories = [
  {
    num: '01',
    title: 'CELULARES',
    desc: 'Consulte modelos e disponibilidade.',
    icon: '📱',
  },
  {
    num: '02',
    title: 'GAMES',
    desc: 'Produtos para quem leva diversão a sério.',
    icon: '🎮',
  },
  {
    num: '03',
    title: 'ACESSÓRIOS',
    desc: 'Complementos para sua experiência.',
    icon: '🎧',
  },
  {
    num: '04',
    title: 'TECNOLOGIA',
    desc: 'Soluções e produtos para o seu dia a dia.',
    icon: '💻',
  },
];

export default function Categories() {
  return (
    <section id="categorias" className="section-fade" style={{
      background: '#080808',
      padding: '120px 24px',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '72px' }}>
          <div style={{
            fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 500,
            letterSpacing: '0.3em', color: '#8A8A8A', textTransform: 'uppercase',
            marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px',
          }}>
            <div style={{ width: '32px', height: '1px', background: '#2A2A2A' }} />
            CATEGORIAS
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(40px, 5vw, 64px)',
            fontWeight: 900, lineHeight: 1,
            letterSpacing: '-0.02em', textTransform: 'uppercase',
            color: '#F0F0F0',
          }}>
            ENCONTRE O QUE<br />
            <span style={{
              background: 'linear-gradient(135deg, #C0C0C0 0%, #E8E8E8 50%, #A0A0A0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>VOCÊ PROCURA</span>
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '16px', color: '#8A8A8A',
            marginTop: '20px', maxWidth: '480px', lineHeight: 1.7,
          }}>
            Explore nossas principais categorias e fale conosco para consultar disponibilidade.
          </p>
        </div>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1px',
          background: '#1C1C1C',
          border: '1px solid #1C1C1C',
        }} className="cat-grid">
          {categories.map((cat) => (
            <a
              key={cat.num}
              href={WA_LINK}
              target="_blank" rel="noopener noreferrer"
              style={{
                background: '#080808',
                padding: '48px 32px',
                textDecoration: 'none',
                display: 'flex', flexDirection: 'column',
                position: 'relative', overflow: 'hidden',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                minHeight: '280px',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#111111';
                e.currentTarget.style.transform = 'translateY(-4px)';
                const border = e.currentTarget.querySelector('.cat-border') as HTMLElement;
                if (border) border.style.opacity = '1';
                const arrow = e.currentTarget.querySelector('.cat-arrow') as HTMLElement;
                if (arrow) arrow.style.transform = 'translateX(6px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#080808';
                e.currentTarget.style.transform = 'translateY(0)';
                const border = e.currentTarget.querySelector('.cat-border') as HTMLElement;
                if (border) border.style.opacity = '0';
                const arrow = e.currentTarget.querySelector('.cat-arrow') as HTMLElement;
                if (arrow) arrow.style.transform = 'translateX(0)';
              }}
            >
              {/* Metallic top border on hover */}
              <div className="cat-border" style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                background: 'linear-gradient(90deg, transparent, #C0C0C0, transparent)',
                opacity: 0, transition: 'opacity 0.3s ease',
              }} />

              <div style={{
                fontFamily: 'var(--font-display)', fontSize: '11px', fontWeight: 700,
                letterSpacing: '0.3em', color: '#2A2A2A', marginBottom: '32px',
              }}>{cat.num}</div>

              <div style={{ fontSize: '36px', marginBottom: '20px' }}>{cat.icon}</div>

              <h3 style={{
                fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 800,
                letterSpacing: '0.04em', textTransform: 'uppercase',
                color: '#F0F0F0', marginBottom: '12px', lineHeight: 1,
              }}>{cat.title}</h3>

              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '14px', color: '#8A8A8A',
                lineHeight: 1.6, flex: 1,
              }}>{cat.desc}</p>

              <div className="cat-arrow" style={{
                marginTop: '32px',
                transition: 'transform 0.3s ease',
                display: 'inline-flex',
              }}>
                <ArrowRight size={18} color="#C0C0C0" />
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .cat-grid { grid-template-columns: repeat(4, 1fr) !important; }
        @media (max-width: 900px) { .cat-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px) { .cat-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
