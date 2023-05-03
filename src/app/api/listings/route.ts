import { getListings, getListingsResponse } from "@lib/mongo/listings";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await getListings();
    if ("error" in result) {
      throw new Error(result.error);
    }
    const listings: getListingsResponse[] = result.listing;
    return NextResponse.json(listings);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function postListings() {
//   const data = {
//     _id: 4,
//     listing_title: "Master REGEX",
//     mentor_rating: 20,
//     listing_image:
//       "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcoderpad.io%2Fblog%2Fdevelopment%2Fthe-complete-guide-to-regular-expressions-regex%2F&psig=AOvVaw3gzbjtOJ7ShHgPvNYBtWNE&ust=1683126825781000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjNiZf21v4CFQAAAAAdAAAAABAE",
//     listing_description: "This is a course on regex.",
//     name: "John Smith",
//     token_rate: 100,
//     programming_language: ["Javascript", "Python", "REGEX"],
//   };

  try {
    const response = await fetch("/api/listings/:listing_id", {
      method: "POST",
      headers: {
        "Content-Type": "applications/json",
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
  } catch (error) {
    console.error("Error:", error);
  }
}

export default function handler(req: any, res: any) {
    // Get data submitted in request's body.
    const body = req.body
  
    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('body: ', body)
  
    // Guard clause checks for first and last name,
    // and returns early if they are not found

    // if (!body. || !body.last) {
    //   // Sends a HTTP bad request error code
    //   return res.status(400).json({ data: 'First or last name not found' })
    // }
  
    // Found the name.
    // Sends a HTTP success code
    res.status(200).json({ data: body })
  }


