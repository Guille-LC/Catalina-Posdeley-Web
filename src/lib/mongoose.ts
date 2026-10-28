import mongoose, { type Mongoose } from "mongoose";

const MONGODB_URI: string = (() => {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI no está definida");
  }
  return uri;
})();

interface MongooseCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseCache | undefined;
}

const cached: MongooseCache = global.mongoose ?? (global.mongoose = { conn: null, promise: null });

export async function connectToDB(): Promise<Mongoose> {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, { dbName: "catalina-posdeley-librosDB" })
      .then((m) => m);
  }

  cached.conn = await cached.promise;

  return cached.conn;
}
