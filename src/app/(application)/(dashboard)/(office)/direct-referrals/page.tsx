"use client";

import DirectReferrals from "@/components/dashboard/office/direct-referrals";
import { useAddress } from "@thirdweb-dev/react";

const Page = () => {
  const address = useAddress();

  return <DirectReferrals address={address} />;
};

export default Page;
