import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Balcony Solar Panels UK — Reviews, Savings Calculator & Buying Guide'
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
        {/* Background glow top-right */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(245,158,11,0.18) 0%, transparent 70%)',
          }}
        />
        {/* Background glow bottom-left */}
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            left: '-80px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)',
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
            {/* Sun icon */}
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

        {/* Main content: centred */}
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
          {/* Solar panel graphic — three panel grid */}
          <div style={{ display: 'flex', gap: '6px', marginBottom: '32px', opacity: 0.75 }}>
            {[0, 1, 2].map((i) => (
              <svg key={i} width="44" height="32" viewBox="0 0 44 32" fill="none">
                <rect x="1" y="1" width="42" height="30" rx="2" fill="#0f2040" stroke="#f59e0b" strokeWidth="1.2" />
                <line x1="1" y1="11" x2="43" y2="11" stroke="#f59e0b" strokeWidth="0.8" opacity="0.6" />
                <line x1="1" y1="21" x2="43" y2="21" stroke="#f59e0b" strokeWidth="0.8" opacity="0.6" />
                <line x1="15" y1="1" x2="15" y2="31" stroke="#f59e0b" strokeWidth="0.8" opacity="0.6" />
                <line x1="29" y1="1" x2="29" y2="31" stroke="#f59e0b" strokeWidth="0.8" opacity="0.6" />
              </svg>
            ))}
          </div>

          <h1
            style={{
              color: '#ffffff',
              fontSize: '62px',
              fontWeight: '800',
              lineHeight: 1.05,
              letterSpacing: '-1.5px',
              margin: '0 0 20px 0',
            }}
          >
            Balcony Solar Panels UK
          </h1>
          <p
            style={{
              color: '#93b4d8',
              fontSize: '24px',
              fontWeight: '400',
              lineHeight: 1.4,
              margin: 0,
              maxWidth: '780px',
            }}
          >
            Reviews, Savings Calculator &amp; Buying Guide for Renters and Flat-Dwellers
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
            Independent · Accurate · UK-focused
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
