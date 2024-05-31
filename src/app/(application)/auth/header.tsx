"use client";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ConnectWallet } from "@thirdweb-dev/react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="relative z-10 bg-[#14000b] font-san">
      <div className="mx-auto hidden max-w-7xl  items-center justify-between px-5 text-3xl md:flex md:h-20 ">
        <Link href="/">
          <img src="/logo1.png" alt="" className="h-12 w-16" />
        </Link>

        <div className="hidden items-center md:flex">
          <ConnectWallet />
        </div>
      </div>

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

            <Disclosure.Panel className="md:hidden">
              <div className=" ">
                <div className="items-center space-y-5 p-5 pt-2">
                  <ConnectWallet />
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
}
