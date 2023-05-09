import BackButton from "@/app/components/BackButton";
import { getListingById } from "@lib/mongo/listings";
import { getListingsResponse } from "@lib/types/listings";
import stringToArray from "@lib/utils/stringToArray";
import Head from "next/head";

export default async function ListingByIDPage({ params }: { params: { id: string } }) {
    const listing: getListingsResponse = await getListingById(params.id);

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Head>
                <title className="mb-4">{listing.listing_title} | Code Mentor</title>
            </Head>
            <div className="px-6 py-8">
                <h1 className="text-3xl font-bold mb-4">{listing.listing_title}</h1>
                <div className="flex flex-wrap -mx-4 mb-8">
                    <div className="w-full md:w-1/2 px-4 flex flex-col justify-between gap-4">
                        <img className="rounded" width={400} src={listing.listing_image} alt={listing.listing_title} />
                        <h2 className="text-xl font-bold">Description</h2>
                        <p className="text-gray-700">{listing.listing_description}</p>
                    </div>
                    <div className="w-full md:w-1/2 px-4 ">
                        <h2 className="text-xl mb-4 font-bold">Details</h2>
                        <ul className="text-gray-700">
                            <li>
                                <strong>Mentor:</strong> {listing.mentor_name}
                            </li>
                            <li>
                                <strong>Rating:</strong> {listing.listing_rating / 10}
                            </li>
                            <li>
                                <strong>Language/s:</strong> {stringToArray(listing.programming_languages?.toString())}
                            </li>
                            <li>
                                <strong>Cost:</strong> {listing.token_rate} tokens
                            </li>
                        </ul>
                        <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
                            Book Now
                        </button>
                    </div>
                </div>
                <BackButton />
            </div>
        </div>
    );
};
