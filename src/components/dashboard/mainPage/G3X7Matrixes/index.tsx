'use client';
import Matrix from './Matrix';

const G3X7Matrixes = ({ address, view }: { address: any; view?: boolean }) => {
  return (
    <div className="mt-8 w-full rounded-[9px] bg-[#2c0219] px-2 py-6 text-center font-san lg:mt-6 lg:px-6">
      <h1 className="mb-3 text-[25px] font-medium text-[#9168bf]">G3X5</h1>
      <div className="grid grid-cols-1 justify-center gap-4">
        <Matrix address={address} title={'2.5'} MatrixLevel={'1'} view={view} />
        <Matrix address={address} title={'10'} MatrixLevel={'2'} view={view} />
        <Matrix address={address} title={'40'} MatrixLevel={'3'} view={view} />
        <Matrix address={address} title={'160'} MatrixLevel={'4'} view={view} />
        <Matrix address={address} title={'640'} MatrixLevel={'5'} view={view} />
        <Matrix
          address={address}
          title={'2,560'}
          MatrixLevel={'6'}
          view={view}
        />
        <Matrix
          address={address}
          title={'10,240'}
          MatrixLevel={'7'}
          view={view}
        />
        <Matrix
          address={address}
          title={'40,960'}
          MatrixLevel={'8'}
          view={view}
        />
      </div>
    </div>
  );
};

export default G3X7Matrixes;
