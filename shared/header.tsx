'use client';

import Image from 'next/image';

export function Header() {
  return (
    <header className="flex items-center justify-between pt-1 px-4 mb-3 lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl w-full">
      <div className="flex items-center gap-4">
        <h1 className="text-[1.6875rem] font-medium">Novaspace</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="gap-2 flex py-2 px-2 pr-3 bg-[#E6E6E6] hover:bg-[#E6E6E6] rounded-full">
          <Image
            src="/icons/comon/profil.svg"
            alt="profil"
            width={20}
            height={20}
          />
          <span className="text-sm hidden sm:block font-medium text-black">
            KOUAME Yao
          </span>
        </div>
      </div>
    </header>
  );
}
