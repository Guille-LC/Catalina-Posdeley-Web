'use client'

import { useRouter } from 'next/navigation'
import styles from '@/styles/app/obras/components/Nobooks/Nobooks.module.scss'

const Nobooks = () => {

    const router = useRouter()

    return (
        <>
            <h1 className={styles.titulonoencontrado}>No hay libros disponibles en este momento</h1>
            <div className={styles.botonvolverwrap}>
                <button className={styles.volveratras} onClick={() => router.back()}>Volver atras</button>
            </div>
        </>
    )
}

export default Nobooks
