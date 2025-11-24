'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

const NotFound = () => {

    const router = useRouter()

    return (
        <>
            <h1 className='notfoundtitulo'>¡Pagina no encontrada!</h1>
            <button className='mx-auto block text-heading bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5' onClick={() => router.back()}>Volver al inicio</button>
        </>
    )
}

export default NotFound