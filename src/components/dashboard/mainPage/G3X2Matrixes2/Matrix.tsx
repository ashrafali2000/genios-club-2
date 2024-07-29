"use client";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { GeniosClubAbi2, GeniosClubAddress2 } from "@/lib/constant";
import Modal from "../../../modal";
import { useEffect, useState } from "react";
import Link from "next/link";
import RefFirstLevelCircle from "./refFirstLevelCircle";
import RefSecondLevelCircle from "./refSecondLevelCircle";

const Matrix = ({
  MatrixLevel,
  address,
  view,
  title,
}: {
  MatrixLevel: any;
  title: any;
  address: any;
  view?: boolean;
}) => {
  const [openModal, setOpenModal] = useState(false);
  const { contract: GeniosClubContract } = useContract(
    GeniosClubAddress2,
    GeniosClubAbi2
  );
  // const { data: cycleNo } = useContractRead(
  //   GeniosClubContract,
  //   "CurrentCycleNo",
  //   [address, Number(MatrixLevel)]
  // );
  console.log("address-----check----->", address);
  const { data: activeLevel } = useContractRead(
    GeniosClubContract,
    "LevelOpen",
    [address, Number(MatrixLevel)]
  );
  console.log("activeLevel-----check----->", activeLevel);
  // new today code
  const [results, setResults] = useState<any[]>([]);
  const { contract } = useContract(GeniosClubAddress2);
  useEffect(() => {
    const fetchData = async () => {
      if (!contract) return;

      const fetchPositionData = async (index: any) => {
        try {
          const cycleNo = await contract.call("CurrentCycleNo", [
            address,
            Number(MatrixLevel),
          ]);
          console.log("cycleNo--------->", parseInt(cycleNo));
          const data = await contract.call("postionToId", [
            address,
            cycleNo,
            +MatrixLevel,
            index,
          ]);
          const userAddress = await contract.call("IdToAddress", [
            parseInt(data),
          ]);
          return { index, data, userAddress };
        } catch (error) {
          return { index, error };
        }
      };

      const promises = [];
      for (let i = 1; i <= 4; i++) {
        promises.push(fetchPositionData(i));
      }

      const results = await Promise.all(promises);
      console.log("results----------->", results);
      const tempResults: any = [];
      const tempErrors: any = [];

      results.forEach((result) => {
        if (result.data) {
          tempResults.push(result);
        } else if (result.error) {
          tempErrors.push(result);
        }
      });

      setResults(tempResults);
    };

    fetchData();
  }, [address]);

  const { data: user, isLoading: usersIsLoading } = useContractRead(
    GeniosClubContract,
    "Users",
    [address]
  );

  const initLink = view ? `/view2/g3x2-matrix` : `/g3x2-matrix`;
  const lastLink = view ? `?uid=${parseInt(user?.[0])}` : ``;

  return (
    <>
      <Modal open={openModal} setOpen={setOpenModal}>
        <div className="flex w-full flex-col items-center justify-center rounded-md bg-[#2c0219] p-10 font-san">
          <h1 className="text-center font-medium text-[#9168bf] sm:text-[35px]">
            Activate New Level
          </h1>
        </div>
      </Modal>
      <div className="mx-auto min-h-[195px] w-full rounded-2xl border border-solid border-[#ae7ddd] ">
        <Link
          href={`${initLink}/${MatrixLevel}/${lastLink}`}
          className="block w-full rounded-t-2xl bg-[#ae7ddd] p-3 font-semibold text-[#2c0219] shadow-md"
        >
          {title}
        </Link>

        <div className="px-5 md:px-[50px] lg:px-5 xl:px-[50px] w-10/12 mx-auto">
          <div className="flex justify-center gap-x-[90px] ">
            <div className="h-[18px] w-2 rotate-[60deg] transform   border-l border-dashed border-purple-500"></div>
            <div className="  h-[15px] w-2   border-l border-dashed  border-purple-500"></div>
            <div className=" h-[18px] w-2 rotate-[-40deg] transform   border-l border-dashed border-purple-500"></div>
            <div className=" h-[18px] w-2 rotate-[-50deg] transform   border-l border-dashed border-purple-500"></div>
          </div>

          {results.length === 0 ? (
            <span className="mr-2 inline-flex items-center px-5 py-2.5 text-center text-sm font-medium text-white">
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
            </span>
          ) : (
            results
              .slice(0, 1)
              .map((i, index) =>
                MatrixLevel === "1" ? (
                  <RefFirstLevelCircle
                    key={index}
                    RefFirstLevel={i}
                    position={results}
                    userAddress={i}
                    MatrixLevel={MatrixLevel}
                    activeLevel={activeLevel}
                  />
                ) : (
                  <RefSecondLevelCircle
                    key={index}
                    RefFirstLevel={i}
                    position={results[0]}
                    userAddress={i}
                    MatrixLevel={MatrixLevel}
                    activeLevel={activeLevel}
                  />
                )
              )
          )}
        </div>
      </div>
    </>
  );
};

export default Matrix;
