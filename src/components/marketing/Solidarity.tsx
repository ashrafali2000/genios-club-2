
const Solidarity = () => {
  return (
    <section className="grid lg:grid-cols-2 gap-10 items-center md:py-10 p-5 md:p-0">
      <div className="text-white hidden lg:block w-full h-full">
        <img src="/solidarity.png" alt="solidarity" />
      </div>
      <div className="text-white md:w-[80%] mx-auto">
        <h1 className="border-t-8 md:w-80 md:px-3 md:py-3 border-[#f7cd3d] text-5xl font-extrabold">
          SOLIDARITY
        </h1>
        <p className="mt-5 font-medium">
          The powerful force that can make people achieve anything they set
          themselves to do.
        </p>
        <p className="mt-5 font-medium">
          Our mission is to create a solidarity economy system where each one of
          us is the engine that provokes the necessary changes to raise
          individual and collective quality of life.
        </p>
      </div>
    </section>
  );
};

export default Solidarity;
