"use client";

import { SignedIn, useUser } from "@clerk/nextjs";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import React, { useState } from "react";
import Clerk from "../Clerk";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();

  return (
    <div>
      <nav className="bg-purple-800 text-white fixed top-0 w-full mb-5 z-40">
        <div className="max-w-7xl mx-auto lg:px-7  text-white">
          <div className="flex items-center justify-between h-16 md:px-6 px-6">
            <div className="flex items-center justify-center">
              <a href="/">
                <div className="flex items-center">
                  <div className="flex-grow 1">
                    <Image
                      src="/logo.svg"
                      alt="Picture of the author"
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className="flex flex-wrap ">
                    <h1 className="text-white text-1xl md:text-2xl font-bold md:pt-0 justify-center lg:text-3xl hidden lg:block md:block ">
                      Coach Me Code
                    </h1>
                  </div>
                </div>
              </a>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="/listings"
                    className=" hover:bg-purple-600 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Listings
                  </a>
                  <SignedIn>
                    <a
                      href="/listings/create-listing"
                      className=" hover:bg-purple-600 text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Create Listing
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
                  className="bg-purple-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-purple-500 focus:ring-white"
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
            <div className="md:hidden" id="mobile-menu z-40">
              <div ref={ref} className="px-2 pb-3 space-y-1 sm:px-3 flex flex-col">
                <a
                  href="/listings"
                  className="hover:bg-purple-600 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Listings
                </a>
                <SignedIn>
                  <a
                    href="/listings/create-listing"
                    className="hover:bg-purple-600 text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Create Listing
                  </a>
                </SignedIn>
                <a
                  className="hover:bg-purple-600 text-white block px-3 py-2 rounded-md text-base font-medium"
                  href={`/users/${user?.id}/my-listings`}
                >
                  My Listings
                </a>
                <a
                  className="hover:bg-purple-600 text-white block px-3 py-2 rounded-md text-base font-medium"
                  href={`/users/${user?.id}/my-orders`}
                >
                  My Orders
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}
