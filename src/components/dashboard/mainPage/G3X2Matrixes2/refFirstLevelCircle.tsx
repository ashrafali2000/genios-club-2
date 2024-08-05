import PopOver2 from "@/components/popover2";
import PopOver3 from "@/components/popover3";
import PopOver4 from "@/components/popover4";
import { GeniosClubAbi2, GeniosClubAddress2 } from "@/lib/constant";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import React, { useEffect, useState } from "react";

const RefFirstLevelCircle = ({
  RefFirstLevel,
  userAddress,
  activeLevel,
  MatrixLevel,
  position,
}: {
  RefFirstLevel: any[];
  MatrixLevel: any;
  userAddress: any;
  activeLevel: any;
  position: any[];
}) => {
  let address1 = position[0].userAddress;
  let address2 = position[0].userAddress;
  let address3 = position[0].userAddress;
  let address4 = position[0].userAddress;
  const [results1, setResults1] = useState<any[]>([]);
  const [results2, setResults2] = useState<any[]>([]);
  const [results3, setResults3] = useState<any[]>([]);
  const [results4, setResults4] = useState<any[]>([]);
  let testUserAddress;
  const { contract } = useContract(GeniosClubAddress2);
  useEffect(() => {
    const fetchData = async () => {
      if (!contract) return;

      const fetchPositionData = async (index: any, val: any) => {
        let address = await contract.call("IdToAddress", [val]);
        const cycleNo = await contract.call("CurrentCycleNo", [
          address,
          Number(MatrixLevel),
        ]);

        try {
          let data = await contract.call("PositionToId", [
            address,
            cycleNo,
            +MatrixLevel,
            index,
          ]);
          let userAddress = await contract.call("IdToAddress", [
            parseInt(data),
          ]);
          testUserAddress = userAddress;

          return { index, data, userAddress };
        } catch (error) {
          return { index, error };
        }
      };

      const promises = [];
      for (let i = 1; i <= 4; i++) {
        promises.push(fetchPositionData(i, parseInt(position[0].data)));
      }

      const results = await Promise.all(promises);

      const tempResults: any = [];
      const tempErrors: any = [];

      results.forEach((result) => {
        if (result.data) {
          tempResults.push(result);
        } else if (result.error) {
          tempErrors.push(result);
        }
      });

      setResults1(tempResults);
    };

    fetchData();
  }, [MatrixLevel]);

  useEffect(() => {
    const fetchData = async () => {
      if (!contract) return;

      const fetchPositionData = async (index: any, val: any) => {
        const address = await contract.call("IdToAddress", [val]);
        const cycleNo = await contract.call("CurrentCycleNo", [
          address,
          Number(MatrixLevel),
        ]);

        try {
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
        promises.push(fetchPositionData(i, parseInt(position[1].data)));
      }

      const results = await Promise.all(promises);

      const tempResults: any = [];
      const tempErrors: any = [];

      results.forEach((result) => {
        if (result.data) {
          tempResults.push(result);
        } else if (result.error) {
          tempErrors.push(result);
        }
      });

      setResults2(tempResults);
    };

    fetchData();
  }, [MatrixLevel]);
  console.log("position---------->", position);
  console.log("position0---------->", parseInt(position[0]?.data));
  console.log("position1---------->", parseInt(position[1]?.data));
  console.log("position2---------->", parseInt(position[2]?.data));
  console.log("position3---------->", parseInt(position[3]?.data));
  useEffect(() => {
    const fetchData = async () => {
      if (!contract) return;

      const fetchPositionData = async (index: any, val: any) => {
        const address = await contract.call("IdToAddress", [val]);
        const cycleNo = await contract.call("CurrentCycleNo", [
          address,
          Number(MatrixLevel),
        ]);

        try {
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
        promises.push(fetchPositionData(i, parseInt(position[2]?.data)));
        // if (parseInt(position[2]?.data) > 0){
        //   promises.push(fetchPositionData(i, parseInt(position[2]?.data)));
        // }else{
        //   let data = 0;
        //   return {data, userAddress}
        // }
      }

      const results = await Promise.all(promises);

      const tempResults: any = [];
      const tempErrors: any = [];

      results.forEach((result) => {
        if (result.data) {
          tempResults.push(result);
        } else if (result.error) {
          tempErrors.push(result);
        }
      });

      setResults3(tempResults);
    };

    fetchData();
  }, [MatrixLevel]);

  useEffect(() => {
    const fetchData = async () => {
      if (!contract) return;

      const fetchPositionData = async (index: any, val: any) => {
        const address = await contract.call("IdToAddress", [val]);
        const cycleNo = await contract.call("CurrentCycleNo", [
          address,
          Number(MatrixLevel),
        ]);

        try {
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
        // if (parseInt(position[i].data) )
        promises.push(fetchPositionData(i, parseInt(position[3]?.data)));
      }

      const results = await Promise.all(promises);

      const tempResults: any = [];
      const tempErrors: any = [];

      results.forEach((result) => {
        if (result.data) {
          tempResults.push(result);
        } else if (result.error) {
          tempErrors.push(result);
        }
      });

      setResults4(tempResults);
    };

    fetchData();
  }, [MatrixLevel]);
  return (
    <>
      {activeLevel ||
      (MatrixLevel === "1" &&
        parseInt(position[0].data) > 0 &&
        parseInt(position[1].data) > 0 &&
        parseInt(position[2].data) > 0 &&
        parseInt(position[3].data) > 0) ? (
        // <>
        //   {MatrixLevel === "1" ? (
        <div>
          <div className="flex justify-between flex-wrap md:flex-nowrap">
            {RefFirstLevel && (
              <>
                {parseInt(position[0].data) > 0 ? (
                  <div className="flex flex-col items-center  ">
                    <PopOver2
                      RefFirstLevel={position[0].data}
                      userAddress={position[0].userAddress}
                    />
                    <div className="  flex justify-center gap-x-[2px] mt-[-4px]">
                      <div className=" h-[20px] w-2 rotate-[50deg] transform border-l border-dashed border-purple-500"></div>
                      <div className="  h-[15px] w-2 border-l border-dashed border-purple-500"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-40deg] transform border-l border-dashed border-purple-500"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-60deg] transform border-l border-dashed border-purple-500"></div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full  border "></a>
                    <div className="  flex justify-center gap-x-[2px]  ">
                      <div className="h-[20px] w-2 rotate-[50deg] transform   border-l border-dashed border-purple-500"></div>
                      <div className="  h-[15px] w-2   border-l border-dashed border-purple-500"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-40deg] transform border-l border-dashed border-purple-500"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-60deg] transform border-l border-dashed border-purple-500"></div>
                    </div>
                  </div>
                )}

                {parseInt(position[1].data) > 0 ? (
                  <div className="flex flex-col items-center  ">
                    <PopOver2
                      RefFirstLevel={position[1].data}
                      userAddress={position[1].userAddress}
                    />

                    <div className="  flex justify-center gap-x-[2px]  ">
                      <div className="h-[20px] w-2 rotate-[50deg] transform   border-l border-dashed border-purple-500"></div>
                      <div className="  h-[15px] w-2   border-l border-dashed border-purple-500"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-40deg] transform border-l border-dashed border-purple-500"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-60deg] transform border-l border-dashed border-purple-500"></div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center  ">
                    <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer  rounded-full border"></a>
                    <div className="  flex justify-center gap-x-[2px]  ">
                      <div className="h-[20px] w-2 rotate-[50deg] transform   border-l border-dashed border-purple-500"></div>
                      <div className="  h-[15px] w-2   border-l border-dashed border-purple-500"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-40deg] transform border-l border-dashed border-purple-500"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-60deg] transform border-l border-dashed border-purple-500"></div>
                    </div>
                  </div>
                )}

                {parseInt(position[2]?.data) > 0 ? (
                  <div className="flex flex-col items-center  ">
                    <PopOver2
                      RefFirstLevel={position[2].data}
                      userAddress={position[2].userAddress}
                    />

                    <div className="  flex justify-center gap-x-[2px]  ">
                      <div className="h-[20px] w-2 rotate-[50deg] transform   border-l border-dashed border-purple-500"></div>
                      <div className="  h-[15px] w-2   border-l border-dashed border-purple-500"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-40deg] transform border-l border-dashed border-purple-500"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-60deg] transform border-l border-dashed border-purple-500"></div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center  ">
                    <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer  rounded-full border"></a>
                    <div className="  flex justify-center gap-x-[2px]  ">
                      <div className="h-[20px] w-2 rotate-[50deg] transform   border-l border-dashed border-purple-500"></div>
                      <div className="  h-[15px] w-2   border-l border-dashed border-purple-500"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-40deg] transform border-l border-dashed border-purple-500"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-60deg] transform border-l border-dashed border-purple-500"></div>
                    </div>
                  </div>
                )}
                {parseInt(position[3]?.data) > 0 ? (
                  <div className="flex flex-col items-center  ">
                    <PopOver2
                      RefFirstLevel={position[3].data}
                      userAddress={position[3].userAddress}
                    />

                    <div className="  flex justify-center gap-x-[2px]  ">
                      <div className="h-[20px] w-2 rotate-[50deg] transform   border-l border-dashed border-purple-500"></div>
                      <div className="  h-[15px] w-2   border-l border-dashed border-purple-500"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-40deg] transform border-l border-dashed border-purple-500"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-60deg] transform border-l border-dashed border-purple-500"></div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center  ">
                    <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer  rounded-full border"></a>
                    <div className="  flex justify-center gap-x-[2px]  ">
                      <div className="h-[20px] w-2 rotate-[50deg] transform   border-l border-dashed border-purple-500"></div>
                      <div className="  h-[15px] w-2   border-l border-dashed border-purple-500"></div>
                      <div
                        className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-40deg] transform border-l 
                      border-dashed border-purple-500"
                      ></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-60deg] transform border-l border-dashed border-purple-500"></div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
          <div className="flex justify-between gap-10  xl:gap-20 -ml-[60px] xl:-ml-[50px]">
            <div className="ml-5">
              <RefFirstLevelCircle2
                activeLevel={activeLevel}
                address={[address1, address2, address3, address4]}
                position2={results1.slice(0, 4)}
              />
            </div>
            <div className="-ml-2 lg:-ml-5">
              <RefFirstLevelCircle2
                activeLevel={activeLevel}
                address={[address1, address2, address3, address4]}
                position2={results2.slice(0, 4)}
              />
            </div>
            <div className="-ml-3">
              <RefFirstLevelCircle2
                activeLevel={activeLevel}
                address={[address1, address2, address3, address4]}
                position2={results3.slice(0, 4)}
              />
            </div>
            <div className="-ml-4 lg:-ml-3">
              <RefFirstLevelCircle2
                activeLevel={activeLevel}
                address={[address1, address2, address3, address4]}
                position2={results4.slice(0, 4)}
              />
            </div>
          </div>
        </div>
      ) : (
        //   ) : (
        //     <div>
        //       <div className="flex justify-between flex-wrap md:flex-nowrap">
        //         {RefFirstLevel && (
        //           <>
        //             {results1[0] ? (
        //               <div className="flex flex-col items-center  ">
        //                 <PopOver2
        //                   RefFirstLevel={results1[0].data}
        //                   userAddress={results1[0].userAddress}
        //                 />
        //                 <div className="  flex justify-center gap-x-[2px] mt-[-4px]">
        //                   <div className=" h-[20px] w-2 rotate-[50deg] transform border-l border-dashed border-purple-500"></div>
        //                   <div className="  h-[15px] w-2 border-l border-dashed border-purple-500"></div>
        //                   <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-40deg] transform border-l border-dashed border-purple-500"></div>
        //                   <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-60deg] transform border-l border-dashed border-purple-500"></div>
        //                 </div>
        //               </div>
        //             ) : (
        //               <div className="flex flex-col items-center  ">
        //                 <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full  border "></a>
        //                 <div className="  flex justify-center gap-x-[2px]  ">
        //                   <div className="h-[20px] w-2 rotate-[50deg] transform   border-l border-dashed border-purple-500"></div>
        //                   <div className="  h-[15px] w-2   border-l border-dashed border-purple-500"></div>
        //                   <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-40deg] transform border-l border-dashed border-purple-500"></div>
        //                   <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-60deg] transform border-l border-dashed border-purple-500"></div>
        //                 </div>
        //               </div>
        //             )}

        //             {results1[1] ? (
        //               <div className="flex flex-col items-center  ">
        //                 <PopOver2
        //                   RefFirstLevel={results1[1].data}
        //                   userAddress={results1[1].userAddress}
        //                 />

        //                 <div className="  flex justify-center gap-x-[2px]  ">
        //                   <div className="h-[20px] w-2 rotate-[50deg] transform   border-l border-dashed border-purple-500"></div>
        //                   <div className="  h-[15px] w-2   border-l border-dashed border-purple-500"></div>
        //                   <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-40deg] transform border-l border-dashed border-purple-500"></div>
        //                   <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-60deg] transform border-l border-dashed border-purple-500"></div>
        //                 </div>
        //               </div>
        //             ) : (
        //               <div className="flex flex-col items-center  ">
        //                 <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer  rounded-full border"></a>
        //                 <div className="  flex justify-center gap-x-[2px]  ">
        //                   <div className="h-[20px] w-2 rotate-[50deg] transform   border-l border-dashed border-purple-500"></div>
        //                   <div className="  h-[15px] w-2   border-l border-dashed border-purple-500"></div>
        //                   <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-40deg] transform border-l border-dashed border-purple-500"></div>
        //                   <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-60deg] transform border-l border-dashed border-purple-500"></div>
        //                 </div>
        //               </div>
        //             )}

        //             {results1[2] ? (
        //               <div className="flex flex-col items-center  ">
        //                 <PopOver2
        //                   RefFirstLevel={results1[2].data}
        //                   userAddress={results1[2].userAddress}
        //                 />

        //                 <div className="  flex justify-center gap-x-[2px]  ">
        //                   <div className="h-[20px] w-2 rotate-[50deg] transform   border-l border-dashed border-purple-500"></div>
        //                   <div className="  h-[15px] w-2   border-l border-dashed border-purple-500"></div>
        //                   <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-40deg] transform border-l border-dashed border-purple-500"></div>
        //                   <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-60deg] transform border-l border-dashed border-purple-500"></div>
        //                 </div>
        //               </div>
        //             ) : (
        //               <div className="flex flex-col items-center  ">
        //                 <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer  rounded-full border"></a>
        //                 <div className="  flex justify-center gap-x-[2px]  ">
        //                   <div className="h-[20px] w-2 rotate-[50deg] transform   border-l border-dashed border-purple-500"></div>
        //                   <div className="  h-[15px] w-2   border-l border-dashed border-purple-500"></div>
        //                   <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-40deg] transform border-l border-dashed border-purple-500"></div>
        //                   <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-60deg] transform border-l border-dashed border-purple-500"></div>
        //                 </div>
        //               </div>
        //             )}
        //             {results1[3] ? (
        //               <div className="flex flex-col items-center  ">
        //                 <PopOver2
        //                   RefFirstLevel={results1[3].data}
        //                   userAddress={results1[3].userAddress}
        //                 />

        //                 <div className="  flex justify-center gap-x-[2px]  ">
        //                   <div className="h-[20px] w-2 rotate-[50deg] transform   border-l border-dashed border-purple-500"></div>
        //                   <div className="  h-[15px] w-2   border-l border-dashed border-purple-500"></div>
        //                   <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-40deg] transform border-l border-dashed border-purple-500"></div>
        //                   <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-60deg] transform border-l border-dashed border-purple-500"></div>
        //                 </div>
        //               </div>
        //             ) : (
        //               <div className="flex flex-col items-center  ">
        //                 <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer  rounded-full border"></a>
        //                 <div className="  flex justify-center gap-x-[2px]  ">
        //                   <div className="h-[20px] w-2 rotate-[50deg] transform   border-l border-dashed border-purple-500"></div>
        //                   <div className="  h-[15px] w-2   border-l border-dashed border-purple-500"></div>
        //                   <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-40deg] transform border-l border-dashed border-purple-500"></div>
        //                   <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-60deg] transform border-l border-dashed border-purple-500"></div>
        //                 </div>
        //               </div>
        //             )}
        //           </>
        //         )}
        //       </div>
        //       <div className="flex justify-between gap-10  xl:gap-20 -ml-[60px] xl:-ml-[50px]">
        //         <div className="ml-5">
        //           <RefFirstLevelCircle2
        //             activeLevel={activeLevel}
        //             address={results1.slice(0, 4)}
        //             position2={results1.slice(0, 4)}
        //           />
        //         </div>
        //         <div className=" -ml-2 lg:-ml-5">
        //           <RefFirstLevelCircle2
        //             activeLevel={activeLevel}
        //             address={results2.slice(0, 4)}
        //             position2={results2.slice(0, 4)}
        //           />
        //         </div>
        //         <div className=" -ml-3">
        //           <RefFirstLevelCircle2
        //             activeLevel={activeLevel}
        //             address={results3.slice(0, 4)}
        //             position2={results3.slice(0, 4)}
        //           />
        //         </div>
        //         <div className="-ml-4 lg:-ml-3">
        //           <RefFirstLevelCircle2
        //             activeLevel={activeLevel}
        //             address={results4.slice(0, 4)}
        //             position2={results4.slice(0, 4)}
        //           />
        //         </div>
        //       </div>
        //     </div>
        //   )}
        // </>
        <div className="bg-purple-700 text-center py-3 px-3">
          <p className="font-bold text-white uppercase">NO Active Level</p>
        </div>
      )}
    </>
  );
};

const RefFirstLevelCircle2 = ({
  position2,
  address,
  activeLevel,
}: {
  position2: any[];
  address: any;
  activeLevel: any;
}) => {
  console.log("position2-----myTest@------>", position2);
  return (
    <>
      <div className="ml-[6px] mt-[-6px] flex gap-x-4">
        <div className="flex flex-col gap-3">
          {parseInt(position2[0]?.data) > 0 ? (
            <div className="ml-[-6px] flex flex-col items-center">
              <PopOver4
                userAddress={address}
                RefFirstLevel={position2[0].data}
              />
            </div>
          ) : (
            <a className="ml-[-8px] h-[21px] w-[21px] cursor-pointer rounded-full border "></a>
          )}
        </div>
        <div className="flex flex-col gap-3">
          {parseInt(position2[1]?.data) > 0 ? (
            <div className="flex flex-col items-center">
              <PopOver4
                userAddress={address}
                RefFirstLevel={position2[1].data}
              />
            </div>
          ) : (
            <a className="ml-[-8px] h-[21px] w-[21px] cursor-pointer rounded-full border"></a>
          )}
        </div>

        <div className="flex flex-col gap-3">
          {parseInt(position2[2]?.data) > 0 ? (
            <div className="flex flex-col items-center">
              <PopOver4
                userAddress={address}
                RefFirstLevel={position2[2].data}
              />
            </div>
          ) : (
            <a className="ml-[-7px] h-[21px] w-[21px] cursor-pointer rounded-full border"></a>
          )}
        </div>
        <div className="flex flex-col gap-3">
          {parseInt(position2[3]?.data) > 0 ? (
            <div className="flex flex-col items-center">
              <PopOver4
                userAddress={address}
                RefFirstLevel={position2[3].data}
              />
            </div>
          ) : (
            <a className="ml-[-5px] h-[21px] w-[21px] cursor-pointer rounded-full border"></a>
          )}
        </div>
      </div>
    </>
  );
};

export default RefFirstLevelCircle;
