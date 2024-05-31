function Matrix() {
  return (
    <div>
      <section className="w-[80%] pt-5 mx-auto">
        <div className="pb-10 mx-auto ">
          <img src="/matrixarrow.png" alt="matrixarrow" />
        </div>
        <div className="grid md:grid-cols-2 text-white gap-5">
          <div>
            <img src="/matrix1.png" alt="matrix1" className="mb-5" />
            <p>Solidarity matrix system with 3 characteristics:</p>
            <p>with 3 characteristics:</p>
            <ul className="list-disc lg:pl-10 lg:pt-6 md:pl-5 pt-2 pl-5">
              <li>Follow me</li>
              <li>Follow me</li>
              <li>Unlimited recycling</li>
            </ul>
          </div>
          <div>
            <img src="/matrix2.png" alt="matrix2" className="mb-5" />
            <p>This system consists of 2 lines:</p>
            <ul className="list-disc lg:pl-10 lg:pt-6 md:pl-5 pt-2 pl-5">
              <li>3 positions in the first row</li>
              <li>9 positions in the second row</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Matrix;
