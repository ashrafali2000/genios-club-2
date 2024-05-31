"use client";

import { useSearchParams } from "next/navigation";
import {
  useContract,
  useContractEvents,
  useContractRead,
} from "@thirdweb-dev/react";
import {
  AddressZero,
  GeniosClubAbi2,
  GeniosClubAddress2,
} from "@/lib/constant";
import { useMemo, useState } from "react";
import NotFound from "@/components/notFound";
import UserCard from "@/components/dashboard/userInfo2";
import Participants from "@/components/dashboard/platformInfo2";
import Header from "@/components/dashboard/header";

interface RootLayoutProps {
  children: React.ReactNode;
}

const Page = ({ children }: RootLayoutProps) => {
  const searchParams: any = useSearchParams();
  const uid = searchParams?.get("uid");

  // Contract
  const { contract: GeniosClubContract } = useContract(
    GeniosClubAddress2,
    GeniosClubAbi2
  );
  const { data: address, isLoading } = useContractRead(
    GeniosClubContract,
    "IdToAddress",
    [uid]
  );

  // Functions
  const { data: user, isLoading: usersIsLoading } = useContractRead(
    GeniosClubContract,
    "Users",
    [address]
  );

  return (
    <>
      <Header view={true} uid={uid as string} />

      {/* {!uid || uid === "0" || (!isLoading && address === AddressZero) ? (
        <NotFound />
      ) : ( */}
      <div className="overlay px-5 py-10 text-white md:px-10 lg:px-20">
        <Participants />

        <div className="mx-auto max-w-7xl lg:flex">
          <div className="lg:w-[25%]">
            <UserCard
              user={user}
              view={true}
              userAddress={address}
              usersIsLoading={usersIsLoading}
            />
          </div>

          <div className="relative z-10 w-full md:mt-10 lg:ml-10 lg:mt-0">
            {children}
          </div>
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default Page;
