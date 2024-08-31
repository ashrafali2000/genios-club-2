'use client';

import { ActiveChain, GeniosClubAbi, GeniosClubAddress } from '@/lib/constant';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import { useMemo, useState } from 'react';

const UserRank = ({ address }: { address: any }) => {
  const sdk = new ThirdwebSDK(ActiveChain);
  const [rank, setRank] = useState(0);

  useMemo(async () => {
    (async () => {
      const contract = await sdk.getContract(GeniosClubAddress, GeniosClubAbi);
      let rankCounter = 0;

      for (let level = 1; level <= 8; level++) {
        const data = await contract.call('usersRanks', [address, level]);

        if (data.IsActive) rankCounter++;
      }

      setRank(rankCounter);
    })();
  }, [address]);

  return <>{rank}</>;
};

export default UserRank;
