import { Collection, Db, MongoClient } from "mongodb";
import clientPromise from ".";

let client: MongoClient;
let db: Db;
let reviews: Collection;

async function setup() {
  if (db) return;
  try {
    client = await clientPromise;
    db = client.db("data");
    reviews = db.collection("reviews");
  } catch (err) {
    throw new Error("Could not connect to MongoDB");
  }
}

async () => {
  await setup();
};

export async function getReviews() {
  try {
    if (!reviews) await setup();
    const result = await reviews
      .find()
      .limit(3)
      .map((review) => ({ ...review, _id: review._id.toString() }))
      .toArray();
    return { reviews: result };
  } catch (err) {
    return { error: "Could not get reviews" };
  }
}
