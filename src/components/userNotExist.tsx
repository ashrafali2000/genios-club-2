import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function UserNotExist() {
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="flex w-full flex-col items-center justify-center rounded-md bg-[#2c0219] p-10 font-san">
                    <h1 className="text-center font-medium text-[#9168bf] sm:text-[35px]">
                      YOUR NOT REGISTER
                    </h1>

                    <div className="mt-4 w-full px-16 sm:text-[25px]">
                      <Link
                        href={`/auth/register`}
                        className="mt-4 inline-block h-fit w-full cursor-pointer rounded-3xl bg-[#9064b2] p-[10px] text-center text-[12px] font-normal leading-[20px] text-white sm:p-[15px] sm:text-[15px]"
                      >
                        REGISTER HERE
                      </Link>
                      <Link
                        href={`/auth/login`}
                        className="mt-4 inline-block h-fit w-full cursor-pointer rounded-3xl bg-[#9064b2] p-[10px] text-center text-[12px] font-normal leading-[20px] text-white sm:p-[15px] sm:text-[15px]"
                      >
                        VIEW USER
                      </Link>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <section className="flex h-screen items-center justify-center bg-[#2c0219]">
        <div className="mx-auto max-w-screen-xl px-4 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-blue-600 lg:text-9xl">
              404
            </h1>
            <p className="mb-4 text-3xl font-bold tracking-tight text-white  md:text-4xl">
              You are not Register.
            </p>
            <p className="mb-4 text-lg font-light text-white">
              Sorry, we can not find that page. You can register Or can view
              other user account.
            </p>
            {/* <Link
              href={`/auth/register`}
              className="mt-4 inline-block h-fit w-[70%] cursor-pointer rounded-3xl bg-[#9064b2] p-[10px] text-center text-[12px] font-normal leading-[20px] text-white sm:p-[15px] sm:text-[15px]"
            >
              REGISTER HERE
            </Link> */}
          </div>
        </div>
      </section>
    </>
  );
}
