function EarnMatrix() {
  return (
    <div>
      <section className="w-[80%] pt-5 mx-auto">
        <div className="pb-10 mx-auto">
          <img src="/arrowmatrix.png" alt="arrowmatrix" />
        </div>
        <div className="grid lg:grid-cols-2 text-white gap-10 items-center">
          <div>
            <img src="/earnmatrix.png" alt="earnmatrix" />
          </div>
          <div>
            <p className="pb-7">
              We are building a team together, there is an overflow from above
              and from below. The partners in your matrix can be:invited by you,
              none invited by you or mixed
            </p>
            <p className="pb-7">
              The partners who occupy the three places in the first row below
              you move up for your higher partner or the team. 100% of those
              contributions go to the account of your higher partner or the
              team.
            </p>
            <p className="pb-7">
              You will receive the contribution of 100% of the first 4 partners
              who occupy the second line.
            </p>
            <p className="pb-7">
              The contributions from the 5th. to 8th. partner in the second line
              will be used to pay your next level in case you are not already
              active, otherwise you will receive 100% of these contributions.
            </p>
            <p>
              The last contribution of the second line will be used to restart
              the level, with this contribution the same level is activated
              again and 100% of this contribution is transferred to your higher
              partner or the team.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EarnMatrix;
