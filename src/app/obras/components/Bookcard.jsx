import React from 'react'
import styles from '../[genero]/page.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Bookcard = ({data}) => {
    return (
        <>
            <div className={styles.libro}>
                <div>
                    <Image className={styles.imagendeportada} src={data.image} width={250} height={650} alt={data.titulo} />
                </div>
                <div className={styles.libroinfoflex}>
                    <h2 className={styles.titulolibro}>{data.titulo}</h2>
                    <p className={styles.resumen}>{data.descripcion}</p>
                </div>
                <div className={styles.botonwrap}>
                    <Link href={data.link} target="_blank" rel="noopener noreferrer">
                        <button className={styles.botonleergratis}>Leer gratis</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Bookcard