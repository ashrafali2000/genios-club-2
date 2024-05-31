"use client";

import { useSearchParams } from "next/navigation";
import { GeniosClubAddress, GeniosClubAbi } from "@/lib/constant";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import NotFound from "@/components/notFound";
import Card from "@/components/dashboard/mainPage/matrix/Card";
import Table from "@/components/dashboard/mainPage/matrix/Table";

const Page = () => {
  const searchParams = useSearchParams();
  const uid = searchParams?.get("uid");
  const matrix_id = searchParams?.get("matrix_id");

  // Contract
  const { contract } = useContract(GeniosClubAddress, GeniosClubAbi);
  const { data: address, isLoading } = useContractRead(
    contract,
    "IdToAddress",
    [uid]
  );

  if (!uid && !matrix_id && !isLoading) return <NotFound />;

  return (
    <>
      <Card contract={contract} address={address} />
      <Table contract={contract} address={address} />
    </>
  );
};

export default Page;
