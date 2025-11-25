import React from 'react'
import styles from '../[genero]/page.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Bookcard = ({data}) => {
    return (
        <>
            <div className={styles.libro}>
                <h2 className={styles.titulolibro}>{data.titulo}</h2>
                <div className={styles.libroinfoflex}>
                    <p className={styles.resumen}>{data.descripcion}</p>
                    <p>{data.genero}</p>
                    <Image src={data.image} width={200} height={600} alt={data.titulo} />
                </div>
                <Link href={data.link} target="_blank" rel="noopener noreferrer">
                    <button className={styles.botonleergratis}>Leer gratis</button>
                </Link>
            </div>
        </>
    )
}

export default Bookcard