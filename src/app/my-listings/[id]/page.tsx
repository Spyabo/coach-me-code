import { getUserByClerkId } from "@lib/mongo/users";
import { getUsersResponse } from "@lib/types/users";
import { user } from "@lib/types/users"


export default async function MyListings({ params }) {
    console.log(params.id, "parms in [id]")
    const user: getUsersResponse = await getUserByClerkId(params.id)
    console.log(user, "userrr")
    return (
        <h1>lsitung in slug</h1>
    )
}