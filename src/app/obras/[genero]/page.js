import React from 'react'
import Bookcard from '../components/Bookcard'
import GeneroInvalido from '../components/GeneroInvalido'
import styles from './page.module.css'
import Nobooks from '../components/Nobooks'
import Link from 'next/link'

export function generateStaticParams() {
  return [
    { genero: 'all' },
    { genero: 'Juvenil' },
    { genero: 'Suspenso' },
    { genero: 'Aventura' },
    { genero: 'Fantasia' },
    { genero: 'Poesia' },
  ]
}

export default async function ObrasGenero({ params }) {
  const { genero } = await params;

  const res = await fetch("http://localhost:3000/api/obras", {
    cache: "no-store",
  });

  const json = await res.json();
  const books = json.data;

  if (!books || books.length === 0) return <Nobooks />;

  const generosValidos = [...new Set(books.map(b => b.genero))];
  const generoInvalido = genero !== 'all' && !generosValidos.includes(genero);

  if (generoInvalido) return <GeneroInvalido />;

  const items =
    genero === 'all'
      ? books
      : books.filter(book => book.genero === genero);

  return (
    <div className={styles.bookcardwrap}>
      <section className={styles.botoneraGeneros}>
        <Link className={styles.generoBoton} href="/obras/all">Todos</Link>
        <Link className={styles.generoBoton} href="/obras/Juvenil">Juvenil</Link>
        <Link className={styles.generoBoton} href="/obras/Suspenso">Suspenso</Link>
        <Link className={styles.generoBoton} href="/obras/Aventura">Aventura</Link>
        <Link className={styles.generoBoton} href="/obras/Fantasia">Fantasia</Link>
        <Link className={styles.generoBoton} href="/obras/Poesia">Poesia</Link>
      </section>

      {items.map(book => (
        <Bookcard key={book._id} data={book} />
      ))}
    </div>
  )
}
