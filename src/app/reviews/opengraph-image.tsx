import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Balcony Solar Reviews — Honest, tested reviews of the best plug-in solar kits for UK flats'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          backgroundColor: '#060d1e',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background glow top-right — amber tint for reviews */}
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            right: '-80px',
            width: '480px',
            height: '480px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(245,158,11,0.22) 0%, transparent 70%)',
          }}
        />
        {/* Background glow bottom-left */}
        <div
          style={{
            position: 'absolute',
            bottom: '-60px',
            left: '-60px',
            width: '360px',
            height: '360px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(16,185,129,0.10) 0%, transparent 70%)',
          }}
        />

        {/* Top bar: logo + UK badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '40px 56px 0 56px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <circle cx="18" cy="18" r="8" fill="#f59e0b" />
              <line x1="18" y1="2" x2="18" y2="7" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="18" y1="29" x2="18" y2="34" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="2" y1="18" x2="7" y2="18" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="29" y1="18" x2="34" y2="18" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="6.1" y1="6.1" x2="9.7" y2="9.7" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="26.3" y1="26.3" x2="29.9" y2="29.9" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="29.9" y1="6.1" x2="26.3" y2="9.7" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="9.7" y1="26.3" x2="6.1" y2="29.9" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <span style={{ color: '#ffffff', fontSize: '22px', fontWeight: '700', letterSpacing: '-0.3px' }}>
              Balcony Solar Guide
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f59e0b',
              color: '#060d1e',
              fontSize: '14px',
              fontWeight: '800',
              padding: '6px 16px',
              borderRadius: '20px',
              letterSpacing: '0.08em',
            }}
          >
            UK
          </div>
        </div>

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 80px',
            flex: 1,
            textAlign: 'center',
          }}
        >
          {/* Star rating row */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '28px' }}>
            {[0, 1, 2, 3, 4].map((i) => (
              <svg key={i} width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path
                  d="M16 3l3.09 6.26L26 10.27l-5 4.87 1.18 6.88L16 18.77l-6.18 3.25L11 15.14 6 10.27l6.91-1.01L16 3z"
                  fill="#f59e0b"
                />
              </svg>
            ))}
          </div>

          {/* Section label */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(245,158,11,0.12)',
              border: '1px solid rgba(245,158,11,0.30)',
              borderRadius: '20px',
              padding: '6px 20px',
              marginBottom: '24px',
            }}
          >
            <span style={{ color: '#f59e0b', fontSize: '13px', fontWeight: '700', letterSpacing: '0.1em' }}>
              REVIEWS
            </span>
          </div>

          <h1
            style={{
              color: '#ffffff',
              fontSize: '64px',
              fontWeight: '800',
              lineHeight: 1.05,
              letterSpacing: '-1.5px',
              margin: '0 0 20px 0',
            }}
          >
            Balcony Solar Reviews
          </h1>
          <p
            style={{
              color: '#93b4d8',
              fontSize: '24px',
              fontWeight: '400',
              lineHeight: 1.4,
              margin: 0,
              maxWidth: '760px',
            }}
          >
            Honest, tested reviews of the best plug-in solar kits for UK flats
          </p>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 56px',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            backgroundColor: 'rgba(255,255,255,0.03)',
          }}
        >
          <span style={{ color: '#5a7a9a', fontSize: '15px' }}>balconysolarguide.co.uk</span>
          <span style={{ color: '#f59e0b', fontSize: '14px', fontWeight: '600' }}>
            Independent · Honest · UK-tested
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
