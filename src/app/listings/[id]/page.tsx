import BackButton from "@/app/components/BackButton";
import { getListingById } from "@lib/mongo/listings";
import { listing } from "@lib/types/listings";
import Head from "next/head";

export default async function ListingByIDPage({ params }: { params: { id: string } }) {
    const listing: listing = await getListingById(params.id);

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Head>
                <title>{listing.listing_title} | Code Mentor</title>
            </Head>
            <div className="relative pb-2/3">
                <img src={listing.listing_image} alt={listing.listing_title} />
            </div>
            <div className="px-6 py-8">
                <h1 className="text-3xl font-bold mb-4">{listing.listing_title}</h1>
                <div className="flex flex-wrap -mx-4 mb-8">
                    <div className="w-full md:w-1/2 px-4">
                        <h2 className="text-xl mb-4">Description</h2>
                        <p className="text-gray-700">{listing.listing_description}</p>
                    </div>
                    <div className="w-full md:w-1/2 px-4">
                        <h2 className="text-xl mb-4">Details</h2>
                        <ul className="text-gray-700">
                            <li>
                                <strong>Mentor:</strong> {listing.name}
                            </li>
                            <li>
                                <strong>Rating:</strong> {listing.mentor_rating / 10}
                            </li>
                            <li>
                                <strong>Language/s:</strong> {listing.programming_languages.join(", ")}
                            </li>
                            <li>
                                <strong>Cost:</strong> {listing.token_rate} tokens
                            </li>
                        </ul>
                        <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Book Now
                        </button>
                    </div>
                </div>
                <BackButton />
            </div>
        </div>
    );
};
