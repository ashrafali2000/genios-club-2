"use client";

import { useContract, useContractRead } from "@thirdweb-dev/react";
import { GeniosClubAbi, GeniosClubAddress } from "@/lib/constant";
import RanksCard from "@/components/dashboard/office/ranksCard";
import { useSearchParams } from "next/navigation";
import React from "react";

const Page = () => {
  const searchParams = useSearchParams();
  const uid = searchParams?.get("uid");

  const { contract } = useContract(GeniosClubAddress, GeniosClubAbi);
  const { data: address } = useContractRead(contract, "IdToAddress", [uid]);

  return <RanksCard address={address} view={true} />;
};

export default Page;
