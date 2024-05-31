"use client";

import DirectReferrals from "@/components/dashboard/office/directReferrals";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { GeniosClubAddress, GeniosClubAbi } from "@/lib/constant";
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

  return <DirectReferrals address={address} />;
};

export default Page;
