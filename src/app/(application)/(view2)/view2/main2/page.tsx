"use client";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { GeniosClubAddress2, GeniosClubAbi2 } from "@/lib/constant";
import { useSearchParams } from "next/navigation";
import G3X2Matrixes2 from "@/components/dashboard/mainPage/G3X2Matrixes2";

const Page = () => {
  const searchParams = useSearchParams();
  const uid = searchParams?.get("uid");

  const { contract } = useContract(GeniosClubAddress2, GeniosClubAbi2);
  const { data: address, isLoading } = useContractRead(
    contract,
    "IdToAddress",
    [uid]
  );
  return (
    <>
      <G3X2Matrixes2 address={address} view={true} />
    </>
  );
};

export default Page;
