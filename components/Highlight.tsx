'use client';
import { MessageCircle } from 'lucide-react';

const WA_LINK = 'https://wa.me/5564992628827?text=Ol%C3%A1!%20Vi%20o%20site%20da%20World%20Imports%20e%20gostaria%20de%20consultar%20os%20produtos%20dispon%C3%ADveis.';

export default function Highlight() {
  return (
    <section id="sobre" className="section-fade" style={{
      background: '#111111',
      padding: '120px 24px',
    }}>
      <div style={{
        maxWidth: '1280px', margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: '80px', alignItems: 'center',
      }} className="highlight-grid">
        {/* Left visual */}
        <div style={{ position: 'relative' }}>
          <div style={{
            aspectRatio: '4/5',
            background: 'linear-gradient(160deg, #1C1C1C 0%, #111111 100%)',
            border: '1px solid #2A2A2A',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            position: 'relative', overflow: 'hidden',
          }}>
            {/* Metallic shimmer */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
              background: 'linear-gradient(90deg, transparent, #C0C0C0, transparent)',
            }} />
            <div style={{
              position: 'absolute', inset: 0, opacity: 0.03,
              backgroundImage: `linear-gradient(rgba(192,192,192,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(192,192,192,0.8) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }} />
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '120px', fontWeight: 900, lineHeight: 1,
                background: 'linear-gradient(135deg, #1C1C1C 0%, #2A2A2A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                userSelect: 'none',
              }}>WI</div>
              <div style={{
                fontFamily: 'var(--font-body)', fontSize: '11px',
                letterSpacing: '0.4em', color: '#2A2A2A', textTransform: 'uppercase',
                marginTop: '8px',
              }}>WORLD IMPORTS</div>
            </div>
          </div>

          {/* Accent line */}
          <div style={{
            position: 'absolute', bottom: '-24px', left: '32px',
            width: '80px', height: '2px',
            background: 'linear-gradient(90deg, #C0C0C0, transparent)',
          }} />
        </div>

        {/* Right content */}
        <div>
          <div style={{
            fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 500,
            letterSpacing: '0.3em', color: '#8A8A8A', textTransform: 'uppercase',
            marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px',
          }}>
            <div style={{ width: '32px', height: '1px', background: '#2A2A2A' }} />
            SOBRE NÓS
          </div>

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px, 4vw, 56px)',
            fontWeight: 900, lineHeight: 1,
            letterSpacing: '-0.02em', textTransform: 'uppercase',
            color: '#F0F0F0', marginBottom: '28px',
          }}>
            SEU PRÓXIMO<br />
            <span style={{
              background: 'linear-gradient(135deg, #C0C0C0 0%, #E8E8E8 50%, #A0A0A0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>DISPOSITIVO</span><br />
            COMEÇA AQUI.
          </h2>

          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '16px', color: '#8A8A8A',
            lineHeight: 1.8, marginBottom: '40px',
          }}>
            Na World Imports, você encontra uma experiência de compra
            focada em atendimento, praticidade e tecnologia.
          </p>

          <a
            href={WA_LINK}
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              background: 'linear-gradient(135deg, #C0C0C0 0%, #E8E8E8 50%, #A8A8A8 100%)',
              color: '#080808', padding: '16px 28px',
              fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(192,192,192,0.2)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            <MessageCircle size={16} />
            FALAR COM UM ESPECIALISTA
          </a>
        </div>
      </div>

      <style>{`
        .highlight-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 768px) {
          .highlight-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
