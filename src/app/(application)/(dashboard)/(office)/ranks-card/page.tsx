"use client";

import RanksCard from "@/components/dashboard/office/ranksCard";
import { useAddress } from "@thirdweb-dev/react";
import React from "react";

const Page = () => {
  const address = useAddress();

  return <RanksCard address={address} />;
};

export default Page;
