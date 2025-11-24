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
                <section>
                    <h2 className='titulolesroutes'>Les Routes: La Teoria del Caos</h2>
                    <div className='seccionultimolibro'>
                        <p className='resumenlesroutes'>Connor se muda al misterioso pueblo de Odimor para comenzar de cero. Sin embargo, la escuela allí no es lo que esperaba: se mete en peleas para defenderse, no asiste a clase porque se siente exiliado y se lleva mal con los profesores, por lo que está a punto de ser expulsado de la institución. Al intentar enderezar su camino, conoce a una chica marginada, de la cual nadie habla y a la que nadie mira; solo le aconsejan que no se acerque a ella, pues es peligrosa. Eso despierta su curiosidad.
                        Connor acepta ciegamente lo que el destino le depara, cada caricia y cada golpe, sin preguntar por qué. Pronto descubrirá que sus amigos, enemigos y conocidos no fueron sinceros. ¿Cuánto tiempo aguantará?</p>
                        <Image src={'/lesroutescover.png'} width={300} height={1100} alt='lesroutes'/>
                    </div>
                    <div>
                        <Link href={'https://www.buscalibre.com.ar/libro-les-routes/9786316624475/p/64312491'}>
                            <button type="button" className="botonbuscalibre mx-auto block text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Buscalibre</button>
                        </Link>
                    </div>
                </section>
                <section className='mainsection'>
                    <h2 className='h2'>Obras Completas</h2>
                    <Link href={'/obras'}>
                        <Image src={'/banner.png'} width={500} height={150} alt='banner'/>
                    </Link>
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