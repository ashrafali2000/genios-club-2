'use client';

import { ActiveChain, GeniosClubAbi, GeniosClubAddress } from '@/lib/constant';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import { useMemo, useState } from 'react';

const UserX7Level = ({ address }: { address: any }) => {
  const sdk = new ThirdwebSDK(ActiveChain);
  const [X7Level, setX7Level] = useState(0);

  useMemo(async () => {
    (async () => {
      const contract = await sdk.getContract(GeniosClubAddress, GeniosClubAbi);
      let levelCounter = 0;

      for (let level = 1; level <= 8; level++) {
        const data = await contract.call('usersActiveG3X7Levels', [
          address,
          level,
        ]);

        if (data) levelCounter++;
      }

      setX7Level(levelCounter);
    })();
  }, [address]);

  return <>{X7Level}</>;
};

export default UserX7Level;
