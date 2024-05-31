"use client";
import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { classNames } from "@/lib/classNames";

const HomeHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuOpenn, setIsMenuOpenn] = useState(false);

  const enter = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const leave = () => {
    setIsMenuOpen(false);
  };
  const enterr = () => {
    setIsMenuOpenn(!isMenuOpen);
  };
  const leavee = () => {
    setIsMenuOpenn(false);
  };

  return (
    <main className="relative z-10 bg-[#14000b] font-san">
      <section className="mx-auto hidden max-w-[1400px]  items-center justify-between px-5 text-3xl md:flex md:h-20 ">
        <Link href="/">
          <img src="/logo1.png" alt="logo1" className="h-12 w-16" />
        </Link>

        <div className="hidden items-center md:flex">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="mr-10 inline-flex w-full items-center justify-center gap-x-1.5 text-xl  font-bold  text-white   ">
                Download Our Plan
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-white"
                  aria-hidden="true"
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
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="assets/Full Genios Club G3X2 G3X5 English.pdf"
                        target="_blank"
                        className={classNames(
                          active ? "bg-gray-700 text-white" : "text-white",
                          "block px-4 py-2 text-[18px]"
                        )}
                      >
                        Download Our Plan English
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="assets/Genios Club G3X2 G3X5 Español.pdf"
                        target="_blank"
                        className={classNames(
                          active ? "bg-gray-700 text-white" : "text-white",
                          "block px-4 py-2 text-[18px]"
                        )}
                      >
                        Download Our Plan Español
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          <div className="relative">
            <a
              href={"auth/login"}
              className="mr-10 font-san  font-bold text-white text-xl"
            >
              DASHBOARD
            </a>
          </div>
          <div className="relative">
            <a
              href={"authgc2/login"}
              className="mr-10 font-san  font-bold text-white text-xl uppercase"
            >
              Genios Club 2
            </a>
          </div>
        </div>
      </section>
      <Disclosure as="nav" className="block bg-[#14000b] md:hidden">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-end">
                <div className="flex flex-1 items-center  sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 ">
                    <img
                      className="block h-8 w-auto lg:hidden"
                      src="/logo1.png"
                      alt="Your Company"
                    />
                  </div>
                </div>

                <div className="absolute inset-y-0  flex items-center md:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white   ">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className=" ">
                <div className="items-center space-y-5 px-2 pb-3 pt-2">
                  <div className="relative">
                    <a
                      href={"auth/login"}
                      className="mr-10 font-san text-[15px] font-bold text-white"
                    >
                      DASHBOARD
                    </a>
                  </div>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </main>
  );
};

export default HomeHeader;
