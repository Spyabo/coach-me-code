import { getListingByClerkId } from "@lib/mongo/listings";
import { getListingsResponse } from "@lib/types/listings";

export default async function MyListings({ params }) {
    const { listings }: getListingsResponse = await getListingByClerkId(params.id)
    return (

        listings.length === 0 ?
            <div className="flex flex-col justify-center mt-20">
                <h1 className="text-3xl font-bold mt-16 text-center p-4">No listing yet!</h1>
            </div>
            :
            <>
                <div className="flex flex-row justify-center p-2 m-2">
                    <h1 className="text-2xl font-bold mt-16 text-center p-4">
                        Your listings details:
                    </h1>
                </div>

                {listings.map((listing) => {
                    return (
                        <div key={listing._id}
                            className="flex justify-center mx-auto mt-2 border-2 w-1/4 border-solid border-purple-600 rounded-lg p-2 m-2"
                        >
                            <div className="flex-col justify-center ">
                                <p>Listing title: {listing.listing_title}</p>
                                <p>Listing description: {listing.listing_description}</p>
                                <p>Programming languages: {(listing.programming_languages).map(item => item)}</p>
                                <p>Token rate: {listing.token_rate}</p>
                                <a href={`/listings/${listing._id}`}><button className="bg-green-400 hover:bg-red-400 text-white text-sm text-center font-bold py-1 px-2 rounded-full hover:bg-orange-600 transition-colors duration-300 ease-in-out ">View listing details</button></a>
                            </div>
                        </div >
                    )
                })}

            </>
    )
}