"use client";
import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import { GeniosClubAddress2, GeniosClubAbi2 } from "@/lib/constant";
import { useSearchParams } from "next/navigation";
import G3X2Matrixes2 from "@/components/dashboard/mainPage/G3X2Matrixes2";

const Page = () => {
  const searchParams = useSearchParams();
  const uid = searchParams?.get("uid");
  const addressWallet = useAddress();
  const { contract } = useContract(GeniosClubAddress2, GeniosClubAbi2);
  const { data: address, isLoading } = useContractRead(
    contract,
    "IdToAddress",
    [uid]
  );
  // console.log("addressWallet------test------->", addressWallet);
  // console.log("address------test------->", address);
  return (
    <>
      <G3X2Matrixes2
        address={addressWallet ? addressWallet : address ? address : null}
        view={true}
      />
    </>
  );
};

export default Page;
