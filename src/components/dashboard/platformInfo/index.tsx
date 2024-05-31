'use client';

import AllParticipants from './allParticipants';
import G3TotalEarnings from './totalEarnings';
import JoinedIn24Hours from './joinedIn24Hours';

const Participants = () => {
  return (
    <main className="relative pb-10 font-san text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center md:grid-cols-2 md:justify-between">
        <AllParticipants />

        <JoinedIn24Hours />

        {/* <TotalRanksEarnings /> */}
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center md:grid-cols-3 md:justify-between">
        <G3TotalEarnings />
      </div>
    </main>
  );
};

export default Participants;
