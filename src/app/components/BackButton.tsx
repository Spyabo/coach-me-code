'use client'
import { useRouter } from "next/navigation";
function BackButton() {
    const router = useRouter();

    return (
        <button
            onClick={() => router.back()}
            className="text-gray-600 mt-4 hover:text-gray-800 focus:outline-none focus:text-gray-800"
        >
            ← Back
        </button>
    )
}

export default BackButton