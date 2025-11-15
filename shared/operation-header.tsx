import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const OperationHeader = ({}) => {
  return (
    <div className="mb-8">
      <div className="flex">
        <Link
          href="/fr/dashboard/hub"
          className="flex items-center justify-between"
        >
          <Image src="/icons/logo.svg" alt="Paynah" width={50} height={50} />
        </Link>
      </div>
    </div>
  );
};
