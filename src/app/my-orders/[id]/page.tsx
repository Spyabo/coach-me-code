import { getUserByClerkId } from "@lib/mongo/users";
import { getListings } from "@lib/mongo/listings";
import { getUsersResponse } from "@lib/types/users";
import { getListingsResponse } from "@lib/types/listings";

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
                    let orderItem = listings.find(
                        (listing: getListingsResponse) => listing._id === order
                    );
                    console.log(orderItem);
                    return (
                        <div
                            key={order}
                            className="bg-white rounded-lg shadow-lg mx-auto m-10 w-1/2 flex flex-col border-solid border-2 border-orange-600"
                        >
                            <div className="bg-slate-400  flex-col justify-between p-2 rounded">
                                <p>Order #{order}</p>
                                <p>Total: {orderItem.token_rate}</p>
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
                                            <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-2 m-2 rounded-full">
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
