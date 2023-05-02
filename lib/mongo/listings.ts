import { Collection, Db, MongoClient, ObjectId } from "mongodb";
import clientPromise from ".";

let client: MongoClient;
let db: Db;
let listings: Collection;

export type listing = {
  _id: ObjectId;
  listing_title: string;
  mentor_rating: number;
  listing_image: string;
  listing_description: string;
  listing_review: string;
  name: string;
  token_rate: number;
  programming_language: [];
};

export type getListingsResponse = {
  _id: string;
  listing_title: string;
  mentor_rating: number;
  listing_image: string;
  listing_description: string;
  listing_review: string;
  name: string;
  token_rate: number;
  programming_language: [];
};

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

export async function getListings(): Promise<
  { listing: getListingsResponse[] } | { error: string }
> {
  try {
    if (!listings) await setup();
    const result = await listings.find().toArray();

    const mappedResult: getListingsResponse[] = result.map((listing) => ({
      _id: listing._id.toString(),
      listing_title: listing.listing_title,
      mentor_rating: listing.mentor_rating,
      listing_image: listing.listing_image,
      listing_description: listing.listing_description,
      listing_review: listing.listing_review,
      name: listing.name,
      token_rate: listing.token_rate,
      programming_language: listing.programming_language,
    }));

    return { listing: mappedResult };
  } catch (err) {
    return { error: "Could not get listings" };
  }
}
