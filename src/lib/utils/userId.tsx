import { useContract, useContractRead } from "@thirdweb-dev/react";
import { GeniosClubAbi, GeniosClubAddress } from "../constant";

export default function UserId({ userAddress }: any) {
  const { contract: GeniosClubContract } = useContract(
    GeniosClubAddress,
    GeniosClubAbi
  );
  const { data: user, isLoading: usersIsLoading } = useContractRead(
    GeniosClubContract,
    "Users",
    [userAddress]
  );

  return <>{String(user?.Id || 0)}</>;
}
