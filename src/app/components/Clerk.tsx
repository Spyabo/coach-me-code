import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { SignedIn, SignedOut } from "@clerk/nextjs/app-beta/client";
import MyDropdown from "./ DropDownMenu/DropDownMenu";

export default function Clerk() {
  const { user } = useUser();

  return (
    <>
      <SignedIn>
        <div className="flex justify-center items-center">
          <MyDropdown userName={user?.firstName} userId={user?.id} />
        </div>
        <div className="flex justify-center items-center">
          <UserButton />
        </div>
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal" redirectUrl="/welcome">
          <button className="rounded border border-gray-400 px-3 py-0.5 text-yellow-50 hover:bg-green-400 hover:text-gray-900">
            Sign in
          </button>
        </SignInButton>
        <SignUpButton redirectUrl="/user-form">
          <button className="rounded border border-gray-400 px-3 py-0.5 text-yellow-50 hover:bg-red-400 hover:text-gray-900">
            Register
          </button>
        </SignUpButton>
      </SignedOut >
    </>
  );
}
