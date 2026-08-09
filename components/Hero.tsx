'use client';
import { useEffect, useState } from 'react';
import { MessageCircle, ChevronDown, Star } from 'lucide-react';

const WA_LINK = 'https://wa.me/5564992628827?text=Ol%C3%A1!%20Vi%20o%20site%20da%20World%20Imports%20e%20gostaria%20de%20consultar%20os%20produtos%20dispon%C3%ADveis.';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 100); }, []);

  return (
    <section
      id="inicio"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(160deg, #0d0d0d 0%, #080808 50%, #111111 100%)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '80px',
      }}
    >
      {/* Background grid */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.03,
        backgroundImage: `linear-gradient(rgba(192,192,192,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(192,192,192,0.5) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      {/* Glow top right */}
      <div style={{
        position: 'absolute', top: '-100px', right: '-100px',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(192,192,192,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1280px', margin: '0 auto', padding: '0 24px',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: '80px', alignItems: 'center', width: '100%',
      }} className="hero-grid">
        {/* Left */}
        <div>
          {/* Eyebrow */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            marginBottom: '32px',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(16px)',
            transition: 'all 0.6s ease 0.1s',
          }}>
            <div style={{ width: '24px', height: '1px', background: '#C0C0C0' }} />
            <span style={{
              fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 500,
              letterSpacing: '0.3em', color: '#8A8A8A', textTransform: 'uppercase',
            }}>TECNOLOGIA • CELULARES • GAMES</span>
            <div style={{ width: '24px', height: '1px', background: '#C0C0C0' }} />
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(52px, 7vw, 88px)',
            fontWeight: 900,
            lineHeight: 0.95,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
            color: '#F0F0F0',
            marginBottom: '24px',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(24px)',
            transition: 'all 0.7s ease 0.25s',
          }}>
            TECNOLOGIA<br />
            <span style={{
              background: 'linear-gradient(135deg, #C0C0C0 0%, #E8E8E8 40%, #A0A0A0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>QUE VOCÊ</span><br />
            QUER.
          </h1>

          {/* Subheadline */}
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '17px', fontWeight: 300,
            lineHeight: 1.7, color: '#8A8A8A', marginBottom: '40px',
            maxWidth: '440px',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(24px)',
            transition: 'all 0.7s ease 0.4s',
          }}>
            Atendimento que você confia. Celulares, games e tecnologia
            em um só lugar.
          </p>

          {/* CTAs */}
          <div style={{
            display: 'flex', gap: '16px', flexWrap: 'wrap',
            marginBottom: '40px',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(24px)',
            transition: 'all 0.7s ease 0.55s',
          }}>
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
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(192,192,192,0.25)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <MessageCircle size={16} />
              CONSULTAR PRODUTOS
            </a>
            <a
              href="#sobre"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                background: 'transparent',
                color: '#C0C0C0', padding: '16px 28px',
                fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 600,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                textDecoration: 'none',
                border: '1px solid #2A2A2A',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#C0C0C0'; e.currentTarget.style.color = '#F0F0F0'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#2A2A2A'; e.currentTarget.style.color = '#C0C0C0'; }}
            >
              CONHECER A LOJA
            </a>
          </div>

          {/* Social proof */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '12px',
            opacity: mounted ? 1 : 0,
            transition: 'all 0.7s ease 0.7s',
          }}>
            <div style={{ display: 'flex', gap: '2px' }}>
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={14} fill="#C0C0C0" color="#C0C0C0" />
              ))}
            </div>
            <div style={{ width: '1px', height: '16px', background: '#2A2A2A' }} />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#8A8A8A' }}>
              <span style={{ color: '#F0F0F0', fontWeight: 600 }}>5,0</span> no Google • 6 avaliações
            </span>
          </div>
        </div>

        {/* Right - Visual */}
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="hero-visual">
          {/* Glow behind */}
          <div style={{
            position: 'absolute',
            width: '400px', height: '400px',
            background: 'radial-gradient(circle, rgba(192,192,192,0.08) 0%, transparent 70%)',
            borderRadius: '50%',
          }} />

          {/* Outer ring */}
          <div style={{
            width: '380px', height: '380px',
            border: '1px solid rgba(192,192,192,0.1)',
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            opacity: mounted ? 1 : 0,
            transition: 'opacity 1s ease 0.8s',
          }}>
            {/* Inner ring */}
            <div style={{
              width: '280px', height: '280px',
              border: '1px solid rgba(192,192,192,0.15)',
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'radial-gradient(circle, rgba(192,192,192,0.04) 0%, transparent 70%)',
            }}>
              {/* Center icon area */}
              <div style={{
                width: '160px', height: '160px',
                background: 'linear-gradient(135deg, #1C1C1C 0%, #111111 100%)',
                border: '1px solid #2A2A2A',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexDirection: 'column', gap: '8px',
              }}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '48px', fontWeight: 900,
                  background: 'linear-gradient(135deg, #C0C0C0 0%, #E8E8E8 50%, #A0A0A0 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: 1,
                }}>WI</div>
                <div style={{
                  fontFamily: 'var(--font-body)', fontSize: '9px',
                  letterSpacing: '0.3em', color: '#8A8A8A', textTransform: 'uppercase',
                }}>EST. 2024</div>
              </div>
            </div>
          </div>

          {/* Floating cards */}
          <div style={{
            position: 'absolute', top: '30px', right: '-20px',
            background: 'rgba(28,28,28,0.9)',
            border: '1px solid #2A2A2A',
            backdropFilter: 'blur(12px)',
            padding: '16px 20px',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.7s ease 1s',
          }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 800, color: '#F0F0F0', lineHeight: 1 }}>5,0</div>
            <div style={{ display: 'flex', gap: '2px', margin: '4px 0' }}>
              {[1,2,3,4,5].map(i => <Star key={i} size={10} fill="#C0C0C0" color="#C0C0C0" />)}
            </div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '10px', color: '#8A8A8A', letterSpacing: '0.1em' }}>GOOGLE</div>
          </div>

          <div style={{
            position: 'absolute', bottom: '40px', left: '-20px',
            background: 'rgba(28,28,28,0.9)',
            border: '1px solid #2A2A2A',
            backdropFilter: 'blur(12px)',
            padding: '16px 20px',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.7s ease 1.2s',
          }}>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '10px', color: '#8A8A8A', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '4px' }}>Localização</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700, color: '#F0F0F0' }}>Catalão - GO</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '32px', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
        opacity: mounted ? 0.4 : 0,
        transition: 'opacity 1s ease 1.5s',
        animation: 'float 2s ease-in-out infinite',
      }}>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: '10px', letterSpacing: '0.3em', color: '#8A8A8A', textTransform: 'uppercase' }}>scroll</div>
        <ChevronDown size={14} color="#8A8A8A" />
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
        .hero-grid { grid-template-columns: 1fr 1fr; }
        .hero-visual { display: flex; }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .hero-visual { display: none !important; }
        }
      `}</style>
    </section>
  );
}
