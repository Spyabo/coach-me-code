import { getUserByClerkId } from "@lib/mongo/users";

type clerkID = {
    id: string | undefined

}
export default async function MoneyNavSym(props: clerkID): Promise<JSX.Element> {

    const { id } = props
    console.log(id)

    const res = await getUserByClerkId(id)



    return (
        <div>
            {res.tokens}
        </div>
    )
}
