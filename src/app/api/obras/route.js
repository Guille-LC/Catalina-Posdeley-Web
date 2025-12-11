import { NextResponse } from "next/server";
import books from '../../obras/data/books.js'

export async function GET() {
    return NextResponse.json(books)
}