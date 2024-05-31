"use client";
import { GeniosClubAddress2, GeniosClubAbi2 } from "@/lib/constant";
import { useContract, useContractWrite } from "@thirdweb-dev/react";

const WithdrawButton = () => {
  const { contract: GeniosClubContract } = useContract(
    GeniosClubAddress2,
    GeniosClubAbi2
  );
  const { mutateAsync: withdraw, isLoading } = useContractWrite(
    GeniosClubContract,
    "withdraw"
  );

  const callWithdraw = async () => {
    try {
      const data = await withdraw({ args: [] });
      console.info("contract call success", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  return (
    <button
      onClick={callWithdraw}
      className="mt-4 inline-block h-fit w-full cursor-pointer rounded-3xl bg-[#9064b2] p-[10px] text-[12px] font-normal leading-[20px] text-white"
    >
      Withdraw
    </button>
  );
};

export default WithdrawButton;
