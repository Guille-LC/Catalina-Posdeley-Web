import { NextResponse } from "next/server";
import books from '../../obras/data/books.js';
import { revalidatePath } from "next/cache.js";

export async function GET() {

    revalidatePath('/api/obras')

    return NextResponse.json(books)
}