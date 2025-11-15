'use client';

import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

interface MerchantCardProps {
  name: string;
  logoUrl?: string;
  logoColor?: string;
  onClick?: () => void;
  className?: string;
}

export function MerchantCard({
  name,
  logoUrl,
  logoColor = 'bg-gray-200',
  onClick,
  className
}: MerchantCardProps) {
  return (
    <Link
      href="/hub/merchant-payment"
      onClick={onClick}
      className={cn(
        'flex flex-col items-center gap-3 transition-all hover:bg-white rounded-3xl p-4',
        className
      )}
    >
      <div
        className={cn(
          'flex h-20 w-20 items-center justify-center rounded-full',
          logoUrl ? 'overflow-hidden' : logoColor
        )}
      >
        {logoUrl ? (
          <Image
            src={logoUrl || '/placeholder.svg'}
            alt={name}
            width={96}
            height={96}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-2xl size-16 rounded-full flex items-center justify-center font-bold bg-[#E0E0E0] text-gray-400"></span>
        )}
      </div>

      <p className="text-center text-lg leading-5 font-light text-gray-900">
        {name}
      </p>
    </Link>
  );
}
