"use client";

import AffiliatesTable from "@/components/dashboard/office/affliates";
import { useAddress } from "@thirdweb-dev/react";
import React from "react";

const Page = () => {
  const address = useAddress();

  return <AffiliatesTable address={address} />;
};

export default Page;
