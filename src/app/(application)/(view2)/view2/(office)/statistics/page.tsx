"use client";
import Statistics from "@/components/dashboard/office/Statistics";
import { GeniosClubAbi, GeniosClubAddress } from "@/lib/constant";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams: any = useSearchParams();
  const uid = searchParams.get("uid");

  // Contract
  const { contract: GeniosClubContract } = useContract(
    GeniosClubAddress,
    GeniosClubAbi
  );
  const { data: address } = useContractRead(GeniosClubContract, "IdToAddress", [
    uid,
  ]);
  return <Statistics address={address} />;
};

export default Page;
