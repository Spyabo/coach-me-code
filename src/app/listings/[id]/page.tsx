import BackButton from "@/app/components/BackButton";
import { getListingById } from "@lib/mongo/listings";
import { getListingsResponse } from "@lib/types/listings";
import Image from "next/image";
import Link from "next/link";

export default async function ListingByIDPage({
  params,
}: {
  params: { id: string };
}) {
  const listing: getListingsResponse | { error: string } = await getListingById(
    params.id
  );

  if ("error" in listing) return <div>{listing.error}</div>;

  return (
    <div className="px-6 py-8 flex flex-col justify-center items-center w-full md:w-1/2  gap-4 bg-white rounded-lg shadow-lg max-w-7xl mx-auto sm:px-6 lg:px-7 text-center border-solid border-purple-800 mb-20 mt-10">
      <div className=" bg-purple-800 rounded p-4">
        <h1 className="text-3xl font-bold text-white underline">
          {listing.listing_title}
        </h1>
      </div>
      <Image
        className="rounded"
        width={600}
        height={600}
        src={listing.listing_image}
        alt={listing.listing_title}
      />
      <h2 className="text-xl font-bold">Description</h2>
      <p className="text-gray-700">{listing.listing_description}</p>
      <h2 className="text-xl font-bold">Details</h2>
      <ul className="text-gray-700">
        <li>
          <strong>Mentor:</strong> {listing.mentor_name}
        </li>
        <li>
          <strong>Language/s:</strong>{" "}
          {listing.programming_languages?.join(", ")}
        </li>
        <li>
          <strong>Cost:</strong> {listing.token_rate} tokens
        </li>
      </ul>
      <div className="flex flex-row gap-4">
        <BackButton />
        <Link href={`/listings/${params.id}/purchase`}>
          <button className="mt-6 bg-red-500 hover:bg-purple-700 text-white py-3 px-6 rounded font-bold">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
}
