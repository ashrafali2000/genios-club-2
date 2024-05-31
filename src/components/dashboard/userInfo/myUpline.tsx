'use client';
import { GeniosClubAddress, GeniosClubAbi } from '@/lib/constant';
import CopyToClipboardButton from '@/lib/copyToClipboard';
import { useContract, useContractRead } from '@thirdweb-dev/react';

const MyUpline = ({ Ref }: { Ref: any }) => {
  const { contract: GeniosClubContract } = useContract(
    GeniosClubAddress,
    GeniosClubAbi
  );

  const { data: RefData } = useContractRead(GeniosClubContract, 'Users', [Ref]);

  return (
    <>
      <h1 className="text-[15px] font-bold text-[#ffffffb3]">My Upline</h1>

      <div className="mt-2 flex items-center justify-between rounded border p-1">
        <h1 className="mr-2 truncate text-[10px]  font-medium text-[#eeeeee] hover:text-[#ffb000]">
          {String(RefData?.Id)}
        </h1>
        <CopyToClipboardButton text={String(RefData?.Id)} />
      </div>
    </>
  );
};

export default MyUpline;
