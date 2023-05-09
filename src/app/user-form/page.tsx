/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useUser } from "@clerk/nextjs";
import { userType } from '@lib/types/users';
import stringToArray from "@lib/utils/stringToArray";
import { useState } from 'react';

export default function UserForm() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState(user?.primaryEmailAddress?.emailAddress);
  const [yearsExperience, setYearsExperience] = useState("");
  const [programmingLanguages, setProgrammingLanguages] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const fullName = `${firstName} ${lastName}`.trim();
    const newUser: userType = {
      clerk_id: user.id,
      name: fullName!,
      email: emailAddress,
      phone: phoneNumber,
      years_of_experience: parseInt(yearsExperience),
      programming_languages: stringToArray(programmingLanguages),
      listing_ids: [],
      order_ids: [],
      tokens: 0
    }
    try {
      const res = await fetch("http://localhost:3000/api/users", {
        method: "PUT",
        body: JSON.stringify(newUser),
        headers: {
          "Content-Type": "application/json"
        }
      })
      const { result } = await res.json();
      const clerkRes = await fetch("http://localhost:3000/api/users/clerk", {
        method: "PATCH",
        body: JSON.stringify({
          clerk_id: user.id,
          firstName: firstName,
          lastName: lastName,
        })
      })
      const clerk = await clerkRes.json();
    } catch (error) {
      console.log(error);
    }

    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setEmailAddress("");
    setYearsExperience("");
    setProgrammingLanguages("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center items-center flex-col m-8">
      <div className="border-b">
        <div className="header flex flex-col my-8">
          <h1 className="text-base font-semibold leading-7 text-gray-900">
            Nearly there!
          </h1>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            You just need to complete the below form:
          </p>
        </div>
        <div className="sm:col-span-4">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            First Name
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" value={firstName || ""}
                onChange={(event) => setFirstName(event.target.value)}
                required
              />
            </div>
          </div>
        </div>
        <div className="sm:col-span-4">
          <label
            htmlFor="lastName"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Last Name
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" value={lastName || ""}
                onChange={(event) => setLastName(event.target.value)}
                required
              />
            </div>
          </div>
        </div>
        <div className="sm:col-span-4">
          <label
            htmlFor="lastName"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" value={emailAddress}
                onChange={(event) => setEmailAddress(event.target.value)}
                required
              />
            </div>
          </div>
        </div>
        <div className="sm:col-span-4">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Phone number (optional)
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
                autoComplete="off"
              />
            </div>
          </div>
        </div>
        <div className="sm:col-span-4">
          <label
            htmlFor="yearsExperience"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Years of experience
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
              <input
                type="text"
                name="yearsExperience"
                id="yearsExperience"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" value={yearsExperience}
                onChange={(event) => setYearsExperience(event.target.value)}
                autoComplete="off"
                required
              />
            </div>
          </div>
        </div>
        <div className="sm:col-span-4">
          <label
            htmlFor="programmingLanguages"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Programming languages
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
              <input
                type="text"
                name="programmingLanguages"
                id="programmingLanguages"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="HTML, Javascript, PHP..." value={programmingLanguages}
                onChange={(event) => setProgrammingLanguages(event.target.value)}
                autoComplete="off"
                required
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-center gap-x-6">
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
          Submit
        </button>
      </div>
    </form>
  );
}
