'use client';

const benefits = [
  {
    num: '01',
    title: 'ATENDIMENTO DE QUALIDADE',
    desc: 'Atendimento focado em ajudar você a encontrar o produto certo.',
    icon: '◈',
  },
  {
    num: '02',
    title: 'PREÇOS COMPETITIVOS',
    desc: 'Consulte nossas opções e encontre a melhor alternativa para você.',
    icon: '◇',
  },
  {
    num: '03',
    title: 'COMPRA PRESENCIAL',
    desc: 'Visite nossa loja em Catalão e veja os produtos pessoalmente.',
    icon: '◉',
  },
  {
    num: '04',
    title: 'ENTREGA E RETIRADA',
    desc: 'Escolha a forma mais conveniente para receber sua compra.',
    icon: '◈',
  },
];

export default function WhyUs() {
  return (
    <section className="section-fade" style={{
      background: '#080808',
      padding: '120px 24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(192,192,192,0.15), transparent)',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(192,192,192,0.08), transparent)',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ marginBottom: '80px', textAlign: 'center' }}>
          <div style={{
            fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 500,
            letterSpacing: '0.3em', color: '#8A8A8A', textTransform: 'uppercase',
            marginBottom: '16px',
          }}>POR QUE WORLD IMPORTS?</div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(40px, 5vw, 64px)',
            fontWeight: 900, lineHeight: 1,
            letterSpacing: '-0.02em', textTransform: 'uppercase',
            color: '#F0F0F0',
          }}>
            O QUE NOS<br />
            <span style={{
              background: 'linear-gradient(135deg, #C0C0C0 0%, #E8E8E8 50%, #A0A0A0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>DIFERENCIA</span>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1px',
          background: '#1C1C1C',
          border: '1px solid #1C1C1C',
        }} className="why-grid">
          {benefits.map((b) => (
            <div
              key={b.num}
              style={{
                background: '#080808',
                padding: '48px 32px',
                position: 'relative',
                transition: 'background 0.3s ease',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#0d0d0d'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#080808'; }}
            >
              <div style={{
                fontFamily: 'var(--font-display)', fontSize: '11px', fontWeight: 700,
                letterSpacing: '0.3em', color: '#2A2A2A', marginBottom: '32px',
              }}>{b.num}</div>
              <div style={{
                fontFamily: 'monospace', fontSize: '28px',
                background: 'linear-gradient(135deg, #C0C0C0 0%, #E8E8E8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '24px', lineHeight: 1,
              }}>{b.icon}</div>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 800,
                letterSpacing: '0.04em', textTransform: 'uppercase',
                color: '#F0F0F0', marginBottom: '12px', lineHeight: 1.1,
              }}>{b.title}</h3>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '14px',
                color: '#8A8A8A', lineHeight: 1.7,
              }}>{b.desc}</p>
              <div style={{
                position: 'absolute', bottom: 0, left: '32px', right: '32px', height: '1px',
                background: 'linear-gradient(90deg, transparent, #1C1C1C, transparent)',
              }} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .why-grid { grid-template-columns: repeat(4, 1fr) !important; }
        @media (max-width: 900px) { .why-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px) { .why-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
