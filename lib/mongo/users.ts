import { getUsersResponse, tokenRequest, userType } from "@lib/types/users";
import { Collection, Db, MongoClient, ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
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

export async function getUsers(): Promise<
  { users: getUsersResponse[] } | { error: string }
> {
  try {
    if (!users) await setup();
    const result = await users.find().toArray();

    const mappedResult: getUsersResponse[] = result.map((user) => ({
      _id: user._id.toString(),
      clerk_id: user.clerk_id,
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

export async function postUser(newUser: userType) {
  try {
    if (!users) await setup();
    const result = await users.insertOne(newUser);
    return { _id: result.insertedId.toString(), ...newUser };
  } catch (err) {
    return { error: "Could not post user" };
  }
}

export async function patchUser(id: string, newUser: userType) {
  try {
    if (!users) await setup();
    const result = await users.updateOne(
      { _id: new ObjectId(id) },
      { $set: newUser }
    );
    return { modifiedCount: result.modifiedCount };
  } catch (err) {
    return { error: "Could not patch user" };
  }
}

export async function patchOrder(clerkID: string, order: []) {
  try {
    if (!users) await setup();
    const result = await users.updateOne(
      { clerk_id: clerkID },
      // order: [{"listing_ID", "date"}]
      { $push: { order_ids: order } }
    );

    if (result.modifiedCount === 1) {
      return { success: true };
    } else if (result.modifiedCount === 0) {
      return { error: "No matching document found to update" };
    } else {
      return {
        error: "Multiple documents found - please check the query criteria",
      };
    }
  } catch (err) {
    return { error: "Could not push order", msg: err };
  }
}
export async function patchListing(clerkID: string, order: []) {
  try {
    if (!users) await setup();
    const result = await users.updateOne(
      { clerk_id: clerkID },
      // order: [{"listing_ID", "date"}]
      { $push: { listing_ids: order } }
    );

    if (result.modifiedCount === 1) {
      return { success: true };
    } else if (result.modifiedCount === 0) {
      return { error: "No matching document found to update" };
    } else {
      return {
        error: "Multiple documents found - please check the query criteria",
      };
    }
  } catch (err) {
    return { error: "Could not push listing", msg: err };
  }
}

export async function patchTokens(
  request: tokenRequest,
  clerkID: string
): Promise<{ success: boolean } | { error: string }> {
  try {
    if (!users) await setup();

    const result = await users.updateOne(
      { clerk_id: clerkID },
      { $inc: { tokens: request.tokens } }
    );

    if (result.modifiedCount === 1) {
      return { success: true };
    } else if (result.modifiedCount === 0) {
      return { error: "No matching document found to update" };
    } else {
      return {
        error: "Multiple documents found - please check the query criteria",
      };
    }
  } catch (err) {
    return { error: "Could not update tokens" };
  }
}

export async function getUsersByClerkId(id: string) {
  try {
    if (!users) await setup();
    const result = await users.findOne({ clerk_id: id });
    if (!result) return { error: "User not found" };
    return {
      _id: result._id.toString(),
      clerk_id: result.clerk_id,
      name: result.name,
      email: result.email,
      phone: result.phone,
      years_of_experience: result.years_of_experience,
      programming_languages: result.programming_languages,
      listing_ids: result.listing_ids,
      order_ids: result.order_ids,
      tokens: result.tokens,
    };
  } catch (err) {
    return { error: "Could not get user" };
  }
}

export async function getUserByClerkId(clerk_id: string | undefined) {
  try {
    if (!users) await setup();
    const result = await users.findOne({ clerk_id });
    if (!result) return { error: "User not found" };
    return {
      _id: result._id.toString(),
      clerkAuth: result.clerkAuth,
      name: result.name,
      email: result.email,
      phone: result.phone,
      years_of_experience: result.years_of_experience,
      programming_languages: result.programming_languages,
      listing_ids: result.listing_ids,
      order_ids: result.order_ids,
      tokens: result.tokens,
    };
  } catch (err) {
    return { error: "Could not get user" };
  }
}
