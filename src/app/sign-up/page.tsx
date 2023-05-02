import { SignUp } from "@clerk/nextjs/app-beta";

export default function Page() {
  return (
    <section className="py-24 flex justify-center bg-neutral-50 h-screen">
      <div className="container">
        <div className="flex justify-center">
          <SignUp signInUrl="/sign-in" />
        </div>
      </div>
    </section>
  );
}
