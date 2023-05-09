import BackButton from "@/app/components/BackButton";
import { getListingById } from "@lib/mongo/listings";
import { listing } from "@lib/types/listings";
import stringToArray from "@lib/utils/stringToArray";
import Head from "next/head";

export default async function ListingByIDPage({ params }: { params: { id: string } }) {
    const listing: listing = await getListingById(params.id);

    return (
        <div className="bg-white rounded-lg shadow-lg max-w-7xl mx-auto sm:px-6 lg:px-7 mt-20">
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
                                <strong>Rating:</strong> {listing.listing_rating}
                            </li>
                            <li>
                                <strong>Language/s:</strong> {stringToArray(listing.programming_languages?.toString())}
                            </li>
                            <li>
                                <strong>Cost:</strong> {listing.token_rate} tokens
                            </li>
                        </ul>
                        <button className="mt-6 bg-red-500 hover:bg-purple-700 text-white py-3 px-6 rounded font-bold">
                            Book Now
                        </button>
                    </div>
                </div>
                <BackButton />
            </div>
        </div>
    );
};
