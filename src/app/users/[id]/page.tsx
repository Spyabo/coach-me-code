import { getUsersById } from "@lib/mongo/users"
import { user } from "@lib/types/users"
import Head from "next/head";

export default async function UserById({ params }: {
    params: { id: string }
}) {
    const user: user = await getUsersById(params.id);

    return (
        <div className="bg-white rounded-lg shadow-lg h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ul>
                <li>
                    <h1 className="text-lg font-bold pt-2 pb-2">{user.name}</h1>
                </li>
                <li>
                    <strong>Email: </strong>{user.email}
                </li>
                <li>
                    <strong>Phone: </strong>{user.phone}
                </li>
                <li>
                    <strong>Years of Experience: </strong>{user.years_of_experience}
                </li>
                <li>
                    <strong>Programming Languages:</strong>{user.programming_languages}
                </li>
                <li>
                    <strong> <h3>Other courses:</h3></strong>{user.listing_ids.toString()}
                </li>
            </ul>
        </div>
    )
}