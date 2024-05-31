import { useContract, useContractRead } from "@thirdweb-dev/react";
import { GeniosClubAbi2, GeniosClubAddress2 } from "../constant";

export default function UserId2({ userAddress }: any) {
  const { contract: GeniosClubContract } = useContract(
    GeniosClubAddress2,
    GeniosClubAbi2
  );
  const { data: user, isLoading: usersIsLoading } = useContractRead(
    GeniosClubContract,
    "Users",
    [userAddress]
  );

  return <>{String(user?.[0] || 0)}</>;
}
