'use client'

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
    {
        label: 'Inicio',
        href: '/'
    },
    {
        label: 'Obras',
        href: '/obras'
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
            <header className="header">
                <Image className="logo" src='/butterflylogo.png' width={100} height={100} alt="butterfly" unoptimized/> 
                <nav className="navbar">
                    {
                        links.map((link) => {
                            return <Link key={link.label} href={link.href} className={`${pathname === link.href ? 'navbuttonactive' : 'navbutton'}`}>
                                {link.label}
                            </Link>
                        })
                    }
                </nav>
            </header>
        </>
    )
}