"use client";
import TotalTeam from "@/components/dashboard/office/totalTeam";
import { useAddress } from "@thirdweb-dev/react";

export default function Page() {
  const address = useAddress();
  return <TotalTeam address={address} />;
}
