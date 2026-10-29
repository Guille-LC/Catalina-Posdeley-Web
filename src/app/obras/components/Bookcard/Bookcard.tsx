import styles from '@/styles/app/obras/components/Bookcard/Bookcard.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import type { Book } from '@/types/book'

interface BookcardProps {
    data: Book
    index?: number
}

const Bookcard = ({ data, index = 0 }: BookcardProps) => {
    return (
        <Link
            className={styles.libro}
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ animationDelay: `${Math.min(index, 8) * 70}ms` }}
        >
            <Image
                className={styles.imagendeportada}
                src={data.image}
                width={220}
                height={320}
                alt={data.titulo}
            />
            <div className={styles.libroinfoflex}>
                <h2 className={styles.titulolibro}>{data.titulo}</h2>
                <p className={styles.resumen}>{data.descripcion}</p>
                <span className={styles.botonleergratis}>
                    Leer gratis
                    <svg
                        className={styles.flecha}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <path d="M5 12h14" />
                        <path d="m13 6 6 6-6 6" />
                    </svg>
                </span>
            </div>
        </Link>
    )
}

export default Bookcard
