"use client";

import PopOver from "@/components/popover";
import axios from "axios";
import { useEffect, useState } from "react";

const Page = ({ params }: any) => {
  const [isLoading, setIsLoading] = useState(true);
  const [levelData, setLevelData] = useState({
    FirstLevelRefs: [],
    SecondLevelRefs: [],
    ThirdLevelRefs: [],
  });

  useEffect(() => {
    if (!params.id) return;

    (async () => {
      try {
        const response = await axios.get(`/api/matrix/view/0/${params.id}`);
        const responseData = response.data;

        setLevelData({
          FirstLevelRefs: responseData.firstLevel,
          SecondLevelRefs: responseData.secondLevel,
          ThirdLevelRefs: responseData.thirdLevel,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [params.id]);

  return (
    <>
      {isLoading ? (
        <>loading</>
      ) : (
        <div className="mt-2 w-full rounded-[9px] border-none bg-[#2c0219] px-2 pb-6 pt-4 text-center font-san text-white">
          <div className="w-full rounded-2xl border border-solid border-[#ae7ddd]">
            <div className=" grid w-full">
              <div className="grid w-full  p-5">
                <div className="mt-4 flex justify-center gap-x-[148px]">
                  {levelData.FirstLevelRefs[0] ? (
                    <div className="h-[62px] w-[62px] cursor-pointer rounded-full border border-[#ae7ddd] bg-purple-500">
                      {levelData.FirstLevelRefs[0]}
                    </div>
                  ) : (
                    <div className="h-[62px] w-[62px] cursor-pointer rounded-full border" />
                  )}
                  {levelData.FirstLevelRefs[1] ? (
                    <div className="h-[62px] w-[62px] cursor-pointer rounded-full border border-[#ae7ddd] bg-purple-500">
                      {levelData.FirstLevelRefs[1]}
                    </div>
                  ) : (
                    <div className="h-[62px] w-[62px] cursor-pointer rounded-full border" />
                  )}
                  {levelData.FirstLevelRefs[2] ? (
                    <div className="h-[62px] w-[62px] cursor-pointer rounded-full border border-[#ae7ddd] bg-purple-500">
                      {levelData.FirstLevelRefs[2]}
                    </div>
                  ) : (
                    <div className="h-[62px] w-[62px] cursor-pointer rounded-full border" />
                  )}
                </div>

                <div className="mt-4 flex justify-center gap-x-20">
                  <div className="flex justify-center gap-x-2">
                    {levelData.SecondLevelRefs[0] ? (
                      <div className="h-[38px] w-[38px] cursor-pointer rounded-full border border-[#ae7ddd] bg-purple-500">
                        {levelData.SecondLevelRefs[0]}
                      </div>
                    ) : (
                      <div className="h-[38px] w-[38px] cursor-pointer rounded-full border" />
                    )}
                    {levelData.SecondLevelRefs[3] ? (
                      <div className="h-[38px] w-[38px] cursor-pointer rounded-full border border-[#ae7ddd] bg-purple-500">
                        {levelData.SecondLevelRefs[3]}
                      </div>
                    ) : (
                      <div className="h-[38px] w-[38px] cursor-pointer rounded-full border" />
                    )}
                    {levelData.SecondLevelRefs[6] ? (
                      <div className="h-[38px] w-[38px] cursor-pointer rounded-full border border-[#ae7ddd] bg-purple-500">
                        {levelData.SecondLevelRefs[6]}
                      </div>
                    ) : (
                      <div className="h-[38px] w-[38px] cursor-pointer rounded-full border" />
                    )}
                  </div>
                  <div className="flex justify-center gap-x-2">
                    {levelData.SecondLevelRefs[1] ? (
                      <div className="h-[38px] w-[38px] cursor-pointer rounded-full border border-[#ae7ddd] bg-purple-500">
                        {levelData.SecondLevelRefs[1]}
                      </div>
                    ) : (
                      <div className="h-[38px] w-[38px] cursor-pointer rounded-full border" />
                    )}
                    {levelData.SecondLevelRefs[4] ? (
                      <div className="h-[38px] w-[38px] cursor-pointer rounded-full border border-[#ae7ddd] bg-purple-500">
                        {levelData.SecondLevelRefs[4]}
                      </div>
                    ) : (
                      <div className="h-[38px] w-[38px] cursor-pointer rounded-full border" />
                    )}
                    {levelData.SecondLevelRefs[7] ? (
                      <div className="h-[38px] w-[38px] cursor-pointer rounded-full border border-[#ae7ddd] bg-purple-500">
                        {levelData.SecondLevelRefs[7]}
                      </div>
                    ) : (
                      <div className="h-[38px] w-[38px] cursor-pointer rounded-full border" />
                    )}
                  </div>
                  <div className="flex justify-center gap-x-2">
                    {levelData.SecondLevelRefs[2] ? (
                      <div className="h-[38px] w-[38px] cursor-pointer rounded-full border border-[#ae7ddd] bg-purple-500">
                        {levelData.SecondLevelRefs[2]}
                      </div>
                    ) : (
                      <div className="h-[38px] w-[38px] cursor-pointer rounded-full border" />
                    )}
                    {levelData.SecondLevelRefs[5] ? (
                      <div className="h-[38px] w-[38px] cursor-pointer rounded-full border border-[#ae7ddd] bg-purple-500">
                        {levelData.SecondLevelRefs[5]}
                      </div>
                    ) : (
                      <div className="h-[38px] w-[38px] cursor-pointer rounded-full border" />
                    )}
                    {levelData.SecondLevelRefs[8] ? (
                      <div className="h-[38px] w-[38px] cursor-pointer rounded-full border border-[#ae7ddd] bg-purple-500">
                        {levelData.SecondLevelRefs[8]}
                      </div>
                    ) : (
                      <div className="h-[38px] w-[38px] cursor-pointer rounded-full border" />
                    )}
                  </div>
                </div>

                <div className="mt-4 flex justify-center gap-x-2">
                  <div className="flex justify-center gap-x-1">
                    <div className="flex justify-center gap-x-1">
                      {levelData.ThirdLevelRefs[0] ? (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border border-[#ae7ddd] bg-purple-500">
                          {levelData.ThirdLevelRefs[0]}
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                      {levelData.ThirdLevelRefs[9] ? (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border border-[#ae7ddd] bg-purple-500">
                          {levelData.ThirdLevelRefs[9]}
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                      {levelData.ThirdLevelRefs[18] ? (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border border-[#ae7ddd] bg-purple-500">
                          {levelData.ThirdLevelRefs[18]}
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                    </div>

                    <div className="flex justify-center gap-x-1">
                      {levelData.ThirdLevelRefs[3] ? (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border border-[#ae7ddd] bg-purple-500">
                          {levelData.ThirdLevelRefs[3]}
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                      {levelData.ThirdLevelRefs[12] ? (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border border-[#ae7ddd] bg-purple-500">
                          {levelData.ThirdLevelRefs[12]}
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                      {levelData.ThirdLevelRefs[21] ? (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border border-[#ae7ddd] bg-purple-500">
                          {levelData.ThirdLevelRefs[21]}
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                    </div>

                    <div className="flex justify-center gap-x-1">
                      {levelData.ThirdLevelRefs[6] ? (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border border-[#ae7ddd] bg-purple-500">
                          {levelData.ThirdLevelRefs[6]}
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                      {levelData.ThirdLevelRefs[15] ? (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border border-[#ae7ddd] bg-purple-500">
                          {levelData.ThirdLevelRefs[15]}
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                      {levelData.ThirdLevelRefs[24] ? (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border border-[#ae7ddd] bg-purple-500">
                          {levelData.ThirdLevelRefs[24]}
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                    </div>
                  </div>

                  <div className="flex justify-center gap-x-1">
                    <div className="flex justify-center gap-x-1">
                      {levelData.ThirdLevelRefs[1] ? (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border border-[#ae7ddd] bg-purple-500">
                          {levelData.ThirdLevelRefs[1]}
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                      {levelData.ThirdLevelRefs[10] ? (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border border-[#ae7ddd] bg-purple-500">
                          {levelData.ThirdLevelRefs[10]}
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                      {levelData.ThirdLevelRefs[19] ? (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border border-[#ae7ddd] bg-purple-500">
                          {levelData.ThirdLevelRefs[19]}
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                    </div>

                    <div className="flex justify-center gap-x-1">
                      {levelData.ThirdLevelRefs[4] ? (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border border-[#ae7ddd] bg-purple-500">
                          {levelData.ThirdLevelRefs[4]}
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                      {levelData.ThirdLevelRefs[13] ? (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border border-[#ae7ddd] bg-purple-500">
                          {levelData.ThirdLevelRefs[13]}
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                      {levelData.ThirdLevelRefs[22] ? (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border border-[#ae7ddd] bg-purple-500">
                          {levelData.ThirdLevelRefs[22]}
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                    </div>

                    <div className="flex justify-center gap-x-1">
                      {levelData.ThirdLevelRefs[7] ? (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border border-[#ae7ddd] bg-purple-500">
                          {levelData.ThirdLevelRefs[7]}
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                      {levelData.ThirdLevelRefs[16] ? (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border border-[#ae7ddd] bg-purple-500">
                          {levelData.ThirdLevelRefs[16]}
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                      {levelData.ThirdLevelRefs[25] ? (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border border-[#ae7ddd] bg-purple-500">
                          {levelData.ThirdLevelRefs[25]}
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                    </div>
                  </div>

                  <div className="flex justify-center gap-x-1">
                    <div className="flex justify-center gap-x-1">
                      {levelData.ThirdLevelRefs[2] ? (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border border-[#ae7ddd] bg-purple-500">
                          {levelData.ThirdLevelRefs[2]}
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                      {levelData.ThirdLevelRefs[11] ? (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border border-[#ae7ddd] bg-purple-500">
                          {levelData.ThirdLevelRefs[11]}
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                      {levelData.ThirdLevelRefs[20] ? (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border border-[#ae7ddd] bg-purple-500">
                          {levelData.ThirdLevelRefs[20]}
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                    </div>

                    <div className="flex justify-center gap-x-1">
                      {levelData.ThirdLevelRefs[5] ? (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border border-[#ae7ddd] bg-purple-500">
                          {levelData.ThirdLevelRefs[5]}
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                      {levelData.ThirdLevelRefs[14] ? (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border border-[#ae7ddd] bg-purple-500">
                          {levelData.ThirdLevelRefs[14]}
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                      {levelData.ThirdLevelRefs[23] ? (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border border-[#ae7ddd] bg-purple-500">
                          {levelData.ThirdLevelRefs[23]}
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                    </div>

                    <div className="flex justify-center gap-x-1">
                      {levelData.ThirdLevelRefs[8] ? (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border border-[#ae7ddd] bg-purple-500">
                          {levelData.ThirdLevelRefs[8]}
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                      {levelData.ThirdLevelRefs[17] ? (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border border-[#ae7ddd] bg-purple-500">
                          {levelData.ThirdLevelRefs[17]}
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                      {levelData.ThirdLevelRefs[26] ? (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border border-[#ae7ddd] bg-purple-500">
                          {levelData.ThirdLevelRefs[26]}
                        </div>
                      ) : (
                        <div className="h-[19px] w-[19px] cursor-pointer rounded-full border" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
