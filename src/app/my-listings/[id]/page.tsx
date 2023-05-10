import { getListingByClerkId } from "@lib/mongo/listings";
import { getListingsResponse } from "@lib/types/listings";

export default async function MyListings({ params }) {
    const { listings }: getListingsResponse = await getListingByClerkId(params.id)
    return (

        listings.length === 0 ? <div className="h-56 grid grid-cols-3 gap-4 content-end">
            <h1 className="text-4xl">No listing yet!</h1>
        </div>
            :
            <>
                <div className="">
                    <ul>
                        {listings.map((listing) => {
                            return (
                                <li className="h-70 grid grid-col justify-items-center gap-3" key={listing._id}>
                                    < p > Listing title: {listing.listing_title}</p>
                                    <p>Listing description: {listing.listing_description}</p>
                                    <p>Programming languages: {(listing.programming_languages).map(item => item)}</p>
                                    <p>Token rate: {listing.token_rate}</p>
                                </li>
                            )
                        })}
                    </ul >
                </div >
            </>
    )
}