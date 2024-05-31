function Start() {
  return (
    <div>
      <section className=" py-10 w-[80%] mx-auto">
        <div className="pb-10 mx-auto ">
          <img src="/startarrow.png" alt="startarrow" />
        </div>
        <div className="flex lg:flex-row flex-col lg:items-center text-white mt-5 gap-5">
          <div className="lg:w-[60%] w-full">
            <img src="/start.png" alt="start" className="w-full" />
          </div>
          <div className="lg:w-[40%] w-full">
            <p className="pb-6">
              It is recommended to activate at least the first four levels from
              the start, this ensures a powerful start and higher profit
              potential.
            </p>
            <p className="pb-6">
              Of course, we all have to start with the first level, however,
              starting only with this one could quickly lead to overflow if your
              structure develops fast.
            </p>
            <p className="pb-5">
              The most successful partners use strategies to start from several
              levels at once, setting an example for their partners who do the
              same. As a result, if you open more levels from the beginning your
              contributions will grow faster.
            </p>
            <p>
              Many start from 5 levels at a time, some even from 6 levels or
              more.
            </p>
            <div className="flex text-center text-slate-950 font-extrabold">
              <p className="w-48 mr-3 bg-amber-400">5</p>
              <p className="w-48 mr-3 bg-amber-400">20</p>
              <p className="w-48 mr-3 bg-amber-400">80</p>
              <p className="w-48 bg-amber-400">320</p>
              <p className="w-48 text-white">=</p>
              <p className="w-48 bg-amber-400">425</p>
              <p className="w-48  text-white">DAI</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Start;
