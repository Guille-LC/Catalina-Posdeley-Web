import React from 'react'
import Bookcard from '../components/Bookcard'
import books from '../data/books.js'
import GeneroInvalido from '../components/GeneroInvalido';
import styles from './page.module.css'

export default async function ObrasGenero({ params }) {

  const { genero } = await params;

  const generosValidos = [...new Set(books.map(b => b.genero))];

  const generoInvalido = genero !== 'all' && !generosValidos.includes(genero);

  if (generoInvalido) {
    return (
      <GeneroInvalido />
    )
  }

  const item = genero === 'all'
    ? books
    : books.filter(item => item.genero === genero)

  return (
    <>
      <h3>Libros de genero: {genero}</h3>
      <div className={styles.bookcardwrap}>
        {item.map((book) => (
          <Bookcard key={book.id} data={book} />
        ))}
      </div>
    </>
  )
}