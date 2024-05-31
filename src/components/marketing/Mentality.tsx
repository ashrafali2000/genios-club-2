import React from 'react';

const Mentality = () => {
  return (
    <section className="grid lg:grid-cols-2 gap-10 md:py-10 p-5 md:p-0 items-center">
      <div className="text-white md:w-[80%] md:ml-auto">
        <h1 className="text-4xl font-extrabold md:mb-14">
          <span className="border-t-8 border-[#f7cd3d] w-[70%] leading-loose">
            CHANGE YOUR MENTALITY
          </span>
          <span className="border-b-8 border-[#f7cd3d] w-fit"> WITH</span> OUR
          ACADEMY
        </h1>
        <p className="mt-5 font-medium ">
          By being part of <span className="text-[#e9cd2b]"> GENIOS CLUB </span>
          we do not guarantee magical results.
        </p>
        <p className="mt-5 font-medium">
          That is why we understand that it is necessary to undergo a mental
          change and for this reason a personal and leadership academy is
          developed for the use of our community.
        </p>
        <p className="mt-5 font-medium">
          It is the individual responsibility of each person to participate in
          the academy events and use the resources available to the team
        </p>
      </div>
      <div className="text-white w-full hidden lg:block h-full">
        <img src="/pic1.png" alt="pic1" />
      </div>
    </section>
  );
};

export default Mentality;
