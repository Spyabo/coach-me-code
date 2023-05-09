"use client";

import { Transition } from "@headlessui/react";
import Image from "next/image";
import React, { useState } from "react";

import { SignedIn, useUser } from "@clerk/nextjs";
import Clerk from "../Clerk";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();

  return (
    <div>
      <div className="hidden md:block"></div>
      <nav className="bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  text-white">
          <div className="flex items-center justify-between h-16 py-4 md:py-0">
            <div className="flex items-center">
              <a href="/">
                <div className="flex items-center">
                  <div className="flex-grow 1">
                    <Image
                      src="/code.svg"
                      alt="Picture of the author"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="flex flex-wrap ">
                    <h1 className="text-white text-3xl font-bold md:pt-0 pl-6 justify-center hidden sm:block">
                      Coach Me Code
                    </h1>
                  </div>
                </div>
              </a>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="/listings"
                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Listings
                  </a>
                  <a
                    href="/listings/create-listing"
                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Create Listing
                  </a>
                  <SignedIn>
                    <a
                      href={`/wallet/${user?.id}`}
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Money
                    </a>
                  </SignedIn>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-4">
              <Clerk />
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <h1 className="text-white text-2xl font-bold pt-4 md:pt-0 md:text-3xl">
                  Coach Me Code
                </h1>
                <a
                  href="/listings"
                  className="hover:bg-yellow-100 hover:text-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Listings
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}
