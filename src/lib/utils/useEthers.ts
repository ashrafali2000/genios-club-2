import { BigNumber } from "ethers";
import { formatEther } from "ethers/lib/utils";

export function UseFormatEther(bigNumber: BigNumber) {
  return formatEther(String(bigNumber || 0));
}

export function UseFormatEtherNumber(bigNumber: BigNumber) {
  return Number(formatEther(String(bigNumber || 0)));
}

export function UseFormatNumber(bigNumber: BigNumber) {
  return Number(String(bigNumber || 0));
}
