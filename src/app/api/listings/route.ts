import { getListings, getListingsResponse } from "@lib/mongo/listings";
import { NextResponse } from "next/server";

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
