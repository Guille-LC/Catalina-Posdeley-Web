'use client'

import { useEffect, useState } from 'react'

export function ScrollToTop() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 400)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Volver arriba"
            aria-hidden={!visible}
            tabIndex={visible ? 0 : -1}
            className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center w-12 h-12 rounded-full text-white shadow-lg transition-all duration-500 ease-out hover:-translate-y-1 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
            style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19V5" />
                <path d="M5 12l7-7 7 7" />
            </svg>
        </button>
    )
}
