// https://tailwindui.com/components/application-ui/navigation/navbars

import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import {parseCookies} from "nookies";

const navigation = [
  { name: 'Tracks', href: '/you/tracks' },
  { name: 'Artists', href: '/you/artists' },
  { name: 'Recent', href: '/you/recents' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const cookies = parseCookies();

  const [userPicture, setUserPicture] = useState('https://cdn.mkn.cx/myspotify/dev/profile.png');
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    let picture = localStorage.getItem("ms-user-img");
    if (picture)
      setUserPicture(picture);
    if ({ cookies }.cookies['ms-user-code'])
      setLoggedIn(true);
  }, []);

  return (
    <Disclosure as="nav" className="bg-black">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400
                    hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center text-white font-display font-bold">
                  <Link href="/">
                    <a>MySpotify</a>
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link passHref href={item.href} key={item.name}>
                        <a
                          className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm
                            font-medium'
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Menu as="div" className="ml-3 relative">
                  {({ open }) => (
                    <>
                      <div>
                        <Menu.Button
                          className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2
                          focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        >
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src={userPicture}
                            alt="Person Profile"
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items
                          static
                          className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white
                            ring-1 ring-black ring-opacity-5 focus:outline-none"
                        >
                          <Menu.Item>
                            {/* <Link> does some weird stuff here */}
                            {({ active }) => (
                              <a
                                href="/logout"
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Sign out
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base
                    font-medium'
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}