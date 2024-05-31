const Upgrade = () => {
  return (
    <section className=" w-[80%] pt-5 mx-auto">
      <div className="mx-auto">
        <img src="/arrowupgrade.png" alt="arrowupgrade" />
      </div>
      <div className="grid lg:grid-cols-2 pt-5 gap-10 items-center">
        <div className="text-white text-justify text-base">
          <p>
            <span className="text-violet-800"> UPGRADE </span> Its the opening
            (activation) of the next highest level in the matrix that you are
            occupying. The contribution goes up to your higher partner, or the
            qualified member above.
          </p>
          <p className="mt-5">
            You can upgrade your level at any time or you can let the system
            automatically do it for you
          </p>
          <p className="mt-5">
            System automatic upgrade for G3X2:
            <br /> 100% of the contributions from the 5th. to 8th. partner in
            the second line will be used to pay your contribution to the next
            level.
          </p>
          <p className="mt-5">
            System automatic upgrade for G3X5:
            <br /> Out of the last 20 contributions in the 5th. line, the first
            16 will be used to pay your contribution to the next level.
          </p>
          <p className="mt-5">
            When you contribute at the necessary level, on the next recycle,
            your referred partners will take a place below you, and with each
            repetition they will take a place below you again.
          </p>
        </div>
        <div>
          <div>
            <img src="/graphupdate.png" alt="graphupdate" />
          </div>
          <div>
            <div className="flex pb-5 items-center">
              <div className="pt-2 mr-2">
                <img src="/minus.png" className="w-5" alt="minus" />
              </div>
              <div className="text-white">
                <span className="text-red-600">Lost Contribution:</span> The
                contribution is left to a higher partner due to failure to
                upgrade to a superior level.
              </div>
            </div>
            <div className="flex">
              <div className="pt-2 mr-2">
                <img src="/gift.png" className="w-5" alt="gift" />
              </div>
              <div className="text-white">
                <span className="text-lime-900">Lost Contribution:</span> The
                contribution is left to a higher partner due to failure to
                upgrade to a superior level.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Upgrade;
