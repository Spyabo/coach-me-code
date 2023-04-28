import { MongoClient } from "mongodb";

const URI = process.env.MONGODB_URI;
const options = {};

if (!URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

const client = new MongoClient(URI, options);
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV !== "production") {
  // @ts-ignore
  if (!global._mongoClientPromise) {
    // @ts-ignore
    global._mongoClientPromise = client.connect();
  }
  // @ts-ignore
  clientPromise = global._mongoClientPromise;
} else {
  clientPromise = client.connect();
}

export default clientPromise;
