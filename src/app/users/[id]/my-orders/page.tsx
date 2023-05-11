import { getListings } from "@lib/mongo/listings";
import { getUserByClerkId } from "@lib/mongo/users";
import { getListingsResponse } from "@lib/types/listings";
import { getUsersResponse } from "@lib/types/users";

export default async function Page({ params }) {
    const user: getUsersResponse = await getUserByClerkId(params.id);
    const { listings } = await getListings();
    const orders = user.order_ids;

    return (
        orders.length === 0 ? <h1 className="flex justify-center text-4xl p-10 font-bold">No orders yet!</h1> :
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-3xl font-bold mt-16 text-center p-4 underline">
                    Your Order History
                </h1>
                <div className="lg:w-1/2">
                    {orders.map((order) => {
                        const listingId = Object.keys(order)[0];
                        const date = new Date(Date.parse(order[listingId])).toLocaleDateString();
                        const orderItem = listings.find(
                            (listing: getListingsResponse) =>
                                listing._id === Object.keys(order)[0]
                        );

                        return (
                            <div
                                key={listingId}
                                className="bg-gray-300 rounded-lg shadow-lg m-10 flex flex-col border-solid border-2 border-purple-600 overflow-x-auto whitespace-normal"
                            >
                                <div className="flex flex-col bg-purple-800 text-white p-2 rounded">
                                    <div className="flex flex-col justify-between sm:flex-col">
                                        <p className="font-bold">Order: #{listingId}</p>
                                        <p>Total Price: {orderItem?.token_rate} tokens</p>
                                    </div>
                                    <p>Booking Date: {date}</p>
                                </div>
                                <div className="flex justify-center items-center text-center flex-col">
                                    <div>
                                        <img
                                            src={orderItem?.listing_image}
                                            className="rounded shadow-md mt-2"
                                            height={400}
                                            width={400}
                                            alt={orderItem?.listing_title}
                                        />
                                        <div className="p-4">
                                            <p>{orderItem?.listing_title}</p>
                                            <p>{orderItem?.mentor_name}</p>

                                            <a href={`/listings/${order}`}>
                                                <button className="bg-red-500 hover:bg-yellow-400 text-white font-bold py-2 px-2 m-2 rounded-full">
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
