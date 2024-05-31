function Distribution() {
  return (
    <section className="w-[80%] pt-10 mx-auto">
      <div className="pb-10 mx-auto">
        <img src="/distarrow.png" alt="distarrow" />
      </div>
      <div className="mx-auto">
        <img src="/team.png" alt="team" />
      </div>
      <div className=" w-[75%] mx-auto mt-10 text-sm text-center">
        <p className=" text-white">
          The community will benefit from a pre-determined registration sequence
          from sponsors.When any sponsor registers a new user this new affiliate
          will be placed following these rules:
        </p>
      </div>
      <div className="text-white text-center  mx-auto mt-5">
        <p>First Line: Affiliates 1, 2 and 3 From left to right.</p>
      </div>
      <div className="grid lg:grid-cols-3 text-white mt-5 text-center">
        <div className="pb-5">
          <ul>
            <li>Affiliate 4 under user 1 in first line.</li>
            <li>Affiliate 7 under user 1 in first line.</li>
            <li>Affiliate 7 under user 1 in first line.</li>
          </ul>
        </div>
        <div className="pb-5">
          <ul>
            <li>Affiliate 5 under user 2 in first line.</li>
            <li>Affiliate 8 under user 2 in first line.</li>
            <li>Affiliate 11 under user 2 in first line.</li>
          </ul>
        </div>
        <div className="pb-5">
          <ul>
            <li>Affiliate 6 under user 3 in first line.</li>
            <li>Affiliate 9 under user 3 in first line.</li>
            <li>Affiliate 12 under user 3 in first line. </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Distribution;
