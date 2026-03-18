import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Balcony Solar Guides — Everything you need to know about balcony solar in the UK'
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
        {/* Background glow top-right — blue tint for guides */}
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            right: '-80px',
            width: '480px',
            height: '480px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)',
          }}
        />
        {/* Background glow bottom-left — amber accent */}
        <div
          style={{
            position: 'absolute',
            bottom: '-60px',
            left: '-60px',
            width: '360px',
            height: '360px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 70%)',
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
          {/* Book / guide icon */}
          <div style={{ display: 'flex', marginBottom: '28px', opacity: 0.85 }}>
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
              <rect x="8" y="6" width="30" height="40" rx="3" fill="#0f2040" stroke="#3b82f6" strokeWidth="1.5" />
              <rect x="12" y="6" width="30" height="40" rx="3" fill="#0a1930" stroke="#3b82f6" strokeWidth="1.5" />
              <line x1="18" y1="16" x2="36" y2="16" stroke="#3b82f6" strokeWidth="1.2" opacity="0.7" />
              <line x1="18" y1="22" x2="36" y2="22" stroke="#3b82f6" strokeWidth="1.2" opacity="0.7" />
              <line x1="18" y1="28" x2="30" y2="28" stroke="#3b82f6" strokeWidth="1.2" opacity="0.7" />
              <circle cx="42" cy="40" r="10" fill="#f59e0b" />
              <path d="M42 34v6l3 3" stroke="#060d1e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Section label */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(59,130,246,0.12)',
              border: '1px solid rgba(59,130,246,0.30)',
              borderRadius: '20px',
              padding: '6px 20px',
              marginBottom: '24px',
            }}
          >
            <span style={{ color: '#60a5fa', fontSize: '13px', fontWeight: '700', letterSpacing: '0.1em' }}>
              GUIDES
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
            Balcony Solar Guides
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
            Everything you need to know about balcony solar in the UK
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
