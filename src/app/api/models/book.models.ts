import mongoose, { Schema, Model } from "mongoose";

export interface BookDocument {
  titulo: string;
  descripcion: string;
  genero: string;
  image: string;
  link: string;
}

const bookCollection = "books";

const bookSchema = new Schema<BookDocument>({
  titulo: {
    type: String,
    unique: true,
  },
  descripcion: String,
  genero: String,
  image: String,
  link: String,
});

export const bookModel: Model<BookDocument> =
  (mongoose.models[bookCollection] as Model<BookDocument>) ||
  mongoose.model<BookDocument>(bookCollection, bookSchema);
