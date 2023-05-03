import { Collection, Db, MongoClient, ObjectId } from "mongodb";
import clientPromise from ".";

let client: MongoClient;
let db: Db;
let users: Collection;

export type user = {
  _id: ObjectId;
  name: string;
  email?: string;
  phone?: string;
  years_of_experience: number;
  programming_languages: [];
  listing_ids: [];
  order_ids: [];
  tokens: number;
};

export type getUsersResponse = {
  _id: string;
  name: string;
  email?: string;
  phone?: string;
  years_of_experience: number;
  programming_languages: [];
  listing_ids: [];
  order_ids: [];
  tokens: number;
};

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

export async function getUsers(): Promise<
  { users: getUsersResponse[] } | { error: string }
> {
  try {
    if (!users) await setup();
    const result = await users.find().limit(3).toArray();

    const mappedResult: getUsersResponse[] = result.map((user) => ({
      _id: user._id.toString(),
      name: user.name,
      email: user.email,
      phone: user.phone,
      years_of_experience: user.years_of_experience,
      programming_languages: user.programming_languages,
      listing_ids: user.listing_ids,
      order_ids: user.order_ids,
      tokens: user.tokens,
    }));

    return { users: mappedResult };
  } catch (err) {
    return { error: "Could not get users" };
  }
}
