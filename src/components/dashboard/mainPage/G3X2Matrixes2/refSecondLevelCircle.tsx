// import PopOver2 from "@/components/popover2";
// import React from "react";

// const RefSecondLevelCircle = ({ RefSecondLevel }: any) => {
//   return (
//     <>
//       {RefSecondLevel && (
//         <>
//           <div className="mt-[-6px] flex gap-x-2">
//             {RefSecondLevel[0] ? (
//               <PopOver2 userAddress={RefSecondLevel[0]} />
//             ) : (
//               <a className="ml-[-5px] h-[21px] w-[21px] cursor-pointer rounded-full border"></a>
//             )}
//             {RefSecondLevel[3] ? (
//               <PopOver2 userAddress={RefSecondLevel[3]} />
//             ) : (
//               <a className="ml-[-5px] h-[21px] w-[21px] cursor-pointer rounded-full border"></a>
//             )}
//             {RefSecondLevel[6] ? (
//               <PopOver2 userAddress={RefSecondLevel[6]} />
//             ) : (
//               <a className="ml-[-5px] h-[21px] w-[21px] cursor-pointer rounded-full border"></a>
//             )}
//           </div>

//           <div className="mt-[-6px] flex gap-x-2">
//             {RefSecondLevel[1] ? (
//               <PopOver2 userAddress={RefSecondLevel[1]} />
//             ) : (
//               <a className="ml-[-5px] h-[21px] w-[21px] cursor-pointer rounded-full border"></a>
//             )}
//             {RefSecondLevel[4] ? (
//               <PopOver2 userAddress={RefSecondLevel[4]} />
//             ) : (
//               <a className="ml-[-5px] h-[21px] w-[21px] cursor-pointer rounded-full border"></a>
//             )}
//             {RefSecondLevel[7] ? (
//               <PopOver2 userAddress={RefSecondLevel[7]} />
//             ) : (
//               <a className="ml-[-5px] h-[21px] w-[21px] cursor-pointer rounded-full border"></a>
//             )}
//           </div>

//           <div className="mt-[-6px] flex gap-x-2">
//             {RefSecondLevel[2] ? (
//               <PopOver2 userAddress={RefSecondLevel[2]} />
//             ) : (
//               <a className="ml-[-5px] h-[21px] w-[21px] cursor-pointer rounded-full border"></a>
//             )}
//             {RefSecondLevel[5] ? (
//               <PopOver2 userAddress={RefSecondLevel[5]} />
//             ) : (
//               <a className="ml-[-5px] h-[21px] w-[21px] cursor-pointer rounded-full border"></a>
//             )}
//             {RefSecondLevel[8] ? (
//               <PopOver2 userAddress={RefSecondLevel[8]} />
//             ) : (
//               <a className="ml-[-5px] h-[21px] w-[21px] cursor-pointer rounded-full border"></a>
//             )}
//           </div>
//         </>
//       )}
//     </>
//   );
// };

// export default RefSecondLevelCircle;
import PopOver2 from "@/components/popover2";
import PopOver3 from "@/components/popover3";
import PopOver4 from "@/components/popover4";
import { GeniosClubAbi2, GeniosClubAddress2 } from "@/lib/constant";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import React, { useEffect, useState } from "react";

const RefSecondLevelCircle = ({
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
  position: any;
}) => {
  const [mainResult, setMainResult] = useState<any[]>([]);
  const [results1, setResults1] = useState<any[]>([]);
  const [results2, setResults2] = useState<any[]>([]);
  const [results3, setResults3] = useState<any[]>([]);
  const [results4, setResults4] = useState<any[]>([]);
  // console.log("position----2------>", position);
  // console.log("position0----2------>", parseInt(position[0]?.data));
  // console.log("position1----2------>", parseInt(position[1]?.data));
  // console.log("position2----2------>", parseInt(position[2]?.data));
  // console.log("position3-----2----->", parseInt(position[3]?.data));
  const { contract } = useContract(GeniosClubAddress2);
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
          let data = null;
          let newId = await contract.call("AddressToId", [
            address
          ]);
          if(newId != 0){
            data = await contract.call("postionToId", [
              address,
              +MatrixLevel,
              cycleNo,
              index,
            ]);
          }  
          const userAddress = await contract.call("IdToAddress", [
            parseInt(data),
          ]);

          // let dataTest = data === 0 ? 0 : data;
          return { index, data, userAddress };
        } catch (error) {
          return { index, error };
        }
      };

      const promises = [];
      for (let i = 1; i <= 4; i++) {
        promises.push(fetchPositionData(i, parseInt(position?.data)));
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

      setMainResult(tempResults);
    };

    fetchData();
  }, [MatrixLevel]);
  console.log("mainResult----2------>", mainResult);
  console.log("mainResult1---2------->", parseInt(mainResult[0]?.data));
  console.log("mainResult2---2------->", parseInt(mainResult[1]?.data));
  console.log("mainResult3---2------->", parseInt(mainResult[2]?.data));
  console.log("mainResult4---2------->", parseInt(mainResult[3]?.data));
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
          let data = null;
          let newId = await contract.call("AddressToId", [
            address
          ]);
          if(newId != 0){
            data = await contract.call("postionToId", [
              address,
              +MatrixLevel,
              cycleNo,
              index,
            ]);
          }  
          // let data = await contract.call("postionToId", [
          //   address,
          //   +MatrixLevel,
          //   cycleNo,
          //   index,
          // ]);
          const userAddress = await contract.call("IdToAddress", [
            parseInt(data),
          ]);
           if(data != 0 ){
              return { index, data, userAddress };
          }
          return { index, userAddress };
          // return { index, data, userAddress };
        } catch (error) {
          return { index, error };
        }
      };
      const promises = [];
      for (let i = 1; i <= 4; i++) {
        promises.push(fetchPositionData(i, 2));
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
  // console.log("results1---------->", results1);
  // console.log("mainResult1---------->", parseInt(results1[0]?.data));
  // console.log("mainResult2---------->", parseInt(results1[1]?.data));
  // console.log("mainResult3---------->", parseInt(results1[2]?.data));
  // console.log("mainResult4---------->", parseInt(results1[3]?.data));
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
          let data = null;
          let newId = await contract.call("AddressToId", [
            address
          ]);
          if(newId != 0){
            data = await contract.call("postionToId", [
              address,
              +MatrixLevel,
              cycleNo,
              index,
            ]);
          }  
          // let data = await contract.call("postionToId", [
          //   address,
          //   +MatrixLevel,
          //   cycleNo,
          //   index,
          // ]);
          const userAddress = await contract.call("IdToAddress", [
            parseInt(data),
          ]);
           if(data != 0 ){
              return { index, data, userAddress };
          }
          return { index, userAddress };
        } catch (error) {
          return { index, error };
        }
      };

      const promises = [];
      for (let i = 1; i <= 4; i++) {
        promises.push(
          fetchPositionData(
            i,
            parseInt(mainResult[1]?.data) ? parseInt(mainResult[1]?.data) : 0
          )
        );
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
  }, [mainResult]);

  useEffect(() => {
    const fetchData = async () => {
      if (!contract) return;

      const fetchPositionData = async (index: any, val: any) => {
        const address = await contract.call("IdToAddress", [val]);
        const cycleNo = await contract.call("CurrentCycleNo", [
          address,
          Number(MatrixLevel),
        ]);
        // console.log("cycleNo----------> ", cycleNo);
        try {
          let data = null;
          let newId = await contract.call("AddressToId", [
            address
          ]);
          if(newId != 0){
            data = await contract.call("postionToId", [
              address,
              +MatrixLevel,
              cycleNo,
              index,
            ]);
          }  
          // const data = await contract.call("postionToId", [
          //   address,
          //   +MatrixLevel,
          //   cycleNo,
          //   index,
          // ]);
          const userAddress = await contract.call("IdToAddress", [
            parseInt(data),
          ]);
           if(data != 0 ){
              return { index, data, userAddress };
          }
          return { index,  userAddress };
        } catch (error) {
          return { index, error };
        }
      };

      const promises = [];
      for (let i = 1; i <= 4; i++) {
        promises.push(
          fetchPositionData(
            i,
            parseInt(mainResult[2]?.data) ? parseInt(mainResult[2]?.data) : 0
          )
        );
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
  }, [mainResult]);

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
            +MatrixLevel,
            cycleNo,
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
        promises.push(
          fetchPositionData(
            i,
            parseInt(mainResult[3]?.data) ? parseInt(mainResult[3]?.data) : 0
          )
        );
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
  }, [mainResult]);

  return (
    <>
      {activeLevel ? (
        <div>
          <div className="flex justify-between flex-wrap md:flex-nowrap">
            {RefFirstLevel && (
              <>
                {parseInt(mainResult[0]?.data) > 0 ? (
                  <div className="flex flex-col items-center  ">
                    <PopOver2
                      RefFirstLevel={mainResult[0].data}
                      userAddress={mainResult[0].userAddress}
                    />
                    <div className="  flex justify-center gap-x-[2px]">
                      <div className=" h-[20px] w-2 rotate-[50deg] transform border-l border-dashed border-purple-500"></div>
                      <div className="  h-[15px] w-2 border-l border-dashed border-purple-500"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-40deg] transform border-l border-dashed border-purple-500"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-60deg] transform border-l border-dashed border-purple-500"></div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center  ">
                    <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full  border "></a>
                    <div className="  flex justify-center gap-x-[2px]  ">
                      <div className="h-[20px] w-2 rotate-[50deg] transform   border-l border-dashed border-purple-500"></div>
                      <div className="  h-[15px] w-2   border-l border-dashed border-purple-500"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-40deg] transform border-l border-dashed border-purple-500"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-60deg] transform border-l border-dashed border-purple-500"></div>
                    </div>
                  </div>
                )}

                {parseInt(mainResult[1]?.data) > 0 ? (
                  <div className="flex flex-col items-center  ">
                    <PopOver2
                      RefFirstLevel={mainResult[1].data}
                      userAddress={mainResult[1].userAddress}
                    />

                    <div className="  flex justify-center gap-x-[2px]  ">
                      <div className="h-[20px] w-2 rotate-[50deg] transform border-l border-dashed border-purple-500"></div>
                      <div className="  h-[15px] w-2 border-l border-dashed border-purple-500"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-40deg] transform border-l border-dashed border-purple-500"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-60deg] transform border-l border-dashed border-purple-500"></div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center  ">
                    <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full  border "></a>
                    <div className="  flex justify-center gap-x-[2px]  ">
                      <div className="h-[20px] w-2 rotate-[50deg] transform   border-l border-dashed border-purple-500"></div>
                      <div className="  h-[15px] w-2   border-l border-dashed border-purple-500"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-40deg] transform border-l border-dashed border-purple-500"></div>
                      <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-60deg] transform border-l border-dashed border-purple-500"></div>
                    </div>
                  </div>
                )}

                {parseInt(mainResult[2]?.data) > 0 ? (
                  <div className="flex flex-col items-center  ">
                    <PopOver2
                      RefFirstLevel={mainResult[2].data}
                      userAddress={mainResult[2].userAddress}
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
                {parseInt(mainResult[3]?.data) > 0 ? (
                  <div className="flex flex-col items-center  ">
                    <PopOver2
                      RefFirstLevel={mainResult[3].data}
                      userAddress={mainResult[3].userAddress}
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
              </>
            )}
          </div>
          <div className="flex justify-between gap-10 mt-[5px] xl:gap-20 -ml-[60px] xl:-ml-[50px]">
            <div className="lg:ml-6 xl:ml-3">
              <RefFirstLevelCircle2
                activeLevel={activeLevel}
                address={results1.slice(0, 4)}
                position2={results1.slice(0, 4)}
              />
            </div>
            <div className=" -ml-2">
              <RefFirstLevelCircle2
                activeLevel={activeLevel}
                address={results2.slice(0, 4)}
                position2={results2.slice(0, 4)}
              />
            </div>
            <div className="lg:-ml-1 xl:-ml-3">
              <RefFirstLevelCircle2
                activeLevel={activeLevel}
                address={results3.slice(0, 4)}
                position2={results3.slice(0, 4)}
              />
            </div>
            <div className="ml-1 xl:-ml-3">
              <RefFirstLevelCircle2
                activeLevel={activeLevel}
                address={results4.slice(0, 4)}
                position2={results4.slice(0, 4)}
              />
            </div>
          </div>
        </div>
      ) : (
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
  return (
    <>
      <div className="ml-[6px] mt-[-6px] flex gap-x-4">
        <div className="flex flex-col gap-3">
          {parseInt(position2[0]?.data) > 0 ? (
            <div className="ml-[-6px] flex flex-col items-center">
              <PopOver4
                userAddress={position2[0].userAddress}
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
                userAddress={position2[1].userAddress}
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
                userAddress={position2[2].userAddress}
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
                userAddress={position2[3].userAddress}
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

export default RefSecondLevelCircle;
