import { getListingByClerkId } from "@lib/mongo/listings";
import { getListingsResponse } from "@lib/types/listings";
import Link from "next/link";

export default async function MyListings({ params }) {
    const { listings }: getListingsResponse = await getListingByClerkId(params.id)
    return (
        listings.length === 0 ? <h1 className="flex justify-center text-4xl">No listing yet!</h1> :
            <>
                <div className="container max-w-7xl mx-auto sm:px-6 lg:px- mt-20">
                    <header>
                        <h1 className="text-2xl font-bold my-6">Your listings details:</h1>
                    </header>
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-2 ">
                        {listings.map((data: getListingsResponse) => {
                            return (
                                <li className="container bg-gray-200 shadow-md rounded border-solid border-2 border-purple-600 flex flex-col gap-4 py-4 px-2 text-center md:flex-1 justify-between items-center" key={data._id}>
                                    <img className="rounded border-solid border-2 border-orange-600" width={300} src={data.listing_image} alt={data.listing_title} />
                                    <h3 className="font-bold text-lg flex flex-wrap items-center text-center">Listing title: {data.listing_title}</h3>
                                    <p>Listing description: {data.listing_description}</p>
                                    <p>Programming languages: {(data.programming_languages).map(item => item)}</p>
                                    <p>Token rate: {data.token_rate}</p>
                                    <Link href={`/listings/${data._id}`}>
                                        <button className="bg-green-400 hover:bg-red-400 text-white text-md text-center font-bold py-3 px-6 rounded-full hover:bg-orange-600 transition-colors duration-300 ease-in-out">
                                            View listing details
                                        </button>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </>
    )
}