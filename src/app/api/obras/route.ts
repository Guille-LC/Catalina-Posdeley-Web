import { getBooks } from "@/lib/getBooks";

export async function GET() {
  try {
    const books = await getBooks();
    console.log(`Conectado a la base de datos de Mongo`);
    return Response.json({
      success: true,
      data: books,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`Error al conectar a la base de datos: ${message}`);
    return Response.json(
      {
        success: false,
        message: "Database connection error",
      },
      {
        status: 500,
      }
    );
  }
}
