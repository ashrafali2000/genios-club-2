"use client";

import G3X7Matrixes from "@/components/dashboard/mainPage/G3X7Matrixes";
import G3X2Matrixes from "@/components/dashboard/mainPage/G3X2Matrixes";
import { useAddress } from "@thirdweb-dev/react";

const Page = () => {
  const address = useAddress();

  return (
    <>
      <G3X2Matrixes address={address} />
      <G3X7Matrixes address={address} />
    </>
  );
};

export default Page;
