import { patchTokens } from "@lib/mongo/users";
import { tokenRequest } from "@lib/types/users";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { userID: string } }
): Promise<NextResponse> {
  try {
    const { userID } = params;
    const body = await request.json();
    const result = await patchTokens(body, userID);

    if ("error" in result) {
      throw new Error(result.error);
    }

    const response: boolean = result.success;
    return NextResponse.json({ request: response });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
