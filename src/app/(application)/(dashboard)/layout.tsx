"use client";
import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import { GeniosClubAddress, GeniosClubAbi } from "@/lib/constant";
import Participants from "@/components/dashboard/platformInfo";
import UserCard from "@/components/dashboard/userInfo";
import UserNotExist from "@/components/userNotExist";
import HomeHeader from "@/components/marketing/HomeHeader";
import Header from "@/components/dashboard/header";

interface RootLayoutProps {
  children: React.ReactNode;
}

const Page = ({ children }: RootLayoutProps) => {
  const address = useAddress();

  // Contract
  const { contract: GeniosClubContract } = useContract(
    GeniosClubAddress,
    GeniosClubAbi
  );

  // Functions
  const { data: user, isLoading: usersIsLoading } = useContractRead(
    GeniosClubContract,
    "Users",
    [address]
  );
  const { data: IsUserExists, isLoading } = useContractRead(
    GeniosClubContract,
    "IsUserExists",
    [address]
  );

  if (!isLoading && !IsUserExists)
    return (
      <>
        <HomeHeader />;
        <UserNotExist />;
      </>
    );
  return (
    <>
      <Header />
      <div className="overlay h-full px-5 py-10 md:px-10 lg:px-20">
        <Participants />
        <div className="mx-auto max-w-7xl lg:flex">
          <div className="lg:w-[25%]">
            <UserCard
              user={user}
              userAddress={address}
              usersIsLoading={usersIsLoading}
            />
          </div>

          <div className="relative z-10 w-full md:mt-10 lg:ml-10 lg:mt-0 lg:w-[75%]">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
