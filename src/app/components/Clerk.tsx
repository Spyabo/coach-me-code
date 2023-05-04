import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { SignedIn, SignedOut } from "@clerk/nextjs/app-beta/client";

export default function Clerk() {
  const { user } = useUser();

  return (
    <>
      <SignedIn>
        <div className="flex justify-center items-center">
          {user?.firstName}
        </div>
        <div className="flex justify-center items-center">
          <UserButton />
        </div>
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal" redirectUrl="/listings">
          <button className="rounded border border-gray-400 px-3 py-0.5 text-yellow-50">
            Sign in
          </button>
        </SignInButton>
      </SignedOut>
    </>
  );
}
