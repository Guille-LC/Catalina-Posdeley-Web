'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

const NotFound = () => {

    const router = useRouter()

    return (
        <>
            <h1 className='notfoundtitulo'>¡Pagina no encontrada!</h1>
            <button
                className='mx-auto block text-white font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 transition-opacity hover:opacity-90'
                style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' }}
                onClick={() => router.back()}
            >
                Volver al inicio
            </button>
        </>
    )
}

export default NotFound