import { getListingsResponse } from "@lib/types/listings";
import Image from 'next/image';
import Link from "next/link";
import ListingFilterBy from "../components/listing-filterBy/listing-filterBy";

export default async function ListingsPage() {
  const res = await fetch("http://localhost:3000/api/listings", { cache: "no-store" });
  const { listings }: { listings: getListingsResponse[] } = await res.json()

  return (
    <>
      <header className="text-center  max-w-7xl mx-auto sm:px-6 lg:px-7">
        <h1 className="text-3xl font-bold my-6">Explore the courses currently available...</h1>
      </header >
      <div className="container max-w-7xl mx-auto px-6 sm:px-6 lg:px-6 mb-10 pb-6 rounded-md">
        {/* <ListingFilterBy listingArray={listings} sort_by={"programming_languages"} /> */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-2 ">
          {listings.map((data: getListingsResponse) => {
            console.log(data);
            return (
              <li className="container shadow-lg bg-gray-300 rounded-md border-solid border-2 flex flex-col py-6 md:flex-1 items-center" key={data._id}>
                <div className="flex flex-col">
                  <div className="items-center justify-between gap-2 flex flex-col z-10">
                    <Image className="rounded h-40 object-fill p-2 bg-purple-700" width={300} height={300} src={data.listing_image} alt={data.listing_title} />
                    <h3 className="font-bold text-xl mt-2 flex flex-wrap items-center text-center px-2">{data.listing_title}</h3>
                    <p>{data.mentor_name}</p>
                    {/* <p>{data.listing_rating / 10}</p> */}
                    <p>{data.programming_languages.join(", ")}</p>
                    <div className="flex flex-row items-center justify-center">
                      <p>{data.token_rate}</p>
                      <Image
                        className="float-right"
                        src="/wallet-gem.svg"
                        alt="a graphic of tokens"
                        width={40}
                        height={40}
                      />
                    </div>
                    <Link href={`/listings/${data._id}`}>
                      <button className="bg-green-400 hover:bg-purple-800 text-white text-lg text-center font-bold py-2 px-5 hover:bg-orange-600 transition-colors duration-300 ease-in-out rounded-md ">
                        View more
                      </button>
                    </Link>
                  </div>
                  <div className="flex justify-end -mt-10 ">
                    <Image
                      className="flex flex-row ml-60"
                      src="listing.svg"
                      alt="a graphic of a person studying"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  )
}
