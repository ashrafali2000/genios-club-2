"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { G3X2Reinvest, G3X2Transactions } from "./G3X2Transactions";
import { TableLoader } from "@/lib/utils/tableLoader";
import Pagination from "@/lib/utils/pagination";

const TransactionTable = ({ matrixLevel, userAddress }: any) => {
  const [eventsArray, setEventsArray] = useState<any[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState<any>(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState<number | null>(null);

  const handleItemsPerPageChange = (e: any) => {
    const newItemsPerPage = parseInt(e.target.value, 10);
    setCurrentPage(1); // Reset to the first page
    setItemsPerPage(newItemsPerPage);
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(`/api/events/g3x2-matrixes/gen`, {
        userAddress,
        currentPage,
        itemsPerPage,
        matrixLevel,
      });
      const eventsData = response.data;
      setEventsArray(eventsData.data);
      setTotalPages(eventsData.pagination.totalPages);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, [matrixLevel, userAddress, currentPage, itemsPerPage]);
  return (
    <div className="relative z-10 md:mt-10">
      <div className="rounded-[9px] border-none bg-[#2c0219] px-2 pb-6  pt-4 text-center font-san ">
        <div>
          <h1 className="text-[20px] font-medium text-[#9168bf] ">
            Matrix Transactions
          </h1>

          <div className="relative mt-5 shadow-md sm:rounded-lg">
            {!isLoading && eventsArray && eventsArray.length > 0 && (
              <div className="float-left">
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
            )}
            <div className="relative w-full overflow-auto lg:h-[78vh] xl:h-[80vh] h-[90vh] shadow-md sm:rounded-lg">
              <table className="w-full text-center text-sm text-white">
                <thead className="text-xs uppercase text-white ">
                  <tr className="border-b text-[13px] font-bold text-[#6d678f]">
                    <th scope="col" className="px-6 py-3">
                      Type
                    </th>

                    <th scope="col" className="px-6 py-3">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Wallet
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
                    : eventsArray &&
                      eventsArray.map((event: any, index: any) => {
                        const eventName = event.eventName;

                        if (eventName === "NewUserPlace") {
                          return (
                            <G3X2Transactions
                              key={index}
                              event={event}
                              index={index}
                            />
                          );
                        }

                        if (eventName === "Reinvest") {
                          return (
                            <G3X2Reinvest
                              key={index}
                              event={event}
                              index={index}
                            />
                          );
                        }
                      })}
                </tbody>
              </table>
            </div>
            {!isLoading && eventsArray && eventsArray.length === 0 ? (
              <div>
                <h1 className="m-5 text-white">Data not found</h1>
              </div>
            ) : null}
          </div>
        </div>
        {!isLoading && totalPages != null && (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            marginTop={"6"}
          />
        )}
      </div>
    </div>
  );
};

export default TransactionTable;
