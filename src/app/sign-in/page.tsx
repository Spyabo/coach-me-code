import { SignIn } from "@clerk/nextjs/app-beta";

export default function Page({ searchParams }: any) {
  const { redirectUrl } = searchParams;
  return (
    <section className="py-24 flex justify-center bg-neutral-50 h-full">
      <div className="container">
        <div className="flex justify-center">
          <SignIn signUpUrl="/sign-up" redirectUrl={redirectUrl || "/"} />
        </div>
      </div>
    </section>
  );
}
