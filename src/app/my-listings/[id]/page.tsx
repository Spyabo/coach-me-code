import { getUserByClerkId } from "@lib/mongo/users";
import { getUsersResponse } from "@lib/types/users";


export default async function MyListings({ params }) {
    const user: getUsersResponse = await getUserByClerkId(params.id)
    return (
        <>
            <div className="flex justify-center text-xl font-medium space-y-10 ">

                <ul>
                    Listing details:
                    <li>
                        Name: {user.name}
                    </li>
                    <li>
                        E-mail: {user.email}
                    </li>
                    <li>
                        Phone number: {user.phone}
                    </li>
                    <li>
                        Years of experience: {user.years_of_experience}
                    </li>
                    <li>
                        Programming languages: {user.programming_languages}
                    </li>
                    <li>
                        Tokens: {user.tokens}
                    </li>
                </ul>
            </div>

        </>

    )
}