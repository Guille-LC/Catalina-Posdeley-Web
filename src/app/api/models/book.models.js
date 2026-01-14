import mongoose, {Schema} from "mongoose";

const bookCollection = "books"

const bookSchema = new mongoose.Schema({
    titulo: {
        type: String,
        unique: true
    },
    descripcion: String,
    genero: String,
    image: String,
    link: String
})

export const bookModel = mongoose.model(bookCollection,bookSchema)