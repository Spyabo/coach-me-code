"use client";
import { useRouter } from "next/navigation";
function CancelButton() {
  const router = useRouter();

  return (
    <div className="flex justify-end">
      <button
        onClick={() => router.back()}
        className="mt-6 bg-red-500 hover:bg-yellow-400  text-white py-3 px-6 rounded font-bold"
      >
        Cancel
      </button>
    </div>
  );
}

export default CancelButton;
