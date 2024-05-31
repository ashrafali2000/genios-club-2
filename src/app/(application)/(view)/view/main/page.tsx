"use client";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { GeniosClubAddress, GeniosClubAbi } from "@/lib/constant";
import { useSearchParams } from "next/navigation";
import G3X2Matrixes from "@/components/dashboard/mainPage/G3X2Matrixes";
import G3X7Matrixes from "@/components/dashboard/mainPage/G3X7Matrixes";

const Page = () => {
  const searchParams = useSearchParams();
  const uid = searchParams?.get("uid");

  const { contract } = useContract(GeniosClubAddress, GeniosClubAbi);
  const { data: address, isLoading } = useContractRead(
    contract,
    "IdToAddress",
    [uid]
  );

  return (
    <>
      <G3X2Matrixes address={address} view={true} />
      <G3X7Matrixes address={address} view={true} />
    </>
  );
};

export default Page;
