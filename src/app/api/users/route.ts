import { getUsers, getUsersResponse } from "@lib/mongo/users";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await getUsers();
    if ("error" in result) {
      throw new Error(result.error);
    }
    const users: getUsersResponse[] = result.users;
    return NextResponse.json(users);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
