import React from 'react'
import Bookcard from '../components/Bookcard'
import books from '../data/books.js'

export default async function ObrasGenero({ params }) {

  const { genero } = await params;

  const generosValidos = [...new Set(books.map(b => b.genero))];

  const generoInvalido = genero !== 'all' && !generosValidos.includes(genero);

  if (generoInvalido) {
    return <h3>El género "{genero}" no existe.</h3>;
  }

  const item = genero === 'all'
    ? books
    : books.filter(item => item.genero === genero)

  return (
    <>
      <h3>Libros de genero: {genero}</h3>
      <div>
        {item.map((book) => (
          <Bookcard key={book.id} data={book} />
        ))}
      </div>
    </>
  )
}