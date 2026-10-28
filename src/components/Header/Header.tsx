'use client'

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "@/styles/components/Header/Header.module.scss"

interface NavLink {
    label: string
    href: string
}

const links: NavLink[] = [
    {
        label: 'Inicio',
        href: '/'
    },
    {
        label: 'Obras',
        href: '/obras/all'
    },
    {
        label: 'La autora',
        href: '/autora'
    },
    {
        label: 'Newsletter',
        href: '/newsletter'
    }
]

export function Header() {

    const pathname = usePathname()

    return(
        <>
            <header className={styles.header}>
                <Image className={styles.logo} src='/butterfly-logo.png' width={100} height={100} alt="butterfly" unoptimized/>
                <nav className={styles.navbar}>
                    {
                        links.map((link) => {
                            return <Link key={link.label} href={link.href} className={pathname === link.href ? styles.navbuttonactive : styles.navbutton}>
                                {link.label}
                            </Link>
                        })
                    }
                </nav>
            </header>
        </>
    )
}
