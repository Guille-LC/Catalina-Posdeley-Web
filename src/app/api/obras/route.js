import mongoose from "mongoose";
import {bookModel} from "../models/book.models.js"
import { connectToDB } from "@/lib/mongoose.js";

export async function GET() {

    try {

      const conectionToMongoose = await connectToDB()

      const books = await bookModel.find({})

      console.log(`Conectado a la base de datos de Mongo`)

      return Response.json({
        success: true,
        data: books
      })

    } catch (error) {
      console.error("No se pudo conectar a mongoose...")
    }
}
