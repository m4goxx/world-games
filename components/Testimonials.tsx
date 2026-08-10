'use client';
import { Star, ExternalLink } from 'lucide-react';

const reviews = [
  { name: 'Cliente Google', text: 'Ótimos profissionais e ótimos preços!', stars: 5 },
  { name: 'Cliente Google', text: 'Ótimo atendimento', stars: 5 },
];

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="section-fade" style={{
      background: '#080808',
      padding: '120px 24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px', height: '300px',
        background: 'radial-gradient(ellipse, rgba(192,192,192,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div style={{
            fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 500,
            letterSpacing: '0.3em', color: '#8A8A8A', textTransform: 'uppercase',
            marginBottom: '16px',
          }}>AVALIAÇÕES</div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(40px, 5vw, 64px)',
            fontWeight: 900, lineHeight: 1,
            letterSpacing: '-0.02em', textTransform: 'uppercase',
            color: '#F0F0F0',
          }}>
            QUEM COMPRA,<br />
            <span style={{
              background: 'linear-gradient(135deg, #C0C0C0 0%, #E8E8E8 50%, #A0A0A0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>RECOMENDA.</span>
          </h2>
        </div>

        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          marginBottom: '64px',
          padding: '48px',
          border: '1px solid #1C1C1C',
          background: 'linear-gradient(160deg, #111111 0%, #080808 100%)',
          maxWidth: '360px',
          margin: '0 auto 64px',
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
            background: 'linear-gradient(90deg, transparent, #C0C0C0, transparent)',
          }} />
          <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
            {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="#C0C0C0" color="#C0C0C0" />)}
          </div>
          <div style={{
            fontFamily: 'var(--font-display)', fontSize: '80px', fontWeight: 900, lineHeight: 1,
            background: 'linear-gradient(135deg, #C0C0C0 0%, #E8E8E8 50%, #A0A0A0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>5,0</div>
          <div style={{
            fontFamily: 'var(--font-body)', fontSize: '13px', color: '#8A8A8A',
            letterSpacing: '0.1em', marginTop: '8px',
          }}>6 AVALIAÇÕES NO GOOGLE</div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1px',
          background: '#1C1C1C',
          border: '1px solid #1C1C1C',
          maxWidth: '800px',
          margin: '0 auto 48px',
        }} className="reviews-grid">
          {reviews.map((r, i) => (
            <div key={i} style={{ background: '#080808', padding: '40px 36px' }}>
              <div style={{ display: 'flex', gap: '3px', marginBottom: '20px' }}>
                {[1,2,3,4,5].map(j => <Star key={j} size={13} fill="#C0C0C0" color="#C0C0C0" />)}
              </div>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '16px',
                color: '#F0F0F0', lineHeight: 1.7, marginBottom: '24px',
                fontStyle: 'italic',
              }}>"{r.text}"</p>
              <div style={{
                fontFamily: 'var(--font-body)', fontSize: '12px',
                color: '#8A8A8A', letterSpacing: '0.1em', textTransform: 'uppercase',
              }}>{r.name}</div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <a
            href="https://www.google.com/maps/search/World+Imports+Celulares+Catalão+GO"
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              border: '1px solid #2A2A2A',
              color: '#C0C0C0', padding: '14px 28px',
              fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 600,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#C0C0C0'; e.currentTarget.style.color = '#F0F0F0'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#2A2A2A'; e.currentTarget.style.color = '#C0C0C0'; }}
          >
            <ExternalLink size={14} />
            VER NO GOOGLE
          </a>
        </div>
      </div>

      <style>{`
        .reviews-grid { grid-template-columns: repeat(2, 1fr) !important; }
        @media (max-width: 600px) { .reviews-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
