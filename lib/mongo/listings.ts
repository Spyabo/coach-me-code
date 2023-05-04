import { Collection, Db, MongoClient } from "mongodb";
import clientPromise from ".";
import { getListingsResponse, listing } from "../types/listings";

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

export async function getListings(): Promise<
  { listings: getListingsResponse[] } | { error: string }
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
      name: listing.name,
      token_rate: listing.token_rate,
      programming_languages: listing.programming_language,
    }));

    return { listings: mappedResult };
  } catch (err) {
    return { error: "Could not get listings" };
  }
}

export async function postListing(formData: listing){
  try {
    if (!listings) await setup();
    const result = await listings.insertOne(formData);
    return { _id: result.insertedId.toString() };
  } catch (err) {
    return { error: "Could not post listing" };
  }
}