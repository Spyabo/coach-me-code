import ListingForm from "@/app/components/Listings/ListingForm";

export default async function Page() {

  return (
    <div className="flex flex-col justify-center container px-10 py-10 bg-slate-300 max-w-7xl mx-auto sm:px-6 lg:px-7">
      <ListingForm />
    </div>
  );
}
