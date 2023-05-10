import { useEffect, useState } from "react";

type clerkID = {
    id: string | undefined
}

export default function MoneyNavSym(props: clerkID): JSX.Element {

    const { id } = props
    const [tokens, setTokens] = useState<number | null>(null);

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
            {tokens}
        </div>
    )
}