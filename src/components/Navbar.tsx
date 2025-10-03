// app/components/Navbar.tsx (App Router client component)
"use client";

import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

type NavItem = { name: string; href: string };

const navigation: NavItem[] = [
  { name: "Tracks", href: "/you/tracks" },
  { name: "Artists", href: "/you/artists" },
  { name: "Recent", href: "/you/recents" },
];

function classNames(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function getCookie(name: string) {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

export default function Navbar() {
  const [userPicture, setUserPicture] = useState(
    "https://cdn.mkn.cx/myspotify/dev/profile.png"
  );
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const picture = localStorage.getItem("ms-user-img");
    if (picture) setUserPicture(picture);
    if (getCookie("ms-user-code")) setLoggedIn(true);
  }, []);

  return (
    <Disclosure as="nav" className="bg-black">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile menu button */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button
                  className="inline-flex items-center justify-center rounded-md p-2 text-gray-400
                             hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2
                             focus:ring-inset focus:ring-white"
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Brand + desktop nav */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center text-white font-display font-bold">
                  <Link href="/">NewTunes</Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="rounded-md px-3 py-2 text-sm font-medium text-gray-300
                                   hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* User menu */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button
                      className="flex rounded-full bg-gray-800 text-sm focus:outline-none
                                 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="sr-only">Open user menu</span>
                      {/* Keeping <img> for simplicity, swap to next/image if you prefer */}
                      <img
                        className="h-8 w-8 rounded-full"
                        src={userPicture}
                        alt="User avatar"
                      />
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
                    <Menu.Items
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1
                                 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href={loggedIn ? "/logout" : "/auth"}
                            className={classNames(
                              active && "bg-gray-100",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            {loggedIn ? "Sign out" : "Sign in"}
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          {/* Mobile nav */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300
                             hover:bg-gray-700 hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
