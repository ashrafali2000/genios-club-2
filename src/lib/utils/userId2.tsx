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
  return <>{Number(user?.[0]) > 1 ? Number(user?.[0]) : null}</>;
}
