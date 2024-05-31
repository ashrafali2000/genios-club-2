"use client";

import { classNames } from "@/lib/classNames";
import {
  AddressZero,
  GeniosClubAbi2,
  GeniosClubAddress2,
} from "@/lib/constant";
import { ConnectWallet } from "@thirdweb-dev/react";
import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const router = useRouter();
  const address = useAddress();
  const { contract } = useContract(GeniosClubAddress2, GeniosClubAbi2);

  const { data: IsUserExists } = useContractRead(contract, "IsUserExists", [
    ethers.utils.isAddress(address as string) ? address : AddressZero,
  ]);

  const [id, setId] = useState<string>("");
  const { data: LastIdUser, isLoading: LastIdUserIsLoading } = useContractRead(
    contract,
    "LastIdUser"
  );

  function handleClick() {
    router.push(`/view/${id}`);
  }

  return (
    <main className="h-screen ">
      <div className="overlay flex h-fit px-5 py-10 md:h-screen md:px-10 lg:px-20">
        <div className="mx-auto flex max-w-6xl  items-center">
          <div className="relative  z-10 w-fit md:mt-10 lg:mt-0">
            <div className="  h-fit justify-between rounded-[9px] bg-[#2c0219] p-10 text-center font-san  lg:flex lg:space-x-10  ">
              <div className="mt-5 flex w-full flex-col justify-center rounded-md border p-5 lg:mt-0">
                <h1 className="text-center font-medium text-[#9168bf] sm:text-[25px]">
                  To view your account specify ID
                </h1>
                <div className=" mt-7 gap-4">
                  <input
                    type="number"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="ID"
                    className={classNames(
                      "inline-block h-fit w-full rounded-3xl border-2 bg-transparent p-[10px] text-[12px] font-normal leading-[20px] text-white sm:p-[15px] sm:text-[18px] md:w-[60%]"
                    )}
                  ></input>
                  {!LastIdUserIsLoading &&
                  Number(id || 0) > Number(String(LastIdUser || 0)) - 1 ? (
                    <p className="mt-1 text-red-500">
                      We only have {Number(String(LastIdUser || 0)) - 1} Users
                    </p>
                  ) : null}
                  <button
                    disabled={
                      Number(id || 0) === 0 ||
                      Number(id || 0) > Number(String(LastIdUser || 0)) - 1
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
    </main>
  );
};

export default Page;
