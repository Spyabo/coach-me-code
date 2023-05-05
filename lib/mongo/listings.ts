import { getListingsResponse } from '@lib/types/listings';
import { Collection, Db, MongoClient, ObjectId } from "mongodb";
import { NextRequest } from "next/server";
import clientPromise from ".";

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
      clerk_id: listing.clerk_id,
      mentor_name: listing.mentor_name,
      listing_title: listing.listing_title,
      listing_image: listing.listing_image,
      listing_description: listing.listing_description,
      listing_rating: listing.mentor_rating,
      token_rate: listing.token_rate,
      programming_languages: listing.programming_languages,
    }));

    return { listings: mappedResult };
  } catch (err) {
    return { error: "Could not get listings" };
  }
}

export async function postListing(formData: NextRequest){
  try {
    if (!listings) await setup();
    const newListing = await formData.json();
    const result = await listings.insertOne(newListing);
    return { _id: result.insertedId.toString(), ...newListing };
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
      clerk_id: result.clerk_id,
      mentor_name: result.mentor_name,
      listing_title: result.listing_title,
      listing_image: result.listing_image,
      listing_description: result.listing_description,
      listing_rating: result.listing_rating,
      token_rate: result.token_rate,
      programming_languages: result.programming_languages,
    };
  } catch (err) {
    return { error: "Could not get listing" };
  }
}
