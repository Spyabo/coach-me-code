import { getListingByClerkId } from "@lib/mongo/listings";
import { getListingsResponse } from "@lib/types/listings";

export default async function MyListings({ params }) {
    const { listings }: getListingsResponse = await getListingByClerkId(params.id)
    return (

        listings.length === 0 ? <h1 className="container max-w-7xl mx-auto sm:px-6 lg:px- mt-20">No listing yet!</h1> :

            <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-2">
                    <ul>
                        {listings.map((listing) => {
                            return (
                                <li className="container bg-gray-200 shadow-md rounded border-solid border-2 border-purple-600 flex flex-col gap-4 py-4 md:flex-1 justify-between items-center" key={listing._id}>
                                    <p>Listing title: {listing.listing_title}</p>
                                    <p>Listing description: {listing.listing_description}</p>
                                    <p>Programming languages: {(listing.programming_languages).map(item => item)}</p>
                                    <p>Token rate: {listing.token_rate}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </>
    )
}