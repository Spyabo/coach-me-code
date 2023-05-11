import { getListingById, getListings } from "@lib/mongo/listings";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }
): Promise<NextResponse> {
  try {
    console.log(params);
    const listingID = params.id;
    const listing = await getListingById(listingID);
    if ("error" in listing) {
      throw new Error(listing.error);
    }
    return NextResponse.json({ listing });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}