import { GeniosClubAddress2, GeniosClubAbi2 } from "@/lib/constant";
import { Popover, Transition } from "@headlessui/react";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { Fragment, useRef } from "react";

export default function PopOver2({
  userAddress,
  RefFirstLevel,
  matrix,
  size,
}: any) {
  const buttonRef = useRef<any>(null);
  const timeoutDuration = 100;
  let timeout: any;
  const { contract: GeniosClubContract } = useContract(
    GeniosClubAddress2,
    GeniosClubAbi2
  );

  const { data: user, isLoading } = useContractRead(
    GeniosClubContract,
    "Users",
    [userAddress]
  );

  const closePopover = () => {
    return buttonRef?.current?.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Escape",
        bubbles: true,
        cancelable: true,
      })
    );
  };

  const onMouseEnter = (open: any) => {
    clearTimeout(timeout);
    if (open) return;
    return buttonRef.current?.click();
  };

  const onMouseLeave = (open: any) => {
    if (!open) return;
    timeout = setTimeout(() => closePopover(), timeoutDuration);
  };

  return (
    <>
      {(parseInt(RefFirstLevel) >= 0 &&
        userAddress[0] === "0x8D7df39af8CEd4bE71BF3777Bb738ec2f04806AA") ||
      userAddress[1] === "0x8D7df39af8CEd4bE71BF3777Bb738ec2f04806AA" ||
      userAddress[2] === "0x8D7df39af8CEd4bE71BF3777Bb738ec2f04806AA" ||
      userAddress[3] === "0x8D7df39af8CEd4bE71BF3777Bb738ec2f04806AA" ? (
        <span
          className={`ml-[-5px] h-[21px]  w-[21px] cursor-pointer rounded-full border`}
        />
      ) : (
        <Popover className="relative">
          {({ open }) => {
            return (
              <div onMouseLeave={onMouseLeave.bind(null, open)}>
                <Popover.Button
                  ref={buttonRef}
                  className={`
                  ${open ? "" : "text-opacity-90 "}
                  group inline-flex items-center rounded-md text-base font-medium text-white hover:text-opacity-100 focus:outline-none `}
                  onMouseEnter={onMouseEnter.bind(null, open)}
                  onMouseLeave={onMouseLeave.bind(null, open)}
                >
                  <a className="ml-[-5px] h-[21px]  w-[21px] cursor-pointer rounded-full border  border-[#ae7ddd] bg-purple-500 text-white text-xs flex justify-center items-center">
                    {parseInt(RefFirstLevel) > 0 && parseInt(RefFirstLevel)}
                  </a>
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 mt-0 w-[300px] -translate-x-1/2 transform px-4 sm:px-0 ">
                    <div
                      className="w-full rounded-lg border border-[#ae7ddd] shadow-lg "
                      onMouseEnter={onMouseEnter.bind(null, open)}
                      onMouseLeave={onMouseLeave.bind(null, open)}
                    >
                      <div className="rounded-t-lg border-b border-[#ae7ddd] bg-[#2c0219] px-3 py-2 ">
                        <h3 className="font-semibold text-white">
                          USER ID: {parseInt(RefFirstLevel)}
                        </h3>
                      </div>
                      <div className="rounded-b-lg  bg-[#2c0219] px-3 py-2 text-white">
                        <p>
                          {userAddress?.slice(0, 9)} . . .{" "}
                          {userAddress?.slice(-9)}
                        </p>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </div>
            );
          }}
        </Popover>
      )}
    </>
  );
}
