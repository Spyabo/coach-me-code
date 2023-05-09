'use client'
import { useState } from "react";
import { useUser } from "@clerk/clerk-react";
export default function money() {
  const [tokensToAdd, setTokensToAdd] = useState<number>(0);
  const { user } = useUser();


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await fetch(`/api/money/${user?.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tokens: tokensToAdd }),
    });
    const data = await response.json();
    console.log(data)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Add Tokens</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="tokensToAdd" className="block text-sm font-medium text-gray-700">
                Tokens to add
              </label>
              <div className="mt-1">
                <input
                  id="tokensToAdd"
                  name="tokensToAdd"
                  type="number"
                  autoComplete="off"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={tokensToAdd}
                  min='0'
                  onChange={(event) => setTokensToAdd(parseInt(event.target.value))}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add Tokens
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
