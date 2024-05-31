import { GeniosClubAddress, GeniosClubAbi } from '@/lib/constant';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <main className="border-t border-solid border-[#333] bg-[#ae7ddd40] p-[12px] font-san">
      <section className="mx-auto max-w-7xl">
        <div className="grid justify-center py-5">
          <img
            className="block h-24 w-auto "
            src="/logo1.png"
            alt="Your Company"
          />
        </div>
        <h1 className="text-center text-[14px] font-medium text-white">
          The worlds best 100% decentralized solidarity matrix system
        </h1>
        <div className="flex flex-col justify-center items-center my-10">
          <h1 className="text-center text-[15px] font-bold text-white">
            SMART CONTRACT MATRIX
          </h1>
          <Link
            href={`https://polygonscan.com/address/${GeniosClubAddress}`}
            legacyBehavior
          >
            <a
              className="text-[15px] cursor-pointer font-bold text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              {GeniosClubAddress.slice(0, 5)} . . .{' '}
              {GeniosClubAddress.slice(-5)}
            </a>
          </Link>
        </div>
        <h1 className="text-center text-[15px] font-bold text-white">
          Copyright © 2023. GeniosClub All Rights Reserved
        </h1>
      </section>
    </main>
  );
};

export default Footer;
