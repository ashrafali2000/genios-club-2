"use client";
import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { classNames } from "@/lib/classNames";
import { ConnectWallet, useDisconnect } from "@thirdweb-dev/react";
import Link from "next/link";

export default function Header({
  view,
  uid,
}: {
  view?: boolean;
  uid?: string;
}) {
  const disconnect = useDisconnect();
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
    <header className="relative z-10 bg-[#14000b] font-san">
      <div className="mx-auto hidden max-w-7xl  items-center justify-between px-5 text-3xl md:flex md:h-20 ">
        <Link href="/">
          <img src="/logo1.png" alt="" className="h-12 w-16" />
        </Link>

        <div className="hidden items-center md:flex">
          {!view ? <ConnectWallet /> : null}
          <div className="relative ">
            <Link
              href={!view ? "/main" : `/view/main/?uid=${uid}`}
              className="ml-10 mr-5 font-san text-[15px] font-bold text-white"
            >
              MAIN
            </Link>
          </div>
          {/*           <div className="relative ">
            <Link
              href={!view ? "/ranks-card" : `/view/ranks-card/?uid=${uid}`}
              className="ml-10 mr-10 font-san text-[15px] font-bold text-white"
            >
              MY RANKS
            </Link>
          </div> */}
          <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
            <span className="mr-5 font-san text-[15px] font-bold text-white">
              OFFICE
            </span>
            {isMenuOpen && (
              <div className="absolute z-10 w-40  rounded-md bg-white shadow-lg ">
                <div
                  className="px-3 py-1   text-[#212529]"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <Link
                    href={
                      !view
                        ? "/direct-referrals"
                        : `/view/direct-referrals/?uid=${uid}`
                    }
                    className="block px-2 py-[7px] text-[12px] text-sm font-medium text-[#212529] hover:bg-gray-100"
                    role="menuitem"
                  >
                    DIRECT REFERRALS
                  </Link>
                  {/*                   <Link
                    href={
                      !view ? "/total-team" : `/view/total-team/?uid=${uid}`
                    }
                    className="block px-2 py-[7px] text-[12px] text-sm font-medium text-[#212529] hover:bg-gray-100"
                    role="menuitem"
                  >
                    TOTAL TEAM
                  </Link> */}
                  <Link
                    href={
                      !view ? "/statistics" : `/view/statistics/?uid=${uid}`
                    }
                    className="block px-2 py-[7px] text-[12px] text-sm font-medium text-[#212529] hover:bg-gray-100"
                    role="menuitem"
                  >
                    STATISTICS
                  </Link>
                  {/* <Link
                    href={
                      !view ? "/ranks-card" : `/view/ranks-card/?uid=${uid}`
                    }
                    className="block px-2 py-[7px] text-[12px] text-sm font-medium capitalize text-[#212529] hover:bg-gray-100"
                    role="menuitem"
                  >
                    RANKS CARD
                  </Link> */}
                  {/* <Link
                    href={
                      !view ? "/affiliates" : `/view/affiliates/?uid=${uid}`
                    }
                    className="block px-2 py-[7px] text-[12px] text-sm font-medium text-[#212529] hover:bg-gray-100"
                    role="menuitem"
                  >
                    AFFILIATES
                  </Link> */}
                  {/*                   <Link
                    href={
                      !view ? "/ranks-earned" : `/view/ranks-earned/?uid=${uid}`
                    }
                    className=" block px-2 py-[7px] text-[12px] text-sm font-medium capitalize text-[#212529] hover:bg-gray-100"
                    role="menuitem"
                  >
                    RANKS EARNED
                  </Link> */}
                </div>
              </div>
            )}
          </div>

          <div>
            <button onClick={disconnect} className="nav-a active">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 113.525 122.879"
                className="ml-5 fill-current text-red-500"
              >
                <g>
                  <path d="M78.098,13.509l0.033,0.013h0.008c2.908,1.182,5.699,2.603,8.34,4.226c2.621,1.612,5.121,3.455,7.467,5.491 c11.992,10.408,19.58,25.764,19.58,42.879v0.016h-0.006c-0.006,15.668-6.361,29.861-16.633,40.127 c-10.256,10.256-24.434,16.605-40.09,16.613v0.006h-0.033h-0.015v-0.006c-15.666-0.004-29.855-6.357-40.123-16.627l-0.005,0.004 C6.365,95.994,0.015,81.814,0.006,66.15H0v-0.033v-0.039h0.006c0.004-6.898,1.239-13.511,3.492-19.615 c0.916-2.486,2.009-4.897,3.255-7.21C13.144,27.38,23.649,18.04,36.356,13.142l2.634-1.017v2.817v18.875v1.089l-0.947,0.569 l-0.007,0.004l-0.008,0.005l-0.007,0.004c-1.438,0.881-2.809,1.865-4.101,2.925l0.004,0.004c-1.304,1.079-2.532,2.242-3.659,3.477 h-0.007c-5.831,6.375-9.393,14.881-9.393,24.22v0.016h-0.007c0.002,9.9,4.028,18.877,10.527,25.375l-0.004,0.004 c6.492,6.488,15.457,10.506,25.349,10.512v-0.006h0.033h0.015v0.006c9.907-0.002,18.883-4.025,25.374-10.518 S92.66,76.045,92.668,66.148H92.66v-0.033V66.09h0.008c-0.002-6.295-1.633-12.221-4.484-17.362 c-0.451-0.811-0.953-1.634-1.496-2.453c-2.719-4.085-6.252-7.591-10.359-10.266l-0.885-0.577v-1.042V15.303v-2.857L78.098,13.509 L78.098,13.509z M47.509,0h18.507h1.938v1.937v49.969v1.937h-1.938H47.509h-1.937v-1.937V1.937V0H47.509L47.509,0z"></path>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <Disclosure as="nav" className="block bg-[#14000b] md:hidden">
        {({ open }) => (
          <>
            <div className=" px-2 sm:px-6 lg:px-8">
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
                  <div className="relative">
                    <Link
                      href={!view ? "/main" : `/view/main/?uid=${uid}`}
                      className="mr-10 font-san text-[15px] font-bold text-white"
                    >
                      MAIN
                    </Link>
                  </div>
                  {/*                   <div className="relative">
                    <Link
                      href={
                        !view ? "/ranks-card" : `/view/ranks-card/?uid=${uid}`
                      }
                      className="mr-10 font-san text-[15px] font-bold text-white"
                    >
                      MY RANKS
                    </Link>
                  </div> */}
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="mr-10 flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 font-san text-[15px] font-bold leading-7   text-white  ">
                          OFFICE
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          <Disclosure.Button
                            key="1"
                            as="a"
                            href="/"
                            className="block rounded-lg py-2 pl-3 pr-3 text-sm font-semibold leading-7 "
                          >
                            <Link
                              href={
                                !view
                                  ? "/direct-referrals"
                                  : `/view/direct-referrals/?uid=${uid}`
                              }
                              className="block px-4 py-2 text-[14px] text-sm font-medium text-white "
                              role="menuitem"
                            >
                              DIRECT REFERRALS
                            </Link>
                            {/*                             <Link
                              href={
                                !view
                                  ? "/total-team"
                                  : `/view/total-team/?uid=${uid}`
                              }
                              className="block px-4 py-2 text-[14px] text-sm font-medium text-white "
                              role="menuitem"
                            >
                              TOTAL TEAM
                            </Link> */}
                            <Link
                              href={
                                !view
                                  ? "/statistics"
                                  : `/view/statistics/?uid=${uid}`
                              }
                              className="block px-4 py-2 text-[14px] text-sm font-medium text-white "
                              role="menuitem"
                            >
                              STATISTICS
                            </Link>
                            {/* <Link
                              href={
                                !view
                                  ? "/ranks-card"
                                  : `/view/ranks-card/?uid=${uid}`
                              }
                              className="block px-4 py-2 text-[14px] text-sm font-medium text-[#212529] hover:bg-gray-100"
                              role="menuitem"
                            >
                              RANKS CARD
                            </Link> */}
                            {/*                             <Link
                              href={
                                !view
                                  ? '/affiliates'
                                  : `/view/affiliates/?uid=${uid}`
                              }
                              className="block px-4 py-2 text-[14px] text-sm font-medium text-[#212529] hover:bg-gray-100"
                              role="menuitem"
                            >
                              Affiliates
                            </Link> */}
                            {/*                             <Link
                              href={
                                !view
                                  ? "/ranks-earned"
                                  : `/view/ranks-earned/?uid=${uid}`
                              }
                              className="block px-4 py-2 text-[14px] text-sm font-medium text-[#212529] hover:bg-gray-100"
                              role="menuitem"
                            >
                              RANKS EARNED
                            </Link> */}
                          </Disclosure.Button>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>

                  <div
                    className="relative"
                    onMouseEnter={enterr}
                    onMouseLeave={leavee}
                  >
                    {isMenuOpenn && (
                      <div className="absolute z-10 mt-2 w-40  rounded-md bg-white shadow-lg ">
                        <div
                          className="px-3 py-1  text-[#212529]"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="options-menu"
                        >
                          <Link
                            href="#"
                            className="block px-4 py-2 text-[14px] text-sm font-medium text-[#212529] hover:bg-gray-100"
                            role="menuitem"
                          >
                            CONTROL PANEL
                          </Link>
                          <Link
                            href="#"
                            className="block px-4 py-2 text-[14px] text-sm font-medium text-[#212529] hover:bg-gray-100"
                            role="menuitem"
                          >
                            DOWNLINE
                          </Link>
                          <Link
                            href="#"
                            className="block px-4 py-2 text-[14px] text-sm font-medium text-[#212529] hover:bg-gray-100"
                            role="menuitem"
                          >
                            INSTRUCTIONS
                          </Link>
                          <Link
                            href="#"
                            className="block px-4 py-2 text-[14px] text-sm font-medium text-[#212529] hover:bg-gray-100"
                            role="menuitem"
                          >
                            PROMO TOOLS
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>

                  <div>
                    <button onClick={disconnect} className="nav-a active">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="27"
                        height="27"
                        viewBox="0 0 113.525 122.879"
                        className="fill-current text-red-500 "
                      >
                        <g>
                          <path d="M78.098,13.509l0.033,0.013h0.008c2.908,1.182,5.699,2.603,8.34,4.226c2.621,1.612,5.121,3.455,7.467,5.491 c11.992,10.408,19.58,25.764,19.58,42.879v0.016h-0.006c-0.006,15.668-6.361,29.861-16.633,40.127 c-10.256,10.256-24.434,16.605-40.09,16.613v0.006h-0.033h-0.015v-0.006c-15.666-0.004-29.855-6.357-40.123-16.627l-0.005,0.004 C6.365,95.994,0.015,81.814,0.006,66.15H0v-0.033v-0.039h0.006c0.004-6.898,1.239-13.511,3.492-19.615 c0.916-2.486,2.009-4.897,3.255-7.21C13.144,27.38,23.649,18.04,36.356,13.142l2.634-1.017v2.817v18.875v1.089l-0.947,0.569 l-0.007,0.004l-0.008,0.005l-0.007,0.004c-1.438,0.881-2.809,1.865-4.101,2.925l0.004,0.004c-1.304,1.079-2.532,2.242-3.659,3.477 h-0.007c-5.831,6.375-9.393,14.881-9.393,24.22v0.016h-0.007c0.002,9.9,4.028,18.877,10.527,25.375l-0.004,0.004 c6.492,6.488,15.457,10.506,25.349,10.512v-0.006h0.033h0.015v0.006c9.907-0.002,18.883-4.025,25.374-10.518 S92.66,76.045,92.668,66.148H92.66v-0.033V66.09h0.008c-0.002-6.295-1.633-12.221-4.484-17.362 c-0.451-0.811-0.953-1.634-1.496-2.453c-2.719-4.085-6.252-7.591-10.359-10.266l-0.885-0.577v-1.042V15.303v-2.857L78.098,13.509 L78.098,13.509z M47.509,0h18.507h1.938v1.937v49.969v1.937h-1.938H47.509h-1.937v-1.937V1.937V0H47.509L47.509,0z"></path>
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
}
