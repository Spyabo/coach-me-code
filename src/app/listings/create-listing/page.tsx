import ListingForm from "@/app/components/Listings/ListingForm";

export default async function Page() {

  return (
    <div className="mx-auto flex flex-col justify-center container px-10 py-10 bg-slate-300">
      <ListingForm />
    </div>
  );
}
