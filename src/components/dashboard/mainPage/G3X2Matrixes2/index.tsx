"use client";
import Matrix from "./Matrix";

const G3X2Matrixes2 = ({ address, view }: { address: any; view?: boolean }) => {
  return (
    <div className="z-10 mt-4 w-full rounded-[9px] border-none bg-[#2c0219] px-2 py-6 text-center font-san lg:mt-0 lg:px-6">
      <h1 className="mb-6 text-[25px] font-medium text-[#9168bf]">G3X2</h1>
      <div className="grid grid-cols-1 justify-center gap-4">
        <Matrix MatrixLevel={"1"} title={"2.5"} address={address} view={view} />
        <Matrix MatrixLevel={"2"} title={"10"} address={address} view={view} />
        <Matrix MatrixLevel={"3"} title={"40"} address={address} view={view} />
        <Matrix MatrixLevel={"4"} title={"160"} address={address} view={view} />
        <Matrix MatrixLevel={"5"} title={"640"} address={address} view={view} />
        <Matrix
          MatrixLevel={"6"}
          title={"2,560"}
          address={address}
          view={view}
        />
        <Matrix
          MatrixLevel={"7"}
          title={"10,240"}
          address={address}
          view={view}
        />
        <Matrix
          MatrixLevel={"8"}
          title={"40.960"}
          address={address}
          view={view}
        />
      </div>
    </div>
  );
};

export default G3X2Matrixes2;
