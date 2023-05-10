import {
  getUserByClerkId,
  getUsers,
  patchOrder,
  patchUser,
  postUser,
} from "@lib/mongo/users";
import { getUsersResponse, tokenRequest, userType } from "@lib/types/users";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await getUsers();
    if ("error" in result) {
      throw new Error(result.error);
    }
    const users: getUsersResponse[] = result.users;
    return NextResponse.json({ users });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(user: NextRequest) {
  try {
    const newUser: userType = await user.json();
    const checkUser = await getUserByClerkId(newUser.clerk_id);
    let result: getUsersResponse | { error: string } | {} = {};
    if ("error" in checkUser) {
      result = await postUser(newUser);
    } else {
      result = await patchUser(checkUser._id, newUser);
    }
    if ("error" in result) {
      throw new Error(result.error);
    }
    return NextResponse.json({ result });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PATCH(params: NextRequest) {
  try {
    const { clerkID, order } = await params.json();
    const result = await patchOrder(clerkID, order);
    return NextResponse.json({ result });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
