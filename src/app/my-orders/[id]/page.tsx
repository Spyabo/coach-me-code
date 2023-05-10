import { getListings } from "@lib/mongo/listings";
import { getUserByClerkId } from "@lib/mongo/users";
import { getListingsResponse } from "@lib/types/listings";
import { getUsersResponse } from "@lib/types/users";

export default async function Page({ params }) {
    const user: getUsersResponse = await getUserByClerkId(params.id);
    const { listings } = await getListings();
    const orders = user.order_ids;

    return (
        <div className="flex flex-col justify-center">
            <h1 className="text-2xl font-bold mt-16 text-center p-4">
                Your Order History
            </h1>
            <div>
                {orders.map((order) => {
                    const listingId = Object.keys(order)[0];
                    let date = new Date(Date.parse(order[listingId]) * 1000).toString()



                    let orderItem = listings.find(
                        (listing: getListingsResponse) =>
                            listing._id === Object.keys(order)[0]
                    );

                    return (
                        <div
                            key={listingId}
                            className="bg-white rounded-lg shadow-lg mx-auto m-10 flex flex-col border-solid border-2 border-purple-600 overflow-x-auto whitespace-normal "
                        >
                            <div className="bg-gray-300 p-2 rounded">
                                <div className="flex flex-row justify-between sm:flex-col">
                                    <p className="font-bold">Order #{listingId}</p>
                                    <p>Total: {orderItem.token_rate} tokens</p>
                                </div>
                                <p>Purchased on {date}</p>
                            </div>
                            <div className="flex align-center flex-col">
                                <div className="flex flex-row">
                                    <img
                                        src={orderItem.listing_image}
                                        className="rounded p-4"
                                        width={150}
                                        alt={orderItem.listing_title}
                                    />
                                    <div className="p-4">
                                        <p>{orderItem.listing_title}</p>
                                        <p>{orderItem.mentor_name}</p>

                                        <a href={`/listings/${order}`}>
                                            <button className="bg-green-400 hover:bg-red-400 text-white font-bold py-2 px-2 m-2 rounded-full">
                                                View Listing
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
