import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  UserCircleIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import Link from "next/link";

const navigation = [{ name: "Chats", href: "/", current: true }, { name: "Profile", href: "/profile", current: false }];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const users = [
  {
    name: "Jane Cooper",
    id: "1a",
    isOnline: true,
    photoURL: 'https://avatars.githubusercontent.com/u/88154142?v=4'
  },
  {
    name: "Mark Jane",
    id: "2a",
    isOnline: false,
    photoURL: 'https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  },
];

export default function Header() {
  const router = useRouter();
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 sticky">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700
                transition hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6 text-white" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6 text-white" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <ChatBubbleOvalLeftEllipsisIcon
                    onClick={() => router.push("/")}
                    className="block w-8 h-8 lg:hidden cursor-pointer text-white animate-pulse" 
                  />
                  <ChatBubbleOvalLeftEllipsisIcon
                    className="hidden h-8 w-8 lg:block cursor-pointer text-white animate-pulse" 
                    onClick={() => router.push("/")}
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-white text-black"
                            : "text-gray-300 hover:bg-gray-800 hover:text-white ",
                          "px-3 py-2 rounded-md text-sm font-medium", "hover:opacity-90"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full p-1 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <span className="w-2 h-2 absolute rounded-full animate-pulse bg-blue-600"></span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
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
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-black py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/profile"
                            className={classNames(
                              active ? "menu-hover" : "",
                              "menu-item"
                            )}
                          >
                            Your Profile
                            <UserCircleIcon className="w-6 h-6 text-white" />
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <div
                            className={classNames(
                              active ? "menu-hover" : "",
                              "menu-item"
                            )}
                          >
                            Users <UsersIcon className="h-6 w-6" />
                          </div>
                        )}
                      </Menu.Item>

                      {/* Profiles */}

                      {users.map((user) => (
                        <Menu.Item key={user.id}>
                          {({ active }) => (
                            <Link
                              href={`/chat/${user.id}`}
                              className={classNames(
                                active ? "menu-hover" : "",
                                "menu-item"
                              )}
                            >
                              <span className={`${user.isOnline ? 'status-online' : 'status-offine'}`} />
                              <p
                                href="/"
                                className={classNames(
                                  active ? "menu-hover" : "",
                                  "block px-4 py-2 text-sm font-bold cursor-pointer text-gray-600 hover:text-white"
                                )}
                              >
                                {user.name.length > 10 ? user.name.slice(0, 9) + '...' : user.name}
                              </p>
                              <img
                                src={user.photoURL}
                                className="menu-user-avatar"
                                alt="profile picture"
                              />
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Link href={`/${item.href}`}>
                <Disclosure.Button
                  key={item.name}
                  as={'button'}
                  className={classNames(
                    item.current
                      ? "bg-white text-black"
                      : "bg-black text-white hover:bg-[black]/80 hover:text-gray-200",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
