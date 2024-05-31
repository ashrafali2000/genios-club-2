'use client';
import { useRef } from 'react';
import Link from 'next/link';

const Page: React.FC = () => {
  const scrollableDivRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (): void => {
    const scrollableDiv = scrollableDivRef.current;
    if (scrollableDiv) {
      scrollableDiv.addEventListener(
        'wheel',
        handleWheel as unknown as EventListener,
        {
          passive: false,
        }
      );
    }
  };

  const handleMouseLeave = (): void => {
    const scrollableDiv = scrollableDivRef.current;
    if (scrollableDiv) {
      scrollableDiv.removeEventListener(
        'wheel',
        handleWheel as unknown as EventListener
      );
    }
  };

  const handleWheel: React.WheelEventHandler<HTMLDivElement> = (event) => {
    const scrollableDiv = scrollableDivRef.current;
    const scrollSpeed = 1100; // Adjust scroll speed as needed

    if (event.deltaY !== 0) {
      event.preventDefault();
      if (scrollableDiv) {
        const wheelEvent = event;
        scrollableDiv.scrollLeft +=
          wheelEvent.deltaY > 0 ? scrollSpeed : -scrollSpeed;
      }
    }
  };
  return (
    <div className="z-10  mt-10 lg:ml-10  lg:mt-0">
      <div className="relative rounded-[9px] border-none bg-[#2c0219] p-3 text-center font-san sm:p-6 sm:py-12">
        <h1 className="mb-10 text-[25px] font-medium text-[#9168bf]">
          Seven Level Click
        </h1>
        {/* <h1 className="mb-10 text-[20px] font-medium text-[#9168bf]">
          team icon {team}
        </h1>
        <h1 className="mb-10 text-[20px] font-medium text-[#9168bf]">
          Reinvest icon {UseFormatNumber(levelData?.ReinvestCount)}
        </h1> */}

        <h1 className="mx-auto mb-[20px] flex h-[80px] w-[200px] items-center justify-center rounded-lg border-2 border-[#ae7ddd] bg-[#1e1c2f] pl-[8px] pr-[8px] text-3xl font-bold text-[#ae7ddd] sm:w-[340px] xl:w-[440px]">
          1
        </h1>

        <div className="flex items-center text-white">
          <Link
            href={`/g3x2-matrix`}
            className="rounded-3xl border border-[#9168bf] p-2 text-[10px] text-white sm:text-[18px]"
          >
            <span className="sm:text-xl">&lt;</span> 2
          </Link>

          <div className="z-10 mx-auto w-[70%] rounded-lg bg-[#9168bf] p-5 sm:w-[340px] xl:w-[440px]">
            <div className="flex justify-between">
              <h1 className="text-white md:text-[25px]">1</h1>
              <a href="#" className="font-bold text-white md:text-[25px]">
                ID 3
              </a>
            </div>
            <div className="mt-3 flex flex-col items-end">
              <h1 className="font-bold text-white md:text-[20px]">11 DAI</h1>
            </div>
          </div>

          <Link
            href={`/g3x2-matrix/1`}
            className="rounded-3xl border border-[#9168bf] p-2 text-[10px] text-white sm:text-[18px]"
          >
            1<span className="sm:text-xl">&gt;</span>
          </Link>
        </div>

        <div className="sm:w-full">
          <div className="px-5 md:px-[50px] lg:px-5 xl:px-[50px]">
            <div className="w-full rounded-[9px] border-none bg-[#2c0219] px-2 pb-6 pt-4 text-center font-san">
              <div
                ref={scrollableDivRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onWheel={handleWheel}
                className="scrollable-div grid w-full overflow-x-auto scroll-smooth p-5"
              >
                <div className="mt-4 flex justify-center gap-x-[148px]">
                  <div className="min-h-[62px] min-w-[62px] cursor-pointer rounded-full border" />

                  <div className="min-h-[62px] min-w-[62px] cursor-pointer rounded-full border" />

                  <div className="min-h-[62px] min-w-[62px] cursor-pointer rounded-full border" />
                </div>

                <div className="mt-4 flex justify-center gap-x-20">
                  <div className="flex justify-center gap-x-2">
                    <div className="min-h-[38px] min-w-[38px] cursor-pointer rounded-full border" />

                    <div className="min-h-[38px] min-w-[38px] cursor-pointer rounded-full border" />

                    <div className="min-h-[38px] min-w-[38px] cursor-pointer rounded-full border" />
                  </div>
                  <div className="flex justify-center gap-x-2">
                    <div className="min-h-[38px] min-w-[38px] cursor-pointer rounded-full border" />

                    <div className="min-h-[38px] min-w-[38px] cursor-pointer rounded-full border" />

                    <div className="min-h-[38px] min-w-[38px] cursor-pointer rounded-full border" />
                  </div>
                  <div className="flex justify-center gap-x-2">
                    <div className="min-h-[38px] min-w-[38px] cursor-pointer rounded-full border" />

                    <div className="min-h-[38px] min-w-[38px] cursor-pointer rounded-full border" />

                    <div className="min-h-[38px] min-w-[38px] cursor-pointer rounded-full border" />
                  </div>
                </div>

                <div className="mt-4 flex justify-center gap-x-1">
                  <div className="flex justify-center gap-x-1">
                    <div className="flex justify-center gap-x-1">
                      <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                      <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                      <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                    </div>
                    <div className="flex justify-center gap-x-1">
                      <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                      <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                      <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                    </div>
                    <div className="flex justify-center gap-x-1">
                      <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                      <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                      <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                    </div>
                  </div>
                  <div className="flex justify-center gap-x-1">
                    <div className="flex justify-center gap-x-1">
                      <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                      <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                      <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                    </div>
                    <div className="flex justify-center gap-x-1">
                      <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                      <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                      <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                    </div>
                    <div className="flex justify-center gap-x-1">
                      <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                      <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                      <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                    </div>
                  </div>
                  <div className="flex justify-center gap-x-1">
                    <div className="flex justify-center gap-x-1">
                      <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                      <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                      <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                    </div>
                    <div className="flex justify-center gap-x-1">
                      <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                      <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                      <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                    </div>
                    <div className="flex justify-center gap-x-1">
                      <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                      <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                      <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-center gap-x-1">
                  <div className="flex justify-center gap-x-1">
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                    </div>
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                    </div>
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center gap-x-1">
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                    </div>
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                    </div>
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center gap-x-1">
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                    </div>
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                    </div>
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                        <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-center gap-x-1">
                  <div className="flex justify-center gap-x-1">
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center gap-x-1">
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center gap-x-1">
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                          <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-center gap-x-1">
                  <div className="flex justify-center gap-x-1">
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center gap-x-1">
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center gap-x-1">
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center gap-x-1">
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                        <div className="flex justify-center gap-x-1">
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                          <div className="flex justify-center gap-x-1">
                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />

                            <div className="min-h-[19px] min-w-[19px] cursor-pointer rounded-full border" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="mt-4 flex justify-around gap-x-[29px] xsm:gap-x-[20px] sm:justify-center sm:gap-x-[125px] xl:gap-x-[168px]">
              <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border text-white sm:h-[70px] sm:w-[70px] xl:h-[80px] xl:w-[80px]"></a>

              <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border text-white sm:h-[70px] sm:w-[70px] xl:h-[80px] xl:w-[80px]"></a>

              <a className="ml-[-5px] flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-full border text-white sm:h-[70px] sm:w-[70px] xl:h-[80px] xl:w-[80px]"></a>
            </div>

            <div className="mt-4 flex justify-around gap-x-[21px] overflow-x-auto sm:justify-center sm:gap-x-[32px] xl:gap-x-[85px]">
              <div className=" flex gap-x-2  sm:gap-x-3">
                <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[50px] sm:w-[50px] "></a>

                <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[50px] sm:w-[50px] "></a>

                <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[50px] sm:w-[50px] "></a>
              </div>
              <div className=" flex gap-x-2  sm:gap-x-3">
                <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[50px] sm:w-[50px] "></a>

                <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[50px] sm:w-[50px] "></a>

                <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[50px] sm:w-[50px] "></a>
              </div>
              <div className=" flex gap-x-2  sm:gap-x-3">
                <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[50px] sm:w-[50px] "></a>

                <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[50px] sm:w-[50px] "></a>

                <a className="ml-[-5px]  h-[21px] w-[21px] cursor-pointer rounded-full border sm:h-[50px] sm:w-[50px] "></a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
