import React, { useState, useRef, useEffect } from 'react'

/**
 * Isotipo Oficial Halomed (Globo de diálogo digital + Cruz médica redondeada)
 */
function HalomedIsotipo({ size = 38 }) {
  const height = Math.round(size * 0.92)
  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 120 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="haloBrandGrad"
          x1="12"
          y1="8"
          x2="108"
          y2="96"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#2BB4F2" />
          <stop offset="100%" stopColor="#0096D6" />
        </linearGradient>
      </defs>
      <path
        d="M60 7C29.2 7 7 25.8 7 50.8C7 64.9 15.1 77.3 27.9 85.1L23.8 100.3C23.1 102.9 25.7 104.9 28 103.6L45.6 93.7C50.2 94.6 55 95 60 95C90.8 95 113 76.2 113 50.8C113 25.8 90.8 7 60 7Z"
        fill="url(#haloBrandGrad)"
      />
      <rect x="52" y="30.5" width="16" height="41" rx="8" fill="#FFFFFF" />
      <rect x="39.5" y="43" width="41" height="16" rx="8" fill="#FFFFFF" />
    </svg>
  )
}

/**
 * Iconografía profesional de alta fidelidad médica y estética
 */
const Icons = {
  ArrowRight: () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  ),
  Calendar: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="3" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <circle cx="12" cy="15" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  ),
  CheckCircleSolid: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#0096D6" />
      <path d="M8.2 12.3L10.7 14.8L15.8 9.7" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  CheckSmall: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  DoctorBadge: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="10" cy="7" r="4" />
      <path d="M19 11v6" />
      <path d="M16 14h6" />
    </svg>
  ),
  ShieldCheck: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  SmartphoneCheck: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="3" />
      <line x1="12" y1="18" x2="12" y2="18.01" />
      <path d="m9.5 10.5 1.8 1.8 3.2-3.2" strokeWidth="1.8" />
    </svg>
  ),
  // Iconos profesionales de Beneficios (Dual-tone)
  ProZap: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="rgba(43, 180, 242, 0.18)" stroke="#083560" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 5L8 12H13L11 19L17 11H12L13 5Z" fill="#0096D6" />
    </svg>
  ),
  ProHeart: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M19.5 13.572L12 21L4.5 13.572C2.5 11.572 2.5 8.35 4.5 6.35C6.5 4.35 9.7 4.35 11.7 6.35L12 6.65L12.3 6.35C14.3 4.35 17.5 4.35 19.5 6.35C21.5 8.35 21.5 11.572 19.5 13.572Z" fill="rgba(43, 180, 242, 0.16)" stroke="#083560" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 11.5H9.5L10.5 8.5L13.5 14.5L14.5 11.5H17" stroke="#0096D6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  ProMoon: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" fill="rgba(43, 180, 242, 0.16)" stroke="#083560" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="17" cy="6" r="1.5" fill="#0096D6" />
      <circle cx="19.5" cy="9.5" r="1" fill="#2BB4F2" />
    </svg>
  ),
  ProShoe: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M3 17.5H20C21.1 17.5 22 16.6 22 15.5V13C22 11.3 20.8 9.9 19.2 9.4L14.5 8H8.5L5 12.5L3 13.5V16C3 16.8 3.7 17.5 4.5 17.5H3Z" fill="rgba(43, 180, 242, 0.16)" stroke="#083560" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.5 8L11 12.5" stroke="#0096D6" strokeWidth="2" strokeLinecap="round" />
      <path d="M13.5 8L14.5 12.5" stroke="#0096D6" strokeWidth="2" strokeLinecap="round" />
      <line x1="2" y1="19.5" x2="22" y2="19.5" stroke="#083560" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  ProSmile: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" fill="rgba(43, 180, 242, 0.16)" stroke="#083560" strokeWidth="2" />
      <path d="M8 13.8C8.9 15.6 10.4 16.5 12 16.5C13.6 16.5 15.1 15.6 16 13.8" stroke="#0096D6" strokeWidth="2.3" strokeLinecap="round" />
      <circle cx="9" cy="9.5" r="1.2" fill="#083560" />
      <circle cx="15" cy="9.5" r="1.2" fill="#083560" />
    </svg>
  ),
  PillCapsule: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
      <path d="m8.5 8.5 7 7" />
    </svg>
  ),
  SyringePen: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m18 2 4 4" />
      <path d="m17 7 3-3" />
      <path d="M19 9 8.7 19.3c-.4.4-1 .6-1.6.6H3v-4.1c0-.6.2-1.2.6-1.6L14 3.9" />
      <path d="m9 9 6 6" />
      <path d="m13 13 4 4" />
    </svg>
  ),
  VideoCamera: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m22 8-6 4 6 4V8Z" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  ),
  PrescriptionFile: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  ),
  StepChart: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
      <polyline points="4 9 9 5 14 10 20 4" />
    </svg>
  ),
  StepArrow: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9BB2C9" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  ),
  // Iconos del Hero Móvil Idénticos al Mockup Oficial
  DoctorStethoscope: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#083560" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Cabello */}
      <path d="M8.5 7.2c.4-1.8 1.8-3 3.5-3s3.1 1.2 3.5 3" />
      {/* Cabeza */}
      <circle cx="12" cy="7.8" r="3.4" />
      {/* Cuello y bata médica */}
      <path d="M5 20.5v-1.6a5.6 5.6 0 0 1 14 0v1.6" />
      <path d="M10 13l2 2.4 2-2.4" stroke="#0096D6" strokeWidth="1.8" />
      {/* Estetoscopio */}
      <path d="M9 14.5v1.6a3 3 0 0 0 6 0v-1.6" stroke="#083560" strokeWidth="2" />
      <circle cx="15.2" cy="17.6" r="1.3" fill="#083560" stroke="none" />
    </svg>
  ),
  ClipboardChecklist: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#083560" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1.5" />
      <path d="M8 11.5l1.5 1.5 2.5-2.5" stroke="#083560" strokeWidth="2.2" />
      <line x1="13.5" y1="11.5" x2="16.5" y2="11.5" stroke="#083560" strokeWidth="2" />
      <path d="M8 16l1.5 1.5 2.5-2.5" stroke="#083560" strokeWidth="2.2" />
      <line x1="13.5" y1="16" x2="16.5" y2="16" stroke="#083560" strokeWidth="2" />
    </svg>
  ),
  LaptopTelemed: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#083560" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="5" width="16" height="10.5" rx="1.8" />
      <circle cx="12" cy="9.2" r="1.8" stroke="#083560" strokeWidth="1.8" />
      <path d="M9 13.5a3 3 0 0 1 6 0" stroke="#083560" strokeWidth="1.8" />
      <path d="M2 18.5h20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
    </svg>
  ),
  Instagram: () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  MessageChat: ({ size = 26 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
      aria-hidden="true"
    >
      <path
        d="M20 11.5C20 15.6421 16.4183 19 12 19C10.5755 19 9.23724 18.6475 8.08332 18.0312L4 19.5L5.38555 15.6888C4.51528 14.4754 4 13.0456 4 11.5C4 7.35786 7.58172 4 12 4C16.4183 4 20 7.35786 20 11.5Z"
        fill="#FFFFFF"
      />
      <circle cx="8.5" cy="11.5" r="1.3" fill="#0096D6" />
      <circle cx="12" cy="11.5" r="1.3" fill="#0096D6" />
      <circle cx="15.5" cy="11.5" r="1.3" fill="#0096D6" />
    </svg>
  ),
  WhatsAppSophisticated: ({ size = 28 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
      aria-hidden="true"
    >
      <path
        d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z"
        fill="rgba(255, 255, 255, 0.25)"
        stroke="#FFFFFF"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M8.53 7.33c-.16 0-.43.06-.66.31c-.22.25-.87.86-.87 2.07c0 1.22.89 2.39 1 2.56c.14.17 1.76 2.67 4.25 3.73c.59.27 1.05.42 1.41.53c.59.19 1.13.16 1.56.1c.48-.07 1.46-.6 1.67-1.18s.21-1.07.15-1.18c-.07-.1-.23-.16-.48-.27c-.25-.14-1.47-.74-1.69-.82c-.23-.08-.37-.12-.56.12c-.16.25-.64.81-.78.97c-.15.17-.29.19-.53.07c-.26-.13-1.06-.39-2-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.12-.24-.01-.39.11-.5c.11-.11.27-.29.37-.44c.13-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.11-.56-1.35-.77-1.84c-.2-.48-.4-.42-.56-.43c-.14 0-.3-.01-.47-.01"
        fill="#FFFFFF"
      />
    </svg>
  ),
  WhatsApp: ({ size = 18 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0, filter: 'drop-shadow(0 1px 2px rgba(8, 53, 96, 0.22))' }}
      aria-hidden="true"
    >
      {/* Globo de diálogo oficial de WhatsApp */}
      <path
        fill="#25D366"
        d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z"
      />
      {/* Auricular de teléfono oficial de WhatsApp */}
      <path
        fill="#FFFFFF"
        d="M8.53 7.33c-.16 0-.43.06-.66.31c-.22.25-.87.86-.87 2.07c0 1.22.89 2.39 1 2.56c.14.17 1.76 2.67 4.25 3.73c.59.27 1.05.42 1.41.53c.59.19 1.13.16 1.56.1c.48-.07 1.46-.6 1.67-1.18s.21-1.07.15-1.18c-.07-.1-.23-.16-.48-.27c-.25-.14-1.47-.74-1.69-.82c-.23-.08-.37-.12-.56.12c-.16.25-.64.81-.78.97c-.15.17-.29.19-.53.07c-.26-.13-1.06-.39-2-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.12-.24-.01-.39.11-.5c.11-.11.27-.29.37-.44c.13-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.11-.56-1.35-.77-1.84c-.2-.48-.4-.42-.56-.43c-.14 0-.3-.01-.47-.01"
      />
    </svg>
  ),
  MenuHamburger: () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#083560" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

function StarRating() {
  return (
    <div className="star-rating" aria-label="5 de 5 estrellas">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="star">★</span>
      ))}
    </div>
  )
}

function HealioReviewCard({ review, ariaHidden = false }) {
  return (
    <div className="healio-review-card" aria-hidden={ariaHidden ? 'true' : undefined}>
      <div className="healio-quote-icon" aria-hidden="true">“</div>
      <p className="healio-review-text">{review.quote}</p>
      <div className="healio-review-footer">
        <div className="healio-review-avatar-icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        <div className="healio-review-author">
          <strong className="healio-review-name">{review.name}</strong>
          <div className="healio-review-stars" aria-label="5 de 5 estrellas">
            <span className="healio-star">★</span>
            <span className="healio-star">★</span>
            <span className="healio-star">★</span>
            <span className="healio-star">★</span>
            <span className="healio-star">★</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// Reseñas de pacientes para el loop infinito (línea única continua)
const PACIENTES_REVIEWS = [
  {
    id: 1,
    quote: 'Agendar en HaloMed fue increíblemente fácil y rápido. La consulta médica se sintió muy cercana, me aclararon todas las dudas sobre el tratamiento y recibí mi receta digital sin moverme de casa.',
    name: 'Carolina M.'
  },
  {
    id: 2,
    quote: 'No tenía tiempo de ir a una clínica por mis horarios de trabajo. HaloMed me conectó con un médico especialista el mismo día. Un proceso rápido, simple y con un seguimiento que da mucha tranquilidad.',
    name: 'Matías R.'
  },
  {
    id: 3,
    quote: 'Al principio estaba nerviosa con las consultas online, pero el doctor realmente me escuchó y me explicó todo con calma. HaloMed se siente 100% seguro, confiable y cercano.',
    name: 'Daniela P.'
  },
  {
    id: 4,
    quote: 'Desde la evaluación inicial hasta el seguimiento mensual de dosis, toda la experiencia ha sido impecable. Es atención médica de calidad que realmente se ajusta a mi ritmo de vida.',
    name: 'Carlos V.'
  },
  {
    id: 5,
    quote: 'HaloMed me ayudó a ordenar mi salud metabólica con metas claras. El médico fue muy empático, atento y me dio pautas realistas. He bajado de peso con energía y sin ansiedad.',
    name: 'Valentina K.'
  },
  {
    id: 6,
    quote: 'La videoconsulta fue súper fluida y puntual. Me gustó mucho la claridad del doctor sobre los siguientes pasos del tratamiento y la rapidez para recibir las indicaciones médicas.',
    name: 'Ignacio S.'
  },
  {
    id: 7,
    quote: 'Buscaba un equipo médico serio que no ofreciera soluciones mágicas. En HaloMed encontré un tratamiento guiado por evidencia y profesionales que realmente priorizan tu bienestar.',
    name: 'Florencia T.'
  },
  {
    id: 8,
    quote: 'El acompañamiento continuo marca toda la diferencia. Poder resolver dudas de mi tratamiento sin tener que pedir permiso en el trabajo o viajar es impagable. Muy recomendado.',
    name: 'Rodrigo A.'
  }
]

const BENEFICIOS_ITEMS = [
  {
    icon: <Icons.ProZap />,
    title: 'Más energía',
    subtitle: 'y vitalidad'
  },
  {
    icon: <Icons.ProHeart />,
    title: 'Mejor salud',
    subtitle: 'metabólica'
  },
  {
    icon: <Icons.ProMoon />,
    title: 'Mejor calidad',
    subtitle: 'de sueño'
  },
  {
    icon: <Icons.ProShoe />,
    title: 'Mayor movilidad',
    subtitle: 'y bienestar físico'
  },
  {
    icon: <Icons.ProSmile />,
    title: 'Más confianza',
    subtitle: 'en ti'
  }
]

const CURRENT_YEAR = new Date().getFullYear()

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [activeNav, setActiveNav] = useState('inicio')
  const [activeBeneficio, setActiveBeneficio] = useState(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const heroVideoRef = useRef(null)
  const heroMobileVideoRef = useRef(null)

  const scrollToAgendamiento = (e) => {
    if (e && e.preventDefault) e.preventDefault()
    setActiveNav('agendamiento')
    const target = document.getElementById('agendamiento')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    } else {
      setModalOpen(true)
    }
  }

  // Autoplay garantizado de video para todos los navegadores
  useEffect(() => {
    [heroVideoRef, heroMobileVideoRef].forEach((ref) => {
      if (ref && ref.current) {
        ref.current.defaultMuted = true
        ref.current.muted = true
        const playPromise = ref.current.play()
        if (playPromise !== undefined) {
          playPromise.catch(() => {})
        }
      }
    })
  }, [])

  // Scroll discovery effect for mobile hero background & transparent header transition
  React.useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20)

          const hero = document.getElementById('inicio')
          if (hero) {
            const rect = hero.getBoundingClientRect()
            const heroHeight = rect.height || 600
            // Progress goes from 0 to 1 as the hero scrolls past
            const progress = Math.max(0, Math.min(1, -rect.top / heroHeight))
            hero.style.setProperty('--hero-scroll-progress', progress.toFixed(4))
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="page-wrapper">
      {/* ================= HEADER / NAVBAR ================= */}
      <header className={`navbar ${isScrolled ? 'is-scrolled' : 'is-transparent'}`}>
        <div className="container navbar-inner">
          <a href="#inicio" className="brand-logo" aria-label="Halomed Telemedicina">
            <HalomedIsotipo size={36} />
            <div className="brand-wordmark-wrap">
              <span className="brand-wordmark">HALOMED</span>
              <span className="brand-subword">TELEMEDICINA</span>
            </div>
          </a>

          <nav className="nav-links" aria-label="Navegación principal">
            <a
              href="#inicio"
              className={activeNav === 'inicio' ? 'nav-item active' : 'nav-item'}
              onClick={() => setActiveNav('inicio')}
            >
              INICIO
            </a>
            <a
              href="#beneficios"
              className={activeNav === 'peso' ? 'nav-item active' : 'nav-item'}
              onClick={() => setActiveNav('peso')}
            >
              CONTROL DE PESO
            </a>
            <a
              href="#tratamientos"
              className={activeNav === 'tratamientos' ? 'nav-item active' : 'nav-item'}
              onClick={() => setActiveNav('tratamientos')}
            >
              TRATAMIENTOS
            </a>
            <a
              href="#como-funciona"
              className={activeNav === 'como-funciona' ? 'nav-item active' : 'nav-item'}
              onClick={() => setActiveNav('como-funciona')}
            >
              COMO FUNCIONA
            </a>
          </nav>

          <div className="nav-actions">
            <button
              type="button"
              className="btn-navy-pill nav-desktop-cta"
              onClick={scrollToAgendamiento}
            >
              <span>Agendar consulta</span>
              <Icons.ArrowRight />
            </button>

            <button
              type="button"
              className="nav-mobile-cta"
              onClick={scrollToAgendamiento}
              aria-label="Consulta"
            >
              <span>Consulta</span>
            </button>
          </div>
        </div>
      </header>

      {/* ================= IMMERSIVE HERO SECTION ================= */}
      <section id="inicio" className="hero-immersive-section">
        {/* Fondo inmersivo del Hero: Video Desktop (1.mp4) y Video Móvil (2.mp4) */}
        <div className="hero-immersive-media" aria-hidden="true">
          {/* Video Desktop Oficial (1.mp4) */}
          <video
            ref={heroVideoRef}
            className="hero-immersive-video hero-video-desktop"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src="/1.mp4" type="video/mp4" />
          </video>

          {/* Video Mobile Vertical Oficial (2.mp4) */}
          <video
            ref={heroMobileVideoRef}
            className="hero-immersive-video hero-video-mobile"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src="/2.mp4" type="video/mp4" />
          </video>

          <div className="hero-immersive-gradient" />
        </div>

        <div className="container hero-container">
          {/* Columna Izquierda: Textos y Acciones */}
          <div className="hero-content-col">
            <div className="hero-eyebrow-pill">CONTROL DE PESO ONLINE</div>

            <h1 className="hero-title">
              Un cambio real,
              <br />
              <span className="hero-title-accent">con apoyo médico.</span>
            </h1>

            <p className="hero-subtitle">
              Evaluación, tratamiento y seguimiento para que alcances tus objetivos de peso, de forma segura, cómoda y desde cualquier lugar de Chile.
            </p>

            {/* Badges de características oficiales (en móvil apilados a la izquierda) */}
            <div className="hero-features-list">
              <div className="hero-feature-item">
                <div className="hero-feature-icon">
                  <Icons.DoctorStethoscope />
                </div>
                <div className="hero-feature-text">
                  <strong>Acompañamiento</strong>
                  <span>médico</span>
                </div>
              </div>

              <div className="hero-feature-item">
                <div className="hero-feature-icon">
                  <Icons.ClipboardChecklist />
                </div>
                <div className="hero-feature-text">
                  <strong>Tratamiento</strong>
                  <span>personalizado</span>
                </div>
              </div>

              <div className="hero-feature-item">
                <div className="hero-feature-icon">
                  <Icons.LaptopTelemed />
                </div>
                <div className="hero-feature-text">
                  <strong>100% online</strong>
                  <span>desde Chile</span>
                </div>
              </div>
            </div>

            {/* Call to Action principal */}
            <div className="hero-cta-group">
              <button
                type="button"
                className="btn-hero-primary"
                onClick={scrollToAgendamiento}
              >
                <Icons.Calendar />
                <span>Agendar consulta online</span>
                <Icons.ArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* Degradado suave de transición hacia la siguiente sección */}
        <div className="hero-bottom-fade" aria-hidden="true" />

        {/* Ola orgánica suave de transición oficial idéntica al mockup */}
        <div className="hero-bottom-wave-wrap" aria-hidden="true">
          <svg
            className="hero-bottom-wave"
            viewBox="0 0 1440 120"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M0,38 C320,85 540,15 840,60 C1140,105 1320,35 1440,50 L1440,120 L0,120 Z"
              fill="#E1F3FE"
            />
            <path
              d="M0,62 C300,105 640,45 960,85 C1240,120 1370,72 1440,78 L1440,120 L0,120 Z"
              fill="#FFFFFF"
            />
          </svg>
        </div>
      </section>

      {/* ================= BENEFICIOS SECTION (ICONOS PROFESIONALES) ================= */}
      <section id="beneficios" className="beneficios-section">
        <div className="container">
          <div className="section-eyebrow-center">MÁS QUE UN NÚMERO EN LA BALANZA</div>
          <h2 className="section-title-center beneficios-title">Beneficios que se sienten en tu día a día.</h2>

          <div className="beneficios-grid">
            {BENEFICIOS_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className={`beneficio-card ${activeBeneficio === idx ? 'is-active' : ''}`}
                onMouseEnter={() => setActiveBeneficio(idx)}
                onMouseLeave={() => setActiveBeneficio(null)}
                onTouchStart={() => setActiveBeneficio(idx)}
                onTouchEnd={() => setTimeout(() => setActiveBeneficio(null), 400)}
                role="button"
                tabIndex={0}
                aria-label={`${item.title} ${item.subtitle}`}
              >
                <div className="beneficio-icon-circle">
                  {item.icon}
                  <span className="beneficio-pulse-ring" aria-hidden="true" />
                </div>
                <p className="beneficio-label">
                  {item.title}
                  <br />
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>

          <div className="section-cta-center">
            <button
              type="button"
              className="btn-navy-pill"
              onClick={scrollToAgendamiento}
            >
              <Icons.Calendar />
              <span>Agendar mi consulta médica</span>
              <Icons.ArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* ================= TRATAMIENTOS MÉDICOS SECTION ================= */}
      <section id="tratamientos" className="tratamientos-section">
        <div className="container">
          <div className="tratamientos-header">
            <div className="tratamientos-header-left">
              <div className="section-eyebrow-left">TRATAMIENTOS MÉDICOS DISPONIBLES</div>
              <h2 className="section-title-left">
                Opciones de tratamiento según
                <br />
                tus necesidades.
              </h2>
            </div>
            <div className="tratamientos-header-right">
              <p>
                Contamos con alternativas farmacológicas aprobadas y ampliamente utilizadas en el manejo del sobrepeso y la obesidad, siempre con indicación médica y seguimiento profesional.
              </p>
            </div>
          </div>

          <div className="tratamientos-cards-grid">
            {/* Card 1: Fentermina */}
            <div className="treatment-card">
              <div className="treatment-card-top">
                <div className="treatment-card-meta">
                  <div className="treatment-icon-badge">
                    <Icons.PillCapsule />
                  </div>
                  <div>
                    <h3 className="treatment-name">Fentermina</h3>
                    <span className="treatment-brands">En todas sus marcas comerciales</span>
                  </div>
                </div>
                <div className="treatment-media-wrap">
                  <img
                    src="/images/med-fentermina.jpg"
                    alt="Comprimido de Fentermina"
                    className="treatment-product-img"
                  />
                </div>
              </div>

              <ul className="treatment-checklist">
                <li>
                  <Icons.CheckCircleSolid />
                  <span>Disminuye el apetito</span>
                </li>
                <li>
                  <Icons.CheckCircleSolid />
                  <span>Ayuda a controlar la ingesta calórica</span>
                </li>
                <li>
                  <Icons.CheckCircleSolid />
                  <span>Opción efectiva para distintos perfiles de pacientes</span>
                </li>
              </ul>

              <button
                type="button"
                className="btn-treatment-card-cta"
                onClick={scrollToAgendamiento}
              >
                <span>Agendar evaluación médica</span>
                <Icons.ArrowRight />
              </button>
            </div>

            {/* Card 2: Semaglutida */}
            <div className="treatment-card">
              <div className="treatment-card-top">
                <div className="treatment-card-meta">
                  <div className="treatment-icon-badge">
                    <Icons.SyringePen />
                  </div>
                  <div>
                    <h3 className="treatment-name">Semaglutida</h3>
                    <span className="treatment-brands">Ozempic® | Wegovy®</span>
                  </div>
                </div>
                <div className="treatment-media-wrap">
                  <img
                    src="/images/med-semaglutida.jpg"
                    alt="Pluma inyectable de Semaglutida"
                    className="treatment-product-img"
                  />
                </div>
              </div>

              <ul className="treatment-checklist">
                <li>
                  <Icons.CheckCircleSolid />
                  <span>Aumenta la saciedad</span>
                </li>
                <li>
                  <Icons.CheckCircleSolid />
                  <span>Ayuda a reducir la ingesta calórica</span>
                </li>
                <li>
                  <Icons.CheckCircleSolid />
                  <span>Favorece una pérdida de peso sostenida</span>
                </li>
                <li>
                  <Icons.CheckCircleSolid />
                  <span>Una de las opciones más utilizadas en el control de peso.</span>
                </li>
              </ul>

              <button
                type="button"
                className="btn-treatment-card-cta"
                onClick={scrollToAgendamiento}
              >
                <span>Agendar evaluación médica</span>
                <Icons.ArrowRight />
              </button>
            </div>

            {/* Card 3: Tirzepatida */}
            <div className="treatment-card">
              <div className="treatment-card-top">
                <div className="treatment-card-meta">
                  <div className="treatment-icon-badge">
                    <Icons.SyringePen />
                  </div>
                  <div>
                    <h3 className="treatment-name">Tirzepatida</h3>
                    <span className="treatment-brands">Mounjaro®</span>
                  </div>
                </div>
                <div className="treatment-media-wrap">
                  <img
                    src="/images/med-tirzepatida.jpg"
                    alt="Pluma inyectable de Tirzepatida"
                    className="treatment-product-img"
                  />
                </div>
              </div>

              <ul className="treatment-checklist">
                <li>
                  <Icons.CheckCircleSolid />
                  <span>Actúa en múltiples vías hormonales</span>
                </li>
                <li>
                  <Icons.CheckCircleSolid />
                  <span>Mayor control del apetito</span>
                </li>
                <li>
                  <Icons.CheckCircleSolid />
                  <span>Pérdida de peso significativa</span>
                </li>
                <li>
                  <Icons.CheckCircleSolid />
                  <span>Opción para pacientes que requieren un mayor control metabólico.</span>
                </li>
              </ul>

              <button
                type="button"
                className="btn-treatment-card-cta"
                onClick={scrollToAgendamiento}
              >
                <span>Agendar evaluación médica</span>
                <Icons.ArrowRight />
              </button>
            </div>
          </div>

          <div className="tratamientos-bottom-cta-banner">
            <div className="bottom-cta-text">
              <strong>¿No estás seguro de cuál tratamiento es para ti?</strong>
              <p>Tu médico especialista evaluará tus antecedentes clínicos y objetivos para recetar la opción más segura y personalizada en tu consulta online.</p>
            </div>
            <button
              type="button"
              className="btn-navy-pill"
              onClick={scrollToAgendamiento}
            >
              <Icons.Calendar />
              <span>Evaluar mi caso con un médico</span>
              <Icons.ArrowRight />
            </button>
          </div>
        </div>
      </section>

            {/* ================= SECCIÓN DE AGENDAMIENTO ONLINE (RESERVO) ================= */}
      <section id="agendamiento" className="agendamiento-section">
        <div id="agendar" className="anchor-offset" />
        <div className="container">
          <div className="agendamiento-header-center">
            <div className="section-eyebrow-center">
              <span className="live-status-dot" style={{ marginRight: '6px' }} />
              AGENDAMIENTO OFICIAL EN LÍNEA
            </div>
            <h2 className="section-title-center">Agenda tu consulta médica online</h2>
            <p className="agendamiento-subheading">
              Selecciona el profesional, día y horario que mejor se adapte a ti a través de nuestra plataforma oficial. Atención médica personalizada por videollamada y emisión de receta médica digital en todo Chile.
            </p>
          </div>

          {/* Micro-tarjetas de confianza */}
          <div className="agendamiento-badges-grid">
            <div className="agenda-trust-badge">
              <div className="trust-badge-icon">
                <Icons.DoctorBadge />
              </div>
              <div className="trust-badge-info">
                <strong>Médicos Registrados</strong>
                <span>Acreditados por la Superintendencia de Salud</span>
              </div>
            </div>

            <div className="agenda-trust-badge">
              <div className="trust-badge-icon">
                <Icons.PrescriptionFile />
              </div>
              <div className="trust-badge-info">
                <strong>Receta Digital Oficial</strong>
                <span>Válida en farmacias físicas y online de todo Chile</span>
              </div>
            </div>

            <div className="agenda-trust-badge">
              <div className="trust-badge-icon">
                <Icons.ShieldCheck />
              </div>
              <div className="trust-badge-info">
                <strong>Confirmación Inmediata</strong>
                <span>Cita reservada al instante con recordatorios</span>
              </div>
            </div>
          </div>

          {/* Tarjeta contenedora con la plataforma oficial Reservo */}
          <div className="agendamiento-card">
            <div className="agendamiento-card-topbar">
              <div className="card-topbar-left">
                <span className="live-status-dot" />
                <span className="card-topbar-title">Plataforma oficial de reservas médicas</span>
              </div>
              <div className="card-topbar-right">
                <span className="card-topbar-tag">Atención 100% Online</span>
              </div>
            </div>

            <div className="reservo-iframe-wrapper">
              <iframe
                title="Sistema de Agendamiento Oficial Halomed - Reservo"
                style={{
                  overflow: 'hidden',
                  borderRadius: '10px',
                  marginBottom: '20px',
                  width: '100%',
                  minHeight: '600px',
                  border: 0,
                  display: 'block'
                }}
                src="https://agendamiento.reservo.cl/makereserva/agenda/p0V3aoG0m049gy1O2N87SKi8K2598G"
                width="100%"
                height="600"
                frameBorder="0"
              />
              <div className="reservo-attribution-footer">
                <a
                  href="https://www.reservo.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reservo-link"
                >
                  Powered by Reservo
                </a>
              </div>
            </div>
          </div>

          {/* Banner de soporte directo por WhatsApp */}
          <div className="agendamiento-help-banner">
            <div className="help-banner-content">
              <div className="help-banner-icon">
                <Icons.WhatsApp size={22} />
              </div>
              <div className="help-banner-text">
                <strong>¿Necesitas asistencia con tu reserva o resolver dudas?</strong>
                <p>Nuestro equipo de soporte Halomed está disponible al <strong>+56 9 2396 3400</strong> para ayudarte a agendar directamente por WhatsApp.</p>
              </div>
            </div>
            <a
              href="https://wa.me/56923963400?text=Hola%2C%20necesito%20ayuda%20para%20agendar%20mi%20consulta%20m%C3%A9dica%20en%20Halomed"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-help-whatsapp"
            >
              <span>WhatsApp +56 9 2396 3400</span>
              <Icons.ArrowRight />
            </a>
          </div>
        </div>
      </section>


            {/* ================= ¿CÓMO FUNCIONA? ================= */}
      <section id="como-funciona" className="pasos-section">
        <div className="container">
          <div className="section-eyebrow-center">¿CÓMO FUNCIONA?</div>
          <h2 className="section-title-center">Tu tratamiento en simples pasos.</h2>

          <div className="pasos-flow-grid">
            {/* Paso 1 */}
            <div
              className="paso-item paso-item-clickable"
              onClick={scrollToAgendamiento}
              style={{ cursor: 'pointer' }}
              title="Haz clic para ir directamente al agendamiento"
            >
              <div className="paso-badge-row">
                <div className="paso-num-circle">1</div>
                <div className="paso-icon">
                  <Icons.Calendar />
                </div>
              </div>
              <h3 className="paso-title">Agenda tu consulta</h3>
              <p className="paso-desc">Elige el día y horario que más te acomode.</p>
            </div>

            <div className="paso-connector" aria-hidden="true">
              <Icons.StepArrow />
            </div>

            {/* Paso 2 */}
            <div className="paso-item">
              <div className="paso-badge-row">
                <div className="paso-num-circle">2</div>
                <div className="paso-icon">
                  <Icons.VideoCamera />
                </div>
              </div>
              <h3 className="paso-title">Consulta online</h3>
              <p className="paso-desc">Te evaluamos por videollamada y definimos el plan de tratamiento.</p>
            </div>

            <div className="paso-connector" aria-hidden="true">
              <Icons.StepArrow />
            </div>

            {/* Paso 3 */}
            <div className="paso-item">
              <div className="paso-badge-row">
                <div className="paso-num-circle">3</div>
                <div className="paso-icon">
                  <Icons.PrescriptionFile />
                </div>
              </div>
              <h3 className="paso-title">Recibe tu indicación</h3>
              <p className="paso-desc">Si está indicado, te enviamos la receta médica digital.</p>
            </div>

            <div className="paso-connector" aria-hidden="true">
              <Icons.StepArrow />
            </div>

            {/* Paso 4 */}
            <div className="paso-item">
              <div className="paso-badge-row">
                <div className="paso-num-circle">4</div>
                <div className="paso-icon">
                  <Icons.StepChart />
                </div>
              </div>
              <h3 className="paso-title">Seguimiento continuo</h3>
              <p className="paso-desc">Controles periódicos para ajustar y acompañar tu progreso.</p>
            </div>
          </div>

          <div className="section-cta-center">
            <button
              type="button"
              className="btn-hero-primary"
              onClick={scrollToAgendamiento}
            >
              <Icons.Calendar />
              <span>Elegir fecha y hora de atención</span>
              <Icons.ArrowRight />
            </button>
          </div>
        </div>
      </section>




            {/* ================= ACOMPAÑAMIENTO REAL (EXPANDIDO / MÁS ORDENADO) ================= */}
      <section id="telemedicina" className="banner-acompanamiento-section">
        <div className="container">
          <div className="acompanamiento-banner-expanded">
            {/* Ambient subtle glowing orbs */}
            <div className="acompanamiento-orb orb-1" aria-hidden="true" />
            <div className="acompanamiento-orb orb-2" aria-hidden="true" />

            {/* Columna 1: Fotografía inmersiva */}
            <div className="acompanamiento-media-expanded">
              <img
                src="/images/doctor-call.jpg"
                alt="Médica especialista de Halomed en videoconsulta personalizada"
                className="acompanamiento-img-expanded"
              />
              <div className="acompanamiento-pill-tag">
                <Icons.DoctorBadge />
                <span>Atención médica 1 a 1</span>
              </div>
            </div>

            {/* Columna 2: Contenido editorial enriquecido */}
            <div className="acompanamiento-content-expanded">
              <div className="acompanamiento-eyebrow">ACOMPAÑAMIENTO REAL</div>
              <h2 className="acompanamiento-title">No estás solo en el proceso.</h2>
              <p className="acompanamiento-desc">
                Te acompañamos con controles periódicos, ajuste médico de dosis y orientación clínica para que logres resultados sostenibles, cómodos y seguros.
              </p>

              {/* 3 Pilares clave de atención médica estructurados */}
              <div className="acompanamiento-pillars">
                <div className="pillar-item">
                  <div className="pillar-icon-bubble">
                    <Icons.VideoCamera />
                  </div>
                  <div className="pillar-text">
                    <strong>Control periódico 1 a 1</strong>
                    <p>Revisiones médicas por videollamada para evaluar tu avance.</p>
                  </div>
                </div>

                <div className="pillar-item">
                  <div className="pillar-icon-bubble">
                    <Icons.ShieldCheck />
                  </div>
                  <div className="pillar-text">
                    <strong>Ajuste médico de dosis</strong>
                    <p>Optimización progresiva según tu tolerancia metabólica.</p>
                  </div>
                </div>

                <div className="pillar-item">
                  <div className="pillar-icon-bubble">
                    <Icons.PrescriptionFile />
                  </div>
                  <div className="pillar-text">
                    <strong>Receta digital inmediata</strong>
                    <p>Emisión electrónica de tus recetas y órdenes médicas.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna 3: CTA y Checklist ordenados */}
            <div className="acompanamiento-actions-expanded">
              <div className="acompanamiento-card-cta">
                <div className="cta-card-header">
                  <span className="cta-card-tag">ONLINE EN TODO CHILE</span>
                  <h3 className="cta-card-title">Comienza tu evaluación médica hoy</h3>
                </div>

                <button
                  type="button"
                  className="btn-acompanamiento-cta-expanded"
                  onClick={scrollToAgendamiento}
                >
                  <Icons.Calendar />
                  <span>Agendar consulta online</span>
                  <Icons.ArrowRight />
                </button>

                <div className="acompanamiento-checklist-expanded">
                  <div className="checklist-row">
                    <span className="check-bullet">✓</span>
                    <span>Evaluación médica completa</span>
                  </div>
                  <div className="checklist-row">
                    <span className="check-bullet">✓</span>
                    <span>Tratamiento personalizado</span>
                  </div>
                  <div className="checklist-row">
                    <span className="check-bullet">✓</span>
                    <span>Seguimiento y controles</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


            {/* ================= HISTORIAS REALES (LOOP INFINITO ESTILO HEALIO / HALOMED) ================= */}
      <section id="opiniones" className="historias-section">
        <div className="container">
          <div className="reviews-showcase-card">
            {/* Encabezado centrado estilo Healio */}
            <div className="reviews-showcase-header">
              <h2 className="reviews-showcase-title">
                Qué dicen los pacientes sobre <span className="brand-accent">HaloMed</span>
              </h2>
              <p className="reviews-showcase-subtitle">
                HaloMed trabaja con médicos y profesionales certificados dedicados a un acompañamiento clínico cercano, seguro y centrado en resultados reales.
              </p>
            </div>

            {/* Loop Infinito de testimonios en UNA SOLA LÍNEA */}
            <div className="reviews-marquee-box" aria-label="Carrusel continuo de testimonios de pacientes">
              <div className="reviews-marquee-track reviews-track-single">
                {PACIENTES_REVIEWS.map((review) => (
                  <HealioReviewCard key={`r-a-${review.id}`} review={review} />
                ))}
                {PACIENTES_REVIEWS.map((review) => (
                  <HealioReviewCard key={`r-b-${review.id}`} review={review} ariaHidden={true} />
                ))}
              </div>
            </div>

            <div className="reviews-cta-footer">
              <p className="reviews-cta-text">
                Únete a los pacientes que ya alcanzaron sus objetivos de salud con apoyo médico certificado.
              </p>
              <button
                type="button"
                className="btn-navy-pill"
                onClick={scrollToAgendamiento}
              >
                <Icons.Calendar />
                <span>Agendar consulta online</span>
                <Icons.ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>



      {/* ================= MINIMALIST DARK BLUE FOOTER ================= */}
      <footer className="site-footer">
        <div className="container footer-container">
          {/* Fila principal del footer */}
          <div className="footer-top-row">
            {/* Columna Marca */}
            <div className="footer-brand-col">
              <a href="#inicio" className="footer-brand-link" aria-label="Halomed Telemedicina">
                <HalomedIsotipo size={34} />
                <div className="footer-brand-text">
                  <span className="footer-wordmark">HALOMED</span>
                  <span className="footer-subword">TELEMEDICINA</span>
                </div>
              </a>
              <p className="footer-tagline">
                Atención médica y tratamientos personalizados para el control de peso con acompañamiento continuo, 100% online en todo Chile.
              </p>
            </div>

            {/* Enlaces Rápidos */}
            <nav className="footer-nav-col" aria-label="Enlaces del pie de página">
              <div className="footer-nav-heading">Navegación</div>
              <ul className="footer-links-list">
                <li><a href="#inicio" className="footer-link">Inicio</a></li>
                <li><a href="#beneficios" className="footer-link">Beneficios</a></li>
                <li><a href="#tratamientos" className="footer-link">Tratamientos</a></li>
                <li><a href="#como-funciona" className="footer-link">¿Cómo funciona?</a></li>
                <li><a href="#opiniones" className="footer-link">Opiniones</a></li>
                <li><a href="#agendamiento" className="footer-link" onClick={scrollToAgendamiento}>Agendar hora</a></li>
              </ul>
            </nav>

            {/* Columna Consulta y Acciones */}
            <div className="footer-action-col">
              <div className="footer-nav-heading">Atención Médica</div>
              <p className="footer-action-text">
                Comienza hoy tu tratamiento de forma segura y guiada por especialistas.
              </p>
              <button
                type="button"
                className="btn-footer-cta"
                onClick={scrollToAgendamiento}
              >
                <Icons.Calendar />
                <span>Agendar consulta online</span>
                <Icons.ArrowRight />
              </button>

              <a
                href="https://www.instagram.com/halomedtelemedicina/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-instagram-link"
                title="Síguenos en Instagram @halomedtelemedicina"
              >
                <Icons.Instagram />
                <span>Síguenos en Instagram</span>
              </a>
            </div>
          </div>

          {/* Divisor minimalista */}
          <div className="footer-divider" />

          {/* Fila inferior: Copyright y Crédito noweb.dev */}
          <div className="footer-bottom-row">
            <div className="footer-copy">
              © {CURRENT_YEAR} Halomed Telemedicina. Todos los derechos reservados.
            </div>

            <div className="footer-credit">
              <span>desarrollado por</span>
              <a
                href="https://www.instagram.com/noweb.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-author-link"
                title="noweb.dev"
              >
                <strong>noweb.dev</strong>
              </a>
            </div>
          </div>

          {/* Nota médica aclaratoria */}
          <div className="footer-disclaimer">
            La prescripción y dosificación de fármacos para el control del peso está sujeta a la evaluación y criterio del médico tratante en cada caso particular.
          </div>
        </div>
      </footer>

      {/* ================= MODAL INTERACTIVO DE AGENDAMIENTO ================= */}
      {modalOpen && (
        <div
          className="modal-backdrop"
          onClick={() => setModalOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div className="modal-card modal-card-reservo" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setModalOpen(false)}
              aria-label="Cerrar modal"
            >
              ✕
            </button>
            <div className="modal-header-brand">
              <HalomedIsotipo size={32} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span className="modal-brand-title">HALOMED TELEMEDICINA</span>
                <span style={{ fontSize: '11px', color: '#0096D6', fontWeight: 600 }}>Plataforma Oficial de Agendamiento</span>
              </div>
            </div>
            <h3 className="modal-h3">Agenda tu consulta médica online</h3>
            <p className="modal-sub">
              Control de peso con acompañamiento médico y seguimiento continuo desde cualquier lugar de Chile.
            </p>
            <div className="modal-reservo-embed">
              <iframe
                title="Agendamiento Halomed Reservo Modal"
                style={{
                  overflow: 'hidden',
                  borderRadius: '10px',
                  marginBottom: '20px',
                  width: '100%',
                  minHeight: '580px',
                  border: 0,
                  display: 'block'
                }}
                src="https://agendamiento.reservo.cl/makereserva/agenda/p0V3aoG0m049gy1O2N87SKi8K2598G"
                width="100%"
                height="600"
                frameBorder="0"
              />
              <div style={{ textAlign: 'center', paddingTop: '4px' }}>
                <a
                  href="https://www.reservo.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reservo-link"
                >
                  Powered by Reservo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Botón flotante oficial de WhatsApp */}
      <a
        href="https://wa.me/56923963400?text=Hola%2C%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20tratamiento%20y%20agendamiento%20Halomed"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        aria-label="Contactar por WhatsApp al +56 9 2396 3400"
      >
        <Icons.MessageChat size={28} />
        <span className="floating-whatsapp-tooltip">Enviar mensaje (+56 9 2396 3400)</span>
      </a>
    </div>
  )
}
