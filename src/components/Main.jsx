import React from 'react';
import Image from "next/image";
import Link from 'next/link';

const Main = () => {
    return (
        <>
            <main>
                <section>
                    <div className='presentation'>
                        <span className='titulonombre'>Catalina Elvira Posdeley</span>
                            <p className='info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla erat nulla, malesuada vitae bibendum sed, tristique in purus. Donec imperdiet eleifend mollis. In ac pharetra enim. In luctus ultricies vulputate. Phasellus vitae dui nec purus ullamcorper lacinia. Pellentesque vestibulum eu ex ut suscipit. In at tellus consequat, vulputate magna non, molestie eros. Nam sit amet varius dui, ac elementum eros.</p>
                        <Link href={'/autora'}>
                            <span className="leermas">Leer mas...</span>
                        </Link>
                    </div>
                </section>
                <section className='mainsection'>
                    <h2 className='h2'>Obras Completas</h2>
                    <Image src={'/banner.png'} width={500} height={150} alt='banner'/>
                </section>
                <section className='mainsection'>
                    <h2 className='h2'>Mis redes</h2>
                    A DEFINIR
                </section>
            </main>
        </>
    )
}

export default Main