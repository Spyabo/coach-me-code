import { getListingByClerkId } from "@lib/mongo/listings";
import { getListingsResponse } from "@lib/types/listings";

export default async function MyListings({ params }) {
    const { listings }: getListingsResponse = await getListingByClerkId(params.id)
    return (

        listings.length === 0 ? <h1 className="flex justify-center text-4xl">No listing yet!</h1> :

            <>
                <div className="flex flex-row justify-center">
                    <ul>
                        {listings.map((listing) => {
                            return (
                                <li key={listing._id}>
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