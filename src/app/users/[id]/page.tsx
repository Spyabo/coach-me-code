import { getUsersById } from "@lib/mongo/users"
import { user } from "@lib/types/users"

export default async function UserById({ params }: {
    params: { id: string }
}) {
    const user: user = await getUsersById(params.id);
}