const OverPass = () => {
  return (
    <section className=" w-[80%] pt-10 mx-auto">
      <div className="mx-auto">
        <img src="/placingarrow.png" alt="placingarrow" />
      </div>
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <div className="pt-6">
            <img src="/graphupdate.png" alt="graphupdate" />
          </div>
          <div className="text-white flex">
            <ul className="flex items-center">
              <li className="mr-2">
                <img src="/dot1.png" className="w-10" alt="dot1" />
              </li>
              <li>Direct Partner.</li>
            </ul>
          </div>
          <div className="text-white flex">
            <ul className="flex items-center">
              <li className="mr-2">
                <img src="/dot1.png" className="w-10" alt="dot1" />
              </li>
              <li>
                Overflow from above: Partner personally invited by your
                superior.
              </li>
            </ul>
          </div>
          <div className="text-white flex">
            <ul className="flex items-center">
              <li className="mr-2">
                <img src="/dot1.png" className="w-10" alt="dot1" />
              </li>
              <li>
                Overflow from below: Partner personally invited by your
                downline.
              </li>
            </ul>
          </div>
          <div className="text-white ">
            <ul className="flex items-center">
              <li className="mr-2">
                <img src="/dot1.png" className="w-10" alt="dot1" />
              </li>
              <li>Partner who overpassed his superior partner.</li>
            </ul>
          </div>
        </div>
        <div className="text-white lg:pt-10 text-justify text-sm">
          <p>
            You can overpass your superior partner by opening levels that he has
            not yet reached, in this case, you get into his superior partner
            matrix, the closest one who has such a level that you have
            contributed at and the contribution goes to him
          </p>
          <p className="mt-5">
            If the next higher partner does not have this matrix available, then
            in the same way you are already overpassing two higher partners
            until the system finds a higher partner who already has an active
            matrix of this level.
          </p>
          <p className="mt-5">
            The Follow Me system places back partners. This means that when your
            superior partner contributes in that space, after the next
            repurchase, you will return to occupy a place below him.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OverPass;
