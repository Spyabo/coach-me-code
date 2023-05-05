'use client'
import { useRouter } from "next/navigation";
function BackButton() {
    const router = useRouter();

    return (
        <div className="flex justify-end">
            <button
                onClick={() => router.back()}
                className="bg-orange-500 text-white text-lg font-bold py-3 px-6 rounded-full  hover:bg-orange-600 transition-colors duration-300 ease-in-out"
            >
                ← Back
            </button>
        </div>
    )
}

export default BackButton