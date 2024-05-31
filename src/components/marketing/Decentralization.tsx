const Decentralization = () => {
  return (
    <section className="grid lg:grid-cols-2 gap-10 max-w-7xl items-center mx-auto md:py-10 p-5">
      <div className="p-20">
        <img src="/brands.png" alt="brands" />
      </div>
      <div className="text-white">
        <img src="/arrow.png" alt="arrow" className="pt-5" />
        <h1 className="text-2xl md:text-4xl font-extrabold pt-8">
          DECENTRALIZATION DAI Polygon BlockChain
        </h1>
        <p className="md:pt-5 pt-5">
          Our system works in a decentralized way through an automated contract
          that offers maximum security and sustainability.
        </p>
        <p className="md:pt-5 pt-2 ">
          A smart contract is a self-executing algorithm that, in this case,
          exists within the Polygon BlockChain.
        </p>
        <p className="md:pt-5 pt-2">
          Smart contracts, like cryptocurrencies, are decentralized and work
          without the possibility of subsequently modifying the previously
          defined execution. The code that contains all the logic of the
          contract is on the Blockchain and millions of computers around the
          world provide all the calculations, this ensures that there is no risk
          of hacking the smart contract or stopping the project.
        </p>
      </div>
    </section>
  );
};

export default Decentralization;
