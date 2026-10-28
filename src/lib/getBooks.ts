import { bookModel } from "@/app/api/models/book.models";
import { connectToDB } from "@/lib/mongoose";
import type { Book } from "@/types/book";

export async function getBooks(): Promise<Book[]> {
  await connectToDB();
  const books = await bookModel.find({});
  return JSON.parse(JSON.stringify(books));
}
