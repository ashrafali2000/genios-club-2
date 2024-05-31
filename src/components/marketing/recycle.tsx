function Recycle() {
  return (
    <div>
      <section className="w-[80%] pt-10 mx-auto">
        <div className="pb-5 mx-auto  ">
          <img src="/recycle.png" alt="recycle" />
        </div>
        <div className="grid lg:grid-cols-2 text-white gap-5 items-center">
          <div>
            <img src="/upline.png" alt="upline" className="mx-auto w-96" />
          </div>
          <div className="xl:text-lg">
            <p className="lg:pb-8 md:pb-5 pb-4 ">
              It consists on the reopening (activation) of the current level.
            </p>
            <p className="lg:pb-8 md:pb-5 pb-4">
              <span className="text-purple-900">Recycling</span> opens the same
              matrix again for you so you continue to receive contributions from
              it, without recycling, this matrix would be closed and you would
              not get more contributions from it
            </p>
            <p className="lg:pb-8 md:pb-5 pb-4">
              Recycling is done automatically, as soon as the last free space in
              your matrix is ​​occupied, the current matrix is closed and
              archived. You go on to occupy a free space in the same level of
              the matrix of your higher partner and your level opens again with
              free spaces to be occupied.
            </p>
            <p className="lg:pb-8 md:pb-5 pb-4">
              100% of the contribution goes to the wallet of your higher
              partner. Similarly, your referred partners will recycle and you
              will receive instant contributions at all times.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Recycle;
