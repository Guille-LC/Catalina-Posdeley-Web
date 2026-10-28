'use client'

import { useRouter } from 'next/navigation'
import styles from '@/styles/app/obras/components/GeneroInvalido/GeneroInvalido.module.scss'

const GeneroInvalido = () => {

  const router = useRouter();

  return (
    <>
      <h1 className={styles.titulonoencontrado}>El genero que estas buscando no existe...</h1>
    <div className={styles.botonvolverwrap}>
      <button className={styles.volveratras} onClick={() => router.back()}>Volver atras</button>
    </div>
    </>
  )
}

export default GeneroInvalido
