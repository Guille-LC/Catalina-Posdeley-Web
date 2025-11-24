import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Obras = () => {
  return (
    <>
      <h1 className={styles.tituloobrascompletas}>Obras Completas</h1>
      <div className={styles.libro}>
        <h2 className={styles.titulolibro}>Por si no me recuerdas mañana</h2>
        <div className={styles.libroinfoflex}>
          <p className={styles.resumen}>¿Qué pasaría si un día la gente de repente te empieza a olvidar? Desapareces de las fotos donde estabas y tus amigos y familia no saben quién sos. ¿Qué harías?</p>
          <Image src={'/porsinomerecuerdasmanana.jpg'} width={200} height={600}/>
        </div>
        <Link href={'https://booknet.com/es/book/por-si-no-me-recuerdas-manana-b455927'} target="_blank" rel="noopener noreferrer">
          <button className={styles.botonleergratis}>Leer gratis</button>
        </Link>
      </div>
    </>
  )
}

export default Obras