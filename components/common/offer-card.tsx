'use client';
import { cn } from '@/lib/utils';

interface OfferCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  badge?: string;
  className?: string;
  onClick?: () => void;
}

export function OfferCard({
  title,
  description,
  imageUrl,
  badge,
  className,
  onClick
}: OfferCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'relative flex flex-col overflow-hidden rounded-3xl bg-white p-6 transition-all min-h-[200px] min-w-[200px]',
        className
      )}
    ></button>
  );
}
