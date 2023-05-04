import { Collection, Db, MongoClient, ObjectId } from "mongodb";
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
    listings = db.collection("listings")
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

export async function getListingById(
  id: string
): Promise<getListingsResponse | { error: string }> {
  try {
    if (!listings) await setup();
    const result = await listings.findOne({ _id: new ObjectId(id) });
    if (!result) return { error: "Listing not found" };
    return {
      _id: result._id.toString(),
      listing_title: result.listing_title,
      mentor_rating: result.mentor_rating,
      listing_image: result.listing_image,
      listing_description: result.listing_description,
      name: result.name,
      token_rate: result.token_rate,
      programming_languages: result.programming_language,
    };
  } catch (err) {
    return { error: "Could not get listing" };
  }
}
