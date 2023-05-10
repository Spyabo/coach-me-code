'use client'

import { useEffect, useState } from "react";

type clerkID = {
    id: string | undefined

}
export default async function MoneyNavSym(props: clerkID): Promise<JSX.Element> {

    const { id } = props
    const [tokens, setTokens] = useState<number | null>(null);


    // const res = await fetch(`http://localhost:3000/api/users/${id}`);
    // const result = await res.json()
    // console.log(result)

    useEffect(() => {
        async function fetchTokens() {
            try {
                const res = await fetch(`http://localhost:3000/api/users/${id}`);
                const result = await res.json();
                if (result && result.user && result.user.tokens) {
                    setTokens(result.user.tokens);
                }
            } catch (error) {
                console.error(error);
            }
        }
        fetchTokens();
    }, [id]);


    return (
        <div>
            <p>{tokens}</p>
        </div>
    )
}
