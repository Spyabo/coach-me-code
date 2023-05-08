import { getListings, postListing } from "@lib/mongo/listings";
import { getListingsResponse, listing } from "@lib/types/listings";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await getListings();
    if ("error" in result) {
      throw new Error(result.error);
    }
    const listings: getListingsResponse[] = result.listings;
    return NextResponse.json({ listings });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(formData: NextRequest) {
  try {
    const newListing: listing = await formData.json();
    const result = await postListing(newListing);
    if ("error" in result) {
      throw new Error(result.error);
    }
    return NextResponse.json({ result });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
