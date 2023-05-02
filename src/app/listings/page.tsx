import { getListings, getListingsResponse } from "@lib/mongo/listings";

export default async function ListingsPage() {
    const { listing } = await getListings();

    return (
        <div className="container mx-auto">
            <h1 className="text-xl">Listings</h1>
            <ul className="flex-auto flex-col gap-9">
                {listing.map((data: getListingsResponse) => {

                    return (
                        <>
                            <li className="container" key={data._id}>
                                <h3>{data.listing_title}</h3>
                                <p>By: {data.name}</p>
                                <p>Rating: {data.mentor_rating / 10}</p>
                                <p>
                                    <img src={data.listing_image} alt={data.listing_title} />
                                </p>
                                <h4>Language/s:</h4>
                                <p>{data.programming_language}</p>
                                <h4>Description</h4>
                                <p>{data.listing_description}</p>
                                <h4>Reviews</h4>
                                <p>{data.listing_review}</p>
                                <p>Cost: {data.token_rate} tokens</p>
                            </li>
                        </>
                    )
                })}
            </ul>
        </div>
    )
}