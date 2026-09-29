import { getBooks } from "@/lib/getBooks.js";

export async function GET() {

  try {
    const books = await getBooks()
    console.log(`Conectado a la base de datos de Mongo`)
    return Response.json({
      success: true,
      data: books
    })
  } catch (error) {
    console.error(` Error al conectar a la base de datos: ${error.message} `)
    return Response.json(
      {
        success: false,
        message: "Database connection error",
      },
      {
        status: 500,
      }
    )
  }
}
