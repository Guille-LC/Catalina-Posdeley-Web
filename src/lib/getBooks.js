import { bookModel } from "@/app/api/models/book.models.js";
import { connectToDB } from "@/lib/mongoose.js";

export async function getBooks() {
  await connectToDB();
  const books = await bookModel.find({});
  return JSON.parse(JSON.stringify(books));
}
