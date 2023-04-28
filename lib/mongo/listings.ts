import { Collection, Db, MongoClient } from "mongodb";
import clientPromise from ".";

let client: MongoClient;
let db: Db;
let listings: Collection;

async function setup() {
  if (db) return;
  try {
    client = await clientPromise;
    db = client.db("data");
    listings = db.collection("listings");
  } catch (err) {
    throw new Error("Could not connect to MongoDB");
  }
}

async () => {
  await setup();
};

export async function getListings() {
  try {
    if (!listings) await setup();
    const result = await listings
      .find()
      .limit(3)
      .map((listing) => ({ ...listing, _id: listing._id.toString() }))
      .toArray();
    return { listings: result };
  } catch (err) {
    return { error: "Could not get listings" };
  }
}
