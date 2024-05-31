"use client";

import AffiliatesTable from "@/components/dashboard/office/affliates";
import { GeniosClubAbi, GeniosClubAddress } from "@/lib/constant";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { useSearchParams } from "next/navigation";
import React from "react";

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

  return <AffiliatesTable address={address} />;
};

export default Page;
