'use client'

import Image from "next/image"

export function Header() {

    return(
        <>
            <header className="header">
                <Image src='/butterflylogo.png' width={200} height={200} alt="butterfly" unoptimized/>
                <nav>
                    <a href="">Inicio</a>
                    <a href="">Obras</a>
                    <a href="">La autora</a>
                    <a href="">Newsletter</a>
                </nav>
            </header>
        </>
    )
}