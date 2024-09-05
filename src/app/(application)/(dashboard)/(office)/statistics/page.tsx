"use client";

import Statistics from "@/components/dashboard/office/statistic";
import { useAddress } from "@thirdweb-dev/react";

const Page = () => {
  const address = useAddress();
  return <Statistics address={address} />;
};

export default Page;
