function HeroSection() {
  return (
    <div className="flex justify-center items-center h-screen text-white bg-[url('/backgroundimage.png')]">
      <section>
        <div className="w-[40%] mx-auto pb-10">
          <img src="/footerlogo.png" alt="footerlogo" />
        </div>
        <div className="text-center text-3xl md:text-7xl font-extrabold pb-10">
          <h1>GENIOS</h1>
          <h1>CLUB</h1>
        </div>
        <div className="text-center text-sm md:text-xl">
          <h2 className="text-amber-400">
            100% DECENTRALIZED SOLIDARITY MATRIX
          </h2>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
