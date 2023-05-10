import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { SignedIn, SignedOut } from "@clerk/nextjs/app-beta/client";
import MyDropdown from "./ DropDownMenu/DropDownMenu";
import MoneyNavSym from "./MoneyNavSym";

export default function Clerk() {
  const { user } = useUser();


  return (
    <>
      <SignedIn>
        <div className="flex justify-center items-center">
          {/* @ts-ignore */}
          <MoneyNavSym id={user?.id} />
          <MyDropdown userName={user?.firstName} userId={user?.id} />
        </div>
        <div className="flex justify-center items-center">
          <UserButton />
        </div>
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal" redirectUrl="/welcome">
          <button className="rounded border border-gray-400 px-3 py-0.5 text-yellow-50">
            Sign in
          </button>
        </SignInButton>
      </SignedOut>
    </>
  );
}
