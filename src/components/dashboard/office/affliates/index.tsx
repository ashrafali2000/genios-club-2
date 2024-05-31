'use client';
import React, { useEffect, useState } from 'react';
import NewUserPlace from './newUserPlace';
import axios from 'axios';
import { TableLoader } from '@/lib/utils/tableLoader';

const AffiliatesTable = ({ address }: { address: any }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [EventsArray, setEventsArray] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/events/gen`);
        var eventsData = response.data.data;

        var affiliatesArray: any = [];

        eventsData.forEach((event: any) => {
          const { referrer } = JSON.parse(event.data);
          const eventName = event.eventName;

          if (eventName === 'Registration' && referrer === address) {
            affiliatesArray.push(event);
          }
        });

        setEventsArray([...affiliatesArray.slice(-10)]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [address]);

  return (
    <div className="relative z-10 mt-4">
      <div className="rounded-[9px] border-none bg-[#2c0219] px-2 pb-6 pt-4 text-center font-san ">
        <div>
          <h1 className="text-[20px] font-medium text-[#9168bf] ">
            Last 10 Affiliates
          </h1>

          <div className="relative mt-5 overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full overflow-scroll text-center text-sm text-white ">
              <thead className="text-xs uppercase text-white ">
                <tr className="border-b text-[13px] font-bold text-[#6d678f]">
                  <th scope="col" className="px-6 py-3">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Registration Time
                  </th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <>
                    <tr className="border-b bg-[#ae7ddd12]">
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
                    <tr className="border-b bg-[#ae7ddd12]">
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
                    <tr className="border-b bg-[#ae7ddd12]">
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
                    <tr className="border-b bg-[#ae7ddd12]">
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
                    <tr className="border-b bg-[#ae7ddd12]">
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
                    <tr className="border-b bg-[#ae7ddd12]">
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
                    <tr className="border-b bg-[#ae7ddd12]">
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
                    <tr className="border-b bg-[#ae7ddd12]">
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
                  </>
                ) : (
                  EventsArray &&
                  EventsArray.map((event: any, index: any) => {
                    const { referrer } = JSON.parse(event.data);
                    const eventName = event.eventName;
                    if (eventName === 'Registration' && referrer === address) {
                      return (
                        <NewUserPlace key={index} event={event} index={index} />
                      );
                    }

                    return null;
                  })
                )}
              </tbody>
            </table>
            <>
              {!isLoading && EventsArray.length === 0 ? (
                <div>
                  <h1 className="m-5 text-white">Data not found</h1>
                </div>
              ) : null}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliatesTable;
