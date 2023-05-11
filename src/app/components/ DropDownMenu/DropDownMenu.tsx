
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function MyDropdown({ userName, userId }) {

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          {userName}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none invisible md:visible lg:visible">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${active ? 'bg-purple-700 text-white bg-opacity-30' : 'text-gray-900'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  href={`/users/${userId}/my-listings`}
                >
                  My Listings
                </a>
              )}
            </Menu.Item>
          </div>
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${active ? 'bg-purple-700 text-white bg-opacity-30' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`} href={`/users/${userId}/my-orders`}
                > My Orders</a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu >

  )
}









