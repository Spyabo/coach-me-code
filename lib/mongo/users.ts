import { Collection, Db, MongoClient } from "mongodb";
import clientPromise from ".";

let client: MongoClient;
let db: Db;
let users: Collection;

async function setup() {
  if (db) return;
  try {
    client = await clientPromise;
    db = client.db("data");
    users = db.collection("users");
  } catch (err) {
    throw new Error("Could not connect to MongoDB");
  }
}

async () => {
  await setup();
};

export async function getMovies() {
  try {
    if (!users) await setup();
    const result = await users
      .find()
      .limit(3)
      .map((user) => ({ ...user, _id: user._id.toString() }))
      .toArray();
    return { users: result };
  } catch (err) {
    return { error: "Could not get movies" };
  }
}
