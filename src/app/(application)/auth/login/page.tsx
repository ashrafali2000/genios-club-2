'use client';

import { classNames } from '@/lib/classNames';
import { AddressZero, GeniosClubAbi, GeniosClubAddress } from '@/lib/constant';
import { ConnectWallet } from '@thirdweb-dev/react';
import { useAddress, useContract, useContractRead } from '@thirdweb-dev/react';
import { ethers } from 'ethers';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Page = () => {
  const router = useRouter();
  const address = useAddress();
  const { contract } = useContract(GeniosClubAddress, GeniosClubAbi);

  const { data: IsUserExists } = useContractRead(contract, 'IsUserExists', [
    ethers.utils.isAddress(address as string) ? address : AddressZero,
  ]);

  const [id, setId] = useState<string>('');
  const { data: LastUserId, isLoading: LastUserIdIsLoading } = useContractRead(
    contract,
    'LastUserId'
  );

  function handleClick() {
    router.push(`/view/main?uid=${id}`);
  }

  return (
    <section className=" ">
      <div className="overlay flex h-fit px-5 py-10 md:h-screen md:px-10 lg:px-20">
        <div className="mx-auto flex max-w-6xl  items-center">
          <div className="relative  z-10 w-fit md:mt-10 lg:mt-0">
            <div className="  h-fit justify-between rounded-[9px] bg-[#2c0219] p-10 text-center font-san  lg:flex lg:space-x-10  ">
              <div className="flex w-full flex-col justify-center rounded-md border p-5 lg:rounded-r-none lg:border-r-0">
                <h1 className="text-center font-medium text-[#9168bf]  sm:text-[25px]">
                  Login To Your Personal Account
                </h1>
                {/* <InjectedWalletComponent/> */}
                <h1 className="mt-7 text-center text-[20px] font-light text-[#eeeeee]">
                  For access to all the functions of your personal account, use
                  automatic login
                </h1>

                <div className="mt-7 flex  justify-center">
                  {address ? (
                    IsUserExists ? (
                      <Link
                        href="/main"
                        className="inline-block w-full  cursor-pointer rounded-3xl bg-[#9064b2] p-[10px] text-[12px]  font-normal leading-[20px] text-white sm:p-[15px] sm:text-[15px] md:w-[60%]"
                      >
                        Automatic Login
                      </Link>
                    ) : (
                      <Link
                        href="/auth/register"
                        className="inline-block w-full  cursor-pointer rounded-3xl bg-[#9064b2] p-[10px] text-[12px]  font-normal leading-[20px] text-white sm:p-[15px] sm:text-[15px] md:w-[60%]"
                      >
                        Register
                      </Link>
                    )
                  ) : (
                    <ConnectWallet className="inline-block w-full  cursor-pointer rounded-3xl bg-[#9064b2] p-[10px] text-[12px]  font-normal leading-[20px] text-white sm:p-[15px] sm:text-[15px] md:w-[60%]" />
                  )}
                </div>
              </div>
              <div className="hidden border-l lg:block"></div>
              <div className="mt-5 flex w-full flex-col justify-center rounded-md border p-5 lg:mt-0 lg:rounded-l-none lg:border-l-0">
                <h1 className="text-center font-medium text-[#9168bf] sm:text-[25px]">
                  To view your account specify ID
                </h1>
                <div className=" mt-7 gap-4">
                  <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="ID"
                    className={classNames(
                      'inline-block h-fit w-full rounded-3xl border-2 bg-transparent p-[10px] text-[12px] font-normal leading-[20px] text-white sm:p-[15px] sm:text-[18px] md:w-[60%]'
                    )}
                  ></input>
                  {!LastUserIdIsLoading &&
                  Number(id || 0) > Number(String(LastUserId || 0)) - 1 ? (
                    <p className="mt-1 text-red-500">
                      We only have {Number(String(LastUserId || 0)) - 1} Users
                    </p>
                  ) : null}
                  <button
                    disabled={
                      Number(id || 0) === 0 ||
                      Number(id || 0) > Number(String(LastUserId || 0)) - 1
                    }
                    onClick={handleClick}
                    className="mt-4 inline-block h-fit w-full rounded-3xl bg-[#9064b2] p-[10px] text-[12px] font-normal leading-[20px] text-white sm:p-[15px] sm:text-[15px] md:w-[60%]"
                  >
                    VIEWING
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
