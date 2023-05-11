'use client'
import { useRouter } from "next/navigation";
function BackButton() {
    const router = useRouter();

    return (
        <div className="flex justify-end">
            <button
                onClick={() => router.back()}
                className="mt-6 bg-green-400 hover:bg-purple-700 text-white py-3 px-6 rounded font-bold"
            >
                ← Back
            </button>
        </div >
    )
}

export default BackButton