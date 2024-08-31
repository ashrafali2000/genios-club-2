"use client";
import { useEffect, useState } from "react";
// import Upgrade from "./upgrade";
import { TableLoader } from "@/lib/utils/tableLoader";
// import Registration from "./registration";
// import Reinvest from "./reinvest";
// import MissedTokenReceive from "./missedTokenReceive";
// import SentExtraTokenDividends from "./sentExtraTokenDividends";
// import G3X7RankUpdated from "./G3X7RankUpdated";
// import G3X7ClubUpdated from "./G3X7ClubUpdated";
// import G3X7AcademyUpdated from "./G3X7AcademyUpdated";
// import RankEarners from "./rankEarners";
import axios from "axios";
import NewUserPlace from "./newUserPlace";
// import Pagination from "@/lib/utils/pagination";

// import { defineChain } from "thirdweb/chains";
const Statistics = ({ address }: any) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [EventsArray, setEventsArray] = useState<any[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState<any>(10);
  const [filters, setFilters] = useState({
    addr: "",
  });
  // const [totalPages, setTotalPages] = useState<number | null>(null);
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://genios-club-2-backend.vercel.app/newusers`
      );
      const eventsData = response.data;
      console.log("eventsData------------>", eventsData);
      // setTotalPages(eventsData.pagination.totalPages);
      setEventsArray(eventsData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [address, currentPage, itemsPerPage]);

  const handleItemsPerPageChange = (e: any) => {
    const newItemsPerPage = parseInt(e.target.value, 10);
    setCurrentPage(1); // Reset to the first page
    setItemsPerPage(newItemsPerPage);
  };

  //

  // create the client with your clientId, or secretKey if in a server environment

  // connect to your contract

  return (
    <div className=" rounded-[9px] border-none bg-[#2c0219] px-2 pb-6 pt-4 text-center font-san">
      <div>
        <h1 className="mb-10 text-[20px] font-medium text-[#9168bf]">
          STATISTICS
        </h1>

        <div className="flex items-center pb-4 justify-between">
          <div>
            <label>Items per page:</label>
            <select
              className="bg-transparent"
              onChange={handleItemsPerPageChange}
              value={itemsPerPage}
            >
              <option className="text-black" value={10}>
                10
              </option>
              <option className="text-black" value={25}>
                25
              </option>
              <option className="text-black" value={50}>
                50
              </option>
              <option className="text-black" value={100}>
                100
              </option>
            </select>
          </div>
          <div>
            <div className="justify-left flex">
              <h1 className="text-[11px] text-[#dddddd]">Search</h1>
            </div>
            <input
              type="text"
              name="FilterByUserAddress"
              value={filters.addr}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  addr: e.target.value,
                })
              }
              className="block rounded-md border-[1px] bg-transparent p-2 text-sm text-white md:w-80 "
              placeholder="Search User Address"
            />
          </div>
        </div>
        <div className="relative w-full overflow-auto lg:h-[78vh] xl:h-[80vh] h-[90vh] shadow-md sm:rounded-lg">
          <table className="w-full text-center text-sm text-white ">
            <thead className="text-xs uppercase text-white">
              <tr className="border-b text-[13px] font-bold text-[#6d678f]">
                <th scope="col" className="px-6 py-3">
                  TYPE
                </th>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Ref Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Amount
                </th>

                <th scope="col" className="px-6 py-3">
                  DATE
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading
                ? [1, 2, 3, 4, 5, 6, 7, 8].map((index: any) => {
                    return (
                      <tr key={index} className="border-b bg-[#ae7ddd12]">
                        <td>
                          <TableLoader />
                        </td>
                        <td>
                          <TableLoader />
                        </td>
                        <td>
                          <TableLoader />
                        </td>
                        <td>
                          <TableLoader />
                        </td>
                        <td>
                          <TableLoader />
                        </td>
                        <td>
                          <TableLoader />
                        </td>
                        <td>
                          <TableLoader />
                        </td>
                      </tr>
                    );
                  })
                : EventsArray &&
                  EventsArray.map((event: any, index: any) => {
                    return (
                      <NewUserPlace key={index} event={event} index={index} />
                    );
                  })}
            </tbody>
          </table>
          {!isLoading && EventsArray && EventsArray.length === 0 ? (
            <div>
              <h1 className="m-5 text-white">Data not found</h1>
            </div>
          ) : null}
        </div>
      </div>
      {/* {!isLoading && totalPages != null && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          marginTop={"6"}
        />
      )} */}
    </div>
  );
};

export default Statistics;
