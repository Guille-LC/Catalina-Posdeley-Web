'use client'

import Image from "next/image"
import Link from "next/link"

export function Header() {

    return(
        <>
            <header className="header">
                <Image className="logo" src='/butterflylogo.png' width={100} height={100} alt="butterfly" unoptimized/> 
                <nav className="navbar">
                    <Link className="navbutton" href={'/'}>Inicio</Link>
                    <Link className="navbutton" href={'/obras'}>Obras</Link>
                    <Link className="navbutton" href={'/autora'}>La autora</Link>
                    <Link className="navbutton" href={'/newsletter'}>Newsletter</Link>
                </nav>
            </header>
        </>
    )
}