import React from "react";

const Circle = () => {
  return (
    <div className="flex flex-col items-center  ">
      <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer  rounded-full border"></a>
      <div className="  flex justify-center gap-x-[2px]  ">
        <div className="h-[20px] w-2 rotate-[50deg] transform border-l border-dashed border-purple-500"></div>
        <div className="  h-[10px] w-2   border-l border-dashed border-purple-500"></div>
        <div className="ml-[-2px] mt-[-5px] h-[20px] w-2 rotate-[-50deg] transform border-l border-dashed border-purple-500"></div>
      </div>
    </div>
  );
};

export default Circle;
