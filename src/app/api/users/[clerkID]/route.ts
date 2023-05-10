import { getUserByClerkId } from "@lib/mongo/users";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { clerkID: string } }
): Promise<NextResponse> {
  try {
    const { clerkID } = params;
    const result = await getUserByClerkId(clerkID);

    if ("error" in result) {
      throw new Error(result.error);
    }

    const fulfilledResult: object = result;

    return NextResponse.json({ user: fulfilledResult });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
