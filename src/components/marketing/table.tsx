function Table() {
  return (
    <div>
      <section className="w-[80%] pt-10 mx-auto">
        <div className="pb-10 mx-auto ">
          <img src="/tablecont.png" alt="tablecont" />
        </div>

        <div>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-center">
              <thead className="text-xs text-gray-700 uppercase bg-amber-400 ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    <p>SOLIDARITY</p>
                    <p>Matrix</p>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <p> DAI</p>
                    <p>CONTRIBUTION</p>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <p>POTENTIAL</p>
                    <p>CONTRIBUTIONS</p>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <p>CONTRIBUTIONS</p>
                    <p>MINUS</p>
                    <p>NEXT LEVEL</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-4 border-white  text-amber-400  ">
                  <td className="px-6 py-4">1</td>
                  <td className="px-6 py-4">2.5</td>
                  <td className="px-6 py-4">20</td>
                  <td className="px-6 py-4">10</td>
                </tr>
                <tr className="border-b-4 border-white  text-amber-400 ">
                  <td className="px-6 py-4">2</td>
                  <td className="px-6 py-4">10</td>
                  <td className="px-6 py-4">80</td>
                  <td className="px-6 py-4">40</td>
                </tr>
                <tr className="border-b-4 border-white text-amber-400">
                  <td className="px-6 py-4">3</td>
                  <td className="px-6 py-4">40</td>
                  <td className="px-6 py-4">320</td>
                  <td className="px-6 py-4">160</td>
                </tr>
                <tr className="border-b-4 border-white text-amber-400">
                  <td className="px-6 py-4">4</td>
                  <td className="px-6 py-4">160</td>
                  <td className="px-6 py-4">1,280</td>
                  <td className="px-6 py-4">640</td>
                </tr>
                <tr className="border-b-4 border-white  text-amber-400 ">
                  <td className="px-6 py-4">5</td>
                  <td className="px-6 py-4">640</td>
                  <td className="px-6 py-4">5,120</td>
                  <td className="px-6 py-4">20,480</td>
                </tr>
                <tr className="border-b-4 border-white  text-amber-400 ">
                  <td className="px-6 py-4">6</td>
                  <td className="px-6 py-4">10,140</td>
                  <td className="px-6 py-4">81,920</td>
                  <td className="px-6 py-4">40,960</td>
                </tr>
                <tr className="border-b-4 border-white  text-amber-400">
                  <td className="px-6 py-4">7</td>
                  <td className="px-6 py-4">40,960</td>
                  <td className="px-6 py-4">327,680</td>
                  <td className="px-6 py-4">10240</td>
                </tr>
                <tr className="border-b-4 border-white  text-amber-400 ">
                  <td className="px-6 py-4">8</td>
                  <td className="px-6 py-4">10,220</td>
                  <td className="px-6 py-4">81,920</td>
                  <td className="px-6 py-4">20,480</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-amber-400 pt-16">
            <p className="text-center">
              How long does it take you to get from 2.5 DAI to almost 400,000
              DAI?
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Table;
