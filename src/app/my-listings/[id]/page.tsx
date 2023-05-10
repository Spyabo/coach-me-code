import { getListingByClerkId } from "@lib/mongo/listings";
import { getUserByClerkId } from "@lib/mongo/users";
import { getUsersResponse } from "@lib/types/users";
import { getListingsResponse } from "@lib/types/listings";



export default async function MyListings({ params }) {
    // const user: getUsersResponse = await getUserByClerkId(params.id)
    const { listings }: getListingsResponse = await getListingByClerkId(params.id)
    return (

        <>
            <div>
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



        // <>
        //     <div className="flex justify-center text-2xl font-medium  ">
        //         <ul>
        //             Listing details:
        //             <li>
        //                 Name: {user.name}
        //             </li>
        //             <li>
        //                 E-mail: {user.email}
        //             </li>
        //             <li>
        //                 Phone number: {user.phone}
        //             </li>
        //             <li>
        //                 Years of experience: {user.years_of_experience}
        //             </li>
        //             <li>
        //                 Programming languages: {user.programming_languages}
        //             </li>
        //             <li>
        //                 Tokens: {user.tokens}
        //             </li>
        //         </ul>
        //     </div>

        // </>

    )
}