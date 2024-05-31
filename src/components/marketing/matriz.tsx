function Matriz() {
  return (
    <div>
      <section className="w-[80%] pt-10 mx-auto">
        <div className="pb-10 mx-auto ">
          <img src="/matrizarrow.png" alt="matrizarrow" />
        </div>
        <div className="grid lg:grid-cols-2 text-white mt-5 gap-5 items-center">
          <div className="mx-auto">
            <img src="/matriz1.png" alt="matriz1" className="mb-5" />
            <p className="text-center mb-5">
              Solidarity matrix system with 4 characteristics:
            </p>
            <div className="grid grid-cols-2 md:w-[60%] mx-auto">
              <div>
                <ul>
                  <li>Follow me</li>
                  <li>Unlimited recycling</li>
                </ul>
              </div>
              <div>
                <ul className="md:pl-5 lg:pl-0 ">
                  <li>No expiration date</li>
                  <li>5 Lines Spillover</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img src="/Matriz2.png" alt="matriz2" className="pb-5" />
              <div className="mx-auto">
                <p className="text-center mb-5">
                  Solidarity matrix system with 4 characteristics:
                </p>
              </div>
              <div className="text-center">
                <div>
                  <ul>
                    <li>3 positions in the first row</li>
                    <li>363 total positions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Matriz;
