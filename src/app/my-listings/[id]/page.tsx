import { getListingByClerkId } from "@lib/mongo/listings";
import { getListingsResponse } from "@lib/types/listings";

export default async function MyListings({ params }) {
    const { listings }: getListingsResponse = await getListingByClerkId(params.id)
    return (

        listings.length === 0 ?
            <div className="flex flex-col justify-center">
                <h1 className="text-3xl font-bold mt-16 text-center p-4">No listing yet!</h1>
            </div>
            :
            <>
                <div className="flex flex-row justify-center">
                    <h1 className="text-2xl font-bold mt-16 text-center p-4">
                        Your listings details:
                    </h1>

                    {listings.map((listing) => {
                        return (
                            <div key={listing._id}
                                className="flex align-center"
                            >
                                <div className="flex-col justify-between">
                                    <p>Listing title: {listing.listing_title}</p>
                                    <p>Listing description: {listing.listing_description}</p>
                                    <p>Programming languages: {(listing.programming_languages).map(item => item)}</p>
                                    <p>Token rate: {listing.token_rate}</p>

                                </div>
                            </div>
                        )
                    })}

                </div>
            </>
    )
}