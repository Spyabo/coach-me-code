"use client";

import { useUser } from "@clerk/nextjs";
import { listing } from "@lib/types/listings";
import stringToArray from "@lib/utils/stringToArray";
import { UploadButton, UploadDropzone } from "@uploadthing/react";
import "@uploadthing/react/styles.css";
import { useState } from "react";
import type { OurFileRouter } from "../../api/uploadthing/core";
import CancelButton from "../CancelButton";

export default function ListingForm() {
  const [listingTitle, setListingTitle] = useState("");
  const [listingDescription, setListingDescription] = useState("");
  const [listingImage, setListingImage] = useState("");
  const [programmingLanguages, setProgrammingLanguages] = useState("");
  const [listingTokens, setListingTokens] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
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
    // Add listing image conditional to make them have to upload a file
    if (listingImage === "") {
      setError(true);
      return;
    }

    // Send the form data to the Mongo server function in lib fix since can't be "use client"
    try {
      const res = await fetch("/api/listings", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json"
        }
      })
      const { result } = await res.json();

      const userPatch = await fetch("http://localhost:3000/api/users", {
        method: "PATCH",
        //bool true = order, false = lising
        body: JSON.stringify({
          clerkID: user?.id,
          order: result._id,
          bool: false
        })
      })

      setListingTitle("");
      setListingDescription("");
      setListingImage("");
      setProgrammingLanguages("");
      setListingTokens("");
      setSubmitted(true);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div >
      <form onSubmit={handleSubmit} className="px-6 bg-purple-100 py-4 rounded">
        <div className="">
          <h1 className="text-2xl font-semibold leading-7 text-gray-900 mb-2">
            Create a new listing
          </h1>
          <p className="text-sm leading-6 text-gray-600">
            Fill in the form to list your course. Click your profile name to view your current listings
          </p>
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="listingTitle"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Listing Title
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center text-gray-500 sm:text-sm "></span>
                  <input
                    type="text"
                    name="listingTitle"
                    id="listingTitle"
                    className="block flex-1 border-solid border-1 border-gray-300 rounded py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
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
              <p className="mt-2 mb-3 text-sm leading-6 text-gray-600">
                Write a few sentences about the service you would like to
                provide.
              </p>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={listingDescription}
                  onChange={(event) =>
                    setListingDescription(event.target.value)
                  }
                  placeholder="Listing Description"
                  required
                ></textarea>
              </div>
            </div>
            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">Cover photo</label>
              <div className="mt-2 flex justify-center flex-col rounded-lg border border-bold border-gray-900/25 px-6 py-10">
                <UploadDropzone<OurFileRouter>
                  endpoint="imageUploader"
                  onClientUploadComplete={(res) => {
                    setListingImage(res![0].fileUrl);
                    setError(false);
                    alert("Upload Completed");
                  }}
                />
                <div className="py-4">
                  <UploadButton<OurFileRouter>
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                      setListingImage(res![0].fileUrl);
                      setError(false);
                      alert("Upload Completed");
                    }}
                  />
                </div>
              </div>
            </div>
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
                  autoComplete="off"
                  className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="TypeScript, Python, Rust..."
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
                  autoComplete="off"
                  className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="50"
                  min='1'
                  value={listingTokens}
                  onChange={(event) => setListingTokens(event.target.value)}
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <CancelButton />
          <div className="bg-purple-700 rounded mt-6">
            <button
              className=" hover:bg-green-300 bg-purple-700 text-white py-3 px-6 rounded font-bold"
              type="submit"
              onSubmit={handleSubmit}
            >
              Post Listing
            </button>
          </div>
        </div>
      </form>
      {error && <div className="p-5" >
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-4 rounded relative" role="alert">
          <strong className="font-bold">Holy smokes!</strong>{" "}
          <span className="block sm:inline">Listing not created, make sure to add and image.</span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg className="fill-current h-6 w-6 text-red-500" role="button" onClick={() => setError(false)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
          </span>
        </div>
      </div>}
      {submitted && <div className="px-6 pb-5" >
        <div className="mt-10 bg-green-100 flex sm:flex-row flex-col text-center justify-center items-center gap-4 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Holy guacamole!</strong>{" "}
          <span className="block sm:inline">Listing has been created.</span>
          <a
            href="/listings"
            className="hover:bg-purple-600 bg-purple-800 text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            View all Listings!
          </a>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg className="fill-current h-6 w-6 text-green-500" role="button" onClick={() => setSubmitted(false)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
          </span>
        </div>
      </div>}
    </div>
  );
}
