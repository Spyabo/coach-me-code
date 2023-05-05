import { getListingsResponse } from "@lib/types/listings";
import Link from "next/link";
import ListingFilterBy from "../components/listing-filterBy/listing-filterBy";

export default async function ListingsPage() {
  const res = await fetch("http://localhost:3000/api/listings")
  const { listings }: { listings: getListingsResponse[] } = await res.json()

  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header>
        <h1 className="text-2xl font-bold my-4">Explore the available services...</h1>
      </header>
      <ListingFilterBy listingArray={listings} sort_by={"programming_languages"} />
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-2">
        {listings.map((data: getListingsResponse) => {
          return (
            <li className="container shadow-md rounded border-solid border-2 border-indigo-600 p-4 bg-blue-100 flex flex-col  md:flex-1 justify-between items-center" key={data._id}>
              <img className="rounded border-solid border-2 border-orange-600" width={300} src={data.listing_image} alt={data.listing_title} />
              <h3 className="font-bold text-lg flex flex-wrap items-center text-center">{data.listing_title}</h3>
              <p>{data.mentor_name}</p>
              <p>{data.listing_rating / 10}</p>
              <p>{data.token_rate} tokens</p>
              <Link href={`/listings/${data._id}`}>
                <button className="bg-orange-500 text-white text-lg font-bold py-3 px-6 rounded-full mt-6 hover:bg-orange-600 transition-colors duration-300 ease-in-out">
                  View more
                </button>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  )
}
