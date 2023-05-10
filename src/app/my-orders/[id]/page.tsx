import { getUserByClerkId } from "@lib/mongo/users";
import { getListings } from "@lib/mongo/listings";
import { getUsersResponse } from "@lib/types/users";



export default async function MyOrders({ params }) {
    const user: getUsersResponse = await getUserByClerkId(params.id);
    const { listings } = await getListings()
    const orders = user.order_ids;

    return (

        <h1 className="bg-black">Hello</h1>
    )

    const listing = orders.map((order) => {
        let result = listings.find(listing => listing._id === order)
        console.log(result)
        return result;
    })





}