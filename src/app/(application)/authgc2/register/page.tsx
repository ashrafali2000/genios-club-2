"use client";
import {
  ActiveChain,
  GeniosClubAbi2,
  GeniosClubAddress2,
  MTKAbi2,
  MTKAddress2,
} from "@/lib/constant";
import { useRouter } from "next/navigation";
import {
  ThirdwebSDK,
  getContract,
  useAddress,
  useContract,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";
// import { defineChain } from "thirdweb/chains";
import axios from "axios";
import { formatEther, parseEther } from "ethers/lib/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const router = useRouter();
  const address = useAddress();
  const searchParams = useSearchParams();
  const ref = searchParams.get("ref");
  const [refId, setRefId] = useState(ref ? ref : "");

  // Contracts
  const { contract: GeniosClubContract } = useContract(
    GeniosClubAddress2,
    GeniosClubAbi2
  );
  const { contract: MTKContract } = useContract(MTKAddress2, MTKAbi2);

  // Read Functions (Token)
  const { data: balance, isLoading: balanceIsLoading } = useContractRead(
    MTKContract,
    "balanceOf",
    [address]
  );
  // const client: any = "d75935c2db33dd391882dd2fb2474ceb";
  // const dai: any = getContract({
  //   client,
  //   chain: defineChain(4002),
  //   address: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
  // });

  const { data: allowance, isLoading: allowanceIsLoading } = useContractRead(
    MTKContract,
    "allowance",
    [address, GeniosClubAddress2]
  );
  const { data: user, isLoading: usersIsLoading } = useContractRead(
    GeniosClubContract,
    "Users",
    [address]
  );
  // Read Functions
  const { data: IsUserExists, isLoading: isUserExistsILoading } =
    useContractRead(GeniosClubContract, "exists", [address]);

  //    Write functions
  const { mutateAsync: approve, isLoading: approveIsLoading } =
    useContractWrite(MTKContract, "approve");

  const { mutateAsync: Register, isLoading: registerIsLoading } =
    useContractWrite(GeniosClubContract, "Register");

  // Approve Function
  const callApprove = async () => {
    try {
      const data = await approve({
        args: [GeniosClubAddress2, parseEther("2.5")],
      });
      console.info("contract call success", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };
  let userId;
  // Register Function
  const callRegister = async () => {
    try {
      const sdk = new ThirdwebSDK(ActiveChain);
      const contract = await sdk.getContract(
        GeniosClubAddress2,
        GeniosClubAbi2
      );
      const refAddr = await contract.call("IdToAddress", [refId]);
      // const response1 = await axios.get(`/api/matrix/add/${refAddr}`);

      const data = await Register({
        args: [address, refAddr],
      });
      console.log("file: page.tsx:214  callRegister  data:", data);

      if (data) {
        userId = parseInt(user?.[0]);
        console.log("id------test------->", userId);
        // router.push(`/view2/main2?uid=${id}`);
        console.log("data-----router---->", data);
      }
      // const response = await axios.post("/api/matrix/add/", {
      //   userAddress: address,
      //   referrerAddress: refAddr,
      //   level: 0,
      // });
      // console.log("file: page.tsx:221  callRegister  response:", response);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  return (
    <main className="h-screen">
      <div className="overlay flex h-fit px-5 py-10 md:h-screen md:px-10 lg:px-20">
        <div className="mx-auto flex max-w-4xl  items-center">
          <div className="relative  z-10 w-fit md:mt-10 lg:mt-0">
            <div className="  h-fit rounded-[9px] bg-[#2c0219]  p-10  text-center font-san  ">
              <div className="flex w-full  flex-col items-center justify-center rounded-md border p-5">
                <h1 className="text-center font-medium text-[#9168bf] sm:text-[25px]">
                  USER REGISTRATION WITH WALLET ADDRESS
                </h1>

                {address !== undefined ? (
                  isUserExistsILoading ? (
                    <div className="mx-auto my-16 w-full gap-4 text-white xsm:w-[70%]">
                      <svg
                        aria-hidden="true"
                        role="status"
                        className="mr-3 inline h-4 w-4 animate-spin text-white"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="#E5E7EB"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentColor"
                        />
                      </svg>
                      LOADING...
                    </div>
                  ) : !IsUserExists ? (
                    <div className=" mt-7 w-full gap-4">
                      <div className=" mx-auto text-[15px] text-white xsm:w-[70%] sm:text-[20px]">
                        <div className="justify-between xsmm:flex">
                          <p>Your Balance :</p>
                          <p>{formatEther(String(balance || 0))}</p>
                        </div>
                        <div className="justify-between  xsmm:flex">
                          <p>Registration Fees :</p>
                          <p>2.5 DAI</p>
                        </div>
                        <div className="justify-between xsmm:flex">
                          <p>Your Allowance :</p>
                          <p>{formatEther(String(allowance || 0))}</p>
                        </div>
                      </div>
                      {Number(String(balance || 0)) <= 2.5 ? (
                        <div className="my-16 flex justify-center gap-4 text-white">
                          Not Enough Balance
                        </div>
                      ) : (
                        <div>
                          {/* Approval Conditions */}
                          {Number(String(balance || 0)) >= 2.5 &&
                          Number(String(allowance || 0)) <= 2.5 ? (
                            approveIsLoading ? (
                              <button
                                className="mt-4 inline-block h-fit  w-full cursor-pointer rounded-3xl bg-[#9064b2] p-[10px] text-[12px]  font-normal leading-[20px] text-white sm:p-[15px] sm:text-[15px] md:w-[60%]"
                                disabled
                              >
                                <svg
                                  aria-hidden="true"
                                  role="status"
                                  className="mr-3 inline h-4 w-4 animate-spin text-white"
                                  viewBox="0 0 100 101"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="#E5E7EB"
                                  />
                                  <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentColor"
                                  />
                                </svg>
                                LOADING...
                              </button>
                            ) : (
                              <button
                                onClick={() => callApprove()}
                                className="mt-4 inline-block h-fit  w-full cursor-pointer rounded-3xl bg-[#9064b2] p-[10px] text-[12px]  font-normal leading-[20px] text-white sm:p-[15px] sm:text-[15px] md:w-[60%]"
                              >
                                APPROVE
                              </button>
                            )
                          ) : null}

                          {/* Registration Conditions */}
                          {Number(String(allowance || 0)) >= 2.5 ? (
                            registerIsLoading ? (
                              <button
                                className="mt-4 inline-block h-fit  w-full cursor-pointer rounded-3xl bg-[#9064b2] p-[10px] text-[12px]  font-normal leading-[20px] text-white sm:p-[15px] sm:text-[15px] md:w-[60%]"
                                disabled
                              >
                                <svg
                                  aria-hidden="true"
                                  role="status"
                                  className="mr-3 inline h-4 w-4 animate-spin text-white"
                                  viewBox="0 0 100 101"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="#E5E7EB"
                                  />
                                  <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentColor"
                                  />
                                </svg>
                                LOADING...
                              </button>
                            ) : (
                              <div>
                                <input
                                  name="membership"
                                  placeholder="Refferrer ID"
                                  value={refId}
                                  onChange={(e) => setRefId(e.target.value)}
                                  className="mx-auto mt-4 inline-block h-fit w-full rounded-3xl border-2 border-[#9064b2] bg-transparent p-[10px] text-[12px] font-normal leading-[20px] text-white placeholder:text-center xsmm:w-[65%] sm:p-[15px] sm:text-[18px] "
                                  required
                                />

                                <button
                                  onClick={() => callRegister()}
                                  className="mt-4 inline-block h-fit  w-full cursor-pointer rounded-3xl bg-[#9064b2] p-[10px] text-[12px]  font-normal leading-[20px] text-white sm:p-[15px] sm:text-[15px] md:w-[40%]"
                                >
                                  REGISTER
                                </button>
                              </div>
                            )
                          ) : null}
                        </div>
                      )}
                    </div>
                  ) : (
                    //  User already Registered
                    <div className="my-16 flex justify-center  gap-4">
                      <p className="text-white">YOU ARE ALREADY REGISTERED</p>
                      {userId !== undefined && (
                        <Link
                          href={`/view2/main2?uid=${userId}`}
                          className="!text-blue-500 hover:underline"
                        >
                          Go to Dashboard
                        </Link>
                      )}
                    </div>
                  )
                ) : (
                  <div className="my-16 flex justify-center gap-4">
                    <p className="text-white">PLEASE CONNECT YOUR WALLET</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
