'use client'
import { useUser } from "@clerk/clerk-react";
import Image from 'next/image';
import { useState } from "react";

export default function Money() {
  const [tokensToAdd, setTokensToAdd] = useState<number>(0);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
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
    setIsSuccess(true);
  }

  return (
    <div className=" max-w-7xl mx-auto container flex flex-col py-12 px-6">
      <div className="flex flex-col gap-4 sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Add tokens to you wallet...
        </h2>
        <p className="text-center">You can only purchase courses if you have enough tokens in your wallet!</p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="tokensToAdd" className="block text-sm font-medium text-gray-700">
                Tokens to Add
              </label>
              <div className="mt-1">
                <input
                  id="tokensToAdd"
                  name="tokensToAdd"
                  type="number"
                  autoComplete="off"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={tokensToAdd}
                  min='1'
                  max='500'
                  onChange={(event) => setTokensToAdd(parseInt(event.target.value))}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-400 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600"
              >
                Add Tokens
              </button>
            </div>
            {isSuccess && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Tokens added successfully!</strong>
              </div>
            )}
          </form>
        </div>
      </div>
      <div className="invisible md:visible lg:visible flex justify-end lg:-mt-14">
        <Image
          className="float-right"
          src="/tokens.svg"
          alt="a graphic of tokens"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
