'use client';

import Image from 'next/image';
import Link from 'next/link';
import type * as React from 'react';

import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  icon: string;
  iconColor?: string;
  onClick?: () => void;
  href: string;
  className?: string;
}

export function ServiceCard({
  title,
  icon,
  iconColor = 'text-gray-400',
  onClick,
  href,
  className
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        'group relative cursor-pointer h-[136px] w-[235px] flex flex-col justify-between overflow-hidden rounded-3xl bg-white p-3',
        className
      )}
    >
      <h3 className="text-left text-lg leading-5 font-light w-[50%] pl-3 text-gray-900">
        {title}
      </h3>
      <div className="absolute right-4 bottom-4">
        <Image
          src={icon}
          alt={title}
          width={80}
          height={80}
          className="h-20 w-20"
        />
      </div>
    </Link>
  );
}
