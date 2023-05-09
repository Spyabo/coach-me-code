import { clerkClient } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(user: NextRequest) {
  try {
    const patchUser = await user.json();
    const clerkUser = await clerkClient.users.updateUser(patchUser.clerk_id, {
      firstName: patchUser.firstName || "",
      lastName: patchUser.lastName || "",
    });
    return NextResponse.json({ success: true, user: clerkUser });
  } catch (err) {
    return NextResponse.json({
      error: "Could not update clerk user",
      msg: err,
    });
  }
}
