'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import styles from '../[genero]/page.module.css'

const GeneroInvalido = () => {

  const router = useRouter();

  return (
    <>
      <h1 className={styles.titulonoencontrado}>El genero que estas buscando no existe...</h1>
      <button className={styles.volveratras} onClick={() => router.back()}>Volver atras</button>
    </>
  )
}

export default GeneroInvalido