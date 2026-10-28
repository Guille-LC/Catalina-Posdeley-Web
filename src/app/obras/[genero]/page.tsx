import Bookcard from '../components/Bookcard'
import GeneroInvalido from '../components/GeneroInvalido'
import styles from '@/styles/app/obras/[genero]/page.module.scss'
import Nobooks from '../components/Nobooks'
import Link from 'next/link'
import { getBooks } from '@/lib/getBooks'

export const dynamic = 'force-dynamic'

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

interface ObrasGeneroProps {
  params: Promise<{ genero: string }>
}

export default async function ObrasGenero({ params }: ObrasGeneroProps) {
  const { genero } = await params;

  const books = await getBooks();

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
        <Link className={genero === 'all' ? styles.generoBotonActivo : styles.generoBoton} href="/obras/all">Todos</Link>
        <Link className={genero === 'Juvenil' ? styles.generoBotonActivo : styles.generoBoton} href="/obras/Juvenil">Juvenil</Link>
        <Link className={genero === 'Suspenso' ? styles.generoBotonActivo : styles.generoBoton} href="/obras/Suspenso">Suspenso</Link>
        <Link className={genero === 'Aventura' ? styles.generoBotonActivo : styles.generoBoton} href="/obras/Aventura">Aventura</Link>
        <Link className={genero === 'Fantasia' ? styles.generoBotonActivo : styles.generoBoton} href="/obras/Fantasia">Fantasia</Link>
        <Link className={genero === 'Poesia' ? styles.generoBotonActivo : styles.generoBoton} href="/obras/Poesia">Poesia</Link>
      </section>

      {items.map(book => (
        <Bookcard key={book._id} data={book} />
      ))}
    </div>
  )
}
