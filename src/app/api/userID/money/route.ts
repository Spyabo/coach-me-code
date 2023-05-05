import { getUsers, patchTokens } from "@lib/mongo/users";
import { tokenRequest } from "@lib/types/users";
import { NextResponse } from "next/server";

export async function PATCH({ _id, tokens }: tokenRequest) {
  try {
    if (tokens <= 0 || tokens > 50) {
      throw new Error("Invalid tokens value");
    }

    const result = await patchTokens({
      _id,
      tokens,
    });

    if ("error" in result) {
      throw new Error(result.error);
    }

    const response: boolean = result.success;
    return NextResponse.json({ response });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
