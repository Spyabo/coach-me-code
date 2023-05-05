"use client";

import { useUser } from "@clerk/nextjs";
import { listing } from "@lib/types/listings";
import stringToArray from "@lib/utils/stringToArray";
import { useState } from "react";

export default function ListingForm() {
  const [listingTitle, setListingTitle] = useState("");
  const [listingDescription, setListingDescription] = useState("");
  const [listingImage, setListingImage] = useState(undefined);
  const [programmingLanguages, setProgrammingLanguages] = useState("");
  const [listingTokens, setListingTokens] = useState("");
  const { user, isSignedIn, isLoaded } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData: listing = {
      clerk_id: user.id,
      mentor_name: user.fullName!,
      listing_title: listingTitle,
      listing_image: listingImage,
      listing_description: listingDescription,
      programming_languages: stringToArray(programmingLanguages),
      token_rate: parseInt(listingTokens)
    };
    // Send the form data to the Mongo server function in lib fix since can't be "use client"
    const res = await fetch("http://localhost:3000/api/listings", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const { result } = await res.json();
    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h1 className="text-base font-semibold leading-7 text-gray-900">
            Create a new listing
          </h1>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This will allow you to create a new listing
          </p>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="listingTitle"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Listing Title
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                  <input
                    type="text"
                    name="listingTitle"
                    id="listingTitle"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    value={listingTitle}
                    onChange={(event) => setListingTitle(event.target.value)}
                    placeholder="Listing Title"
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="description"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Description
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={listingDescription}
                  onChange={(event) =>
                    setListingDescription(event.target.value)
                  }
                  placeholder="Listing Description"
                  required
                ></textarea>
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Write a few sentences about the service you would like to
                provide.
              </p>
            </div>

            {/* <div className="col-span-full">
            <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">Cover photo</label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
                </svg>
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only"/>
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div> */}
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="programming-languages"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Programming Languages
              </label>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                List all of the languages you are offering within this service
              </p>
              <div className="mt-2">
                <input
                  type="text"
                  name="programming-languages"
                  id="programming-languages"
                  autoComplete="programming-languages"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="HTML, Javascript, PHP..."
                  value={programmingLanguages}
                  onChange={(event) =>
                    setProgrammingLanguages(event.target.value)
                  }
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="token-rate"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Token Rate
              </label>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                What is the token rate per hour for this service?
              </p>
              <div className="mt-2">
                <input
                  type="number"
                  name="token-rate"
                  id="token-rate"
                  autoComplete="token-rate"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="50"
                  value={listingTokens}
                  onChange={(event) => setListingTokens(event.target.value)}
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onSubmit={handleSubmit}
        >
          Post Listing
        </button>
      </div>
    </form>
  );
}
