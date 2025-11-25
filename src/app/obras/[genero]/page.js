import React from 'react'
import Bookcard from '../components/Bookcard'
import books from '../data/books.js'

export default async function ObrasGenerp({params}) {

  const {genero} = await params;

  return (
    <>
      <h3>Libros de genero: {genero}</h3>
      <div>
        {books.map((book) => (
          <Bookcard key={book.id} data={book}/>
        ))}
      </div>
    </>
  )
}