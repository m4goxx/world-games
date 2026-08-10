'use client';

const steps = [
  { num: '01', title: 'CONSULTE', desc: 'Fale conosco pelo WhatsApp e consulte os produtos disponíveis.' },
  { num: '02', title: 'ESCOLHA', desc: 'Encontre o produto que atende às suas necessidades.' },
  { num: '03', title: 'COMBINE', desc: 'Consulte preço, disponibilidade e condições.' },
  { num: '04', title: 'RECEBA', desc: 'Retire na loja ou combine a entrega.' },
];

export default function HowToBuy() {
  return (
    <section className="section-fade" style={{
      background: '#111111',
      padding: '120px 24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ marginBottom: '80px' }}>
          <div style={{
            fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 500,
            letterSpacing: '0.3em', color: '#8A8A8A', textTransform: 'uppercase',
            marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px',
          }}>
            <div style={{ width: '32px', height: '1px', background: '#2A2A2A' }} />
            COMO COMPRAR
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(40px, 5vw, 64px)',
            fontWeight: 900, lineHeight: 1,
            letterSpacing: '-0.02em', textTransform: 'uppercase',
            color: '#F0F0F0',
          }}>
            SIMPLES. RÁPIDO.<br />
            <span style={{
              background: 'linear-gradient(135deg, #C0C0C0 0%, #E8E8E8 50%, #A0A0A0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>DIRETO.</span>
          </h2>
        </div>

        <div style={{ position: 'relative' }}>
          <div className="step-line" style={{
            position: 'absolute', top: '28px', left: '0', right: '0', height: '1px',
            background: 'linear-gradient(90deg, transparent, #2A2A2A 10%, #2A2A2A 90%, transparent)',
          }} />
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '0',
          }} className="steps-grid">
            {steps.map((step) => (
              <div key={step.num} style={{ padding: '0 32px 0 0', position: 'relative' }}>
                <div style={{
                  width: '56px', height: '56px',
                  border: '1px solid #2A2A2A',
                  background: '#111111',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '32px',
                  position: 'relative', zIndex: 1,
                  transition: 'all 0.3s ease',
                }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = '#C0C0C0';
                    (e.currentTarget as HTMLElement).style.background = '#1C1C1C';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = '#2A2A2A';
                    (e.currentTarget as HTMLElement).style.background = '#111111';
                  }}
                >
                  <span style={{
                    fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 800,
                    background: 'linear-gradient(135deg, #C0C0C0 0%, #E8E8E8 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>{step.num}</span>
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 800,
                  letterSpacing: '0.06em', textTransform: 'uppercase',
                  color: '#F0F0F0', marginBottom: '12px',
                }}>{step.title}</h3>
                <p style={{
                  fontFamily: 'var(--font-body)', fontSize: '14px',
                  color: '#8A8A8A', lineHeight: 1.7,
                }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .steps-grid { grid-template-columns: repeat(4, 1fr) !important; }
        .step-line { display: block; }
        @media (max-width: 768px) {
          .steps-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .step-line { display: none !important; }
        }
      `}</style>
    </section>
  );
}
