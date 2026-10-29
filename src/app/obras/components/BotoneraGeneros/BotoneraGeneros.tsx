'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from '@/styles/app/obras/components/BotoneraGeneros/BotoneraGeneros.module.scss'

interface GeneroLink {
    label: string
    genero: string
}

const generos: GeneroLink[] = [
    { label: 'Todos', genero: 'all' },
    { label: 'Juvenil', genero: 'Juvenil' },
    { label: 'Suspenso', genero: 'Suspenso' },
    { label: 'Aventura', genero: 'Aventura' },
    { label: 'Fantasia', genero: 'Fantasia' },
    { label: 'Poesia', genero: 'Poesia' },
]

const BotoneraGeneros = () => {
    const pathname = usePathname()

    return (
        <section className={styles.botoneraGeneros}>
            <nav className={styles.menubar}>
                {generos.map((g) => (
                    <Link
                        key={g.genero}
                        className={pathname === `/obras/${g.genero}` ? styles.generoBotonActivo : styles.generoBoton}
                        href={`/obras/${g.genero}`}
                    >
                        {g.label}
                    </Link>
                ))}
            </nav>
        </section>
    )
}

export default BotoneraGeneros
