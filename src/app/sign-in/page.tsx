import { SignIn } from "@clerk/nextjs/app-beta";

export default function Page() {
  return (
    <section className="py-24 flex justify-center bg-neutral-50 h-full">
      <div className="container">
        <div className="flex justify-center">
          <SignIn signUpUrl="/sign-up" />
        </div>
      </div>
    </section>
  );
}
