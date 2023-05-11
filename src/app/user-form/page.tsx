/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useUser } from "@clerk/nextjs";
import { userType } from '@lib/types/users';
import stringToArray from "@lib/utils/stringToArray";
import Image from 'next/image';
import { useRouter } from "next/navigation";
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
  const router = useRouter();

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

    router.push("/welcome");
  };

  return (
    <div className="flex flex-col justify-center container px-10 py-10 bg-slate-300 max-w-7xl mx-auto sm:px-6 lg:px-7">
      <form onSubmit={handleSubmit} className="px-6 bg-purple-100 py-4 rounded">
        <div className="flex justify-between md:justify-between lg:justify-between ">
          <div className="flex flex-col md:flex-1 lg:flex-1">

            <div className="header flex flex-col mb-2">
              <h1 className="text-base font-semibold leading-7 text-gray-900">
                Nearly there!
              </h1>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                You just need to complete the below form:
              </p>
            </div>

            <div className="">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-3"
                  value={firstName || ""}
                  onChange={(event) => setFirstName(event.target.value)}
                  required
                />
              </div>

              <div className="">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-3 "
                    value={lastName || ""}
                    onChange={(event) => setLastName(event.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-3"
                    value={emailAddress}
                    onChange={(event) => setEmailAddress(event.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Phone number (optional)
                </label>
                <div className="mt-2">
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={phoneNumber}
                    onChange={(event) => setPhoneNumber(event.target.value)}
                    autoComplete="off"
                  />
                </div>
              </div>

              <div className="">
                <label
                  htmlFor="yearsExperience"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Years of experience
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="yearsExperience"
                    id="yearsExperience"
                    className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-3"
                    value={yearsExperience}
                    onChange={(event) => setYearsExperience(event.target.value)}
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="">
              <label
                htmlFor="programmingLanguages"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Programming languages
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="programmingLanguages"
                  id="programmingLanguages"
                  className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-3"
                  value={programmingLanguages}
                  onChange={(event) => setProgrammingLanguages(event.target.value)}
                  autoComplete="off"
                  required
                />
              </div>
            </div>

          </div>
          <Image
            src="/user-form.svg"
            alt="A coding coach mentoring a student next to a whiteboard"
            width={300}
            height={300}
            className="w-32 flex-1 hidden md:block lg:block"
          />
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="mt-6 bg-red-500 hover:bg-yellow-400  text-white py-3 px-6 rounded font-bold transition-colors duration-300 ease-in-out"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="mt-6 hover:bg-green-300 bg-purple-700 text-white py-3 px-6 rounded font-bold transition-colors duration-300 ease-in-out"
            onSubmit={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
