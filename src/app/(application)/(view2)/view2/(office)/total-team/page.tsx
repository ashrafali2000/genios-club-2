"use client";
import TotalTeam from "@/components/dashboard/office/totalTeam";
import { GeniosClubAbi, GeniosClubAddress } from "@/lib/constant";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { useSearchParams } from "next/navigation";

export default function Page() {
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
  return <TotalTeam address={address} />;
}
