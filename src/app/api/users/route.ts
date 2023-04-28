import { getUsers } from "@lib/mongo/users";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { users, error } = await getUsers();
    if (error) throw new Error(error);
    return NextResponse.json(users);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
