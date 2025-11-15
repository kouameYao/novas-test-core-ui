import React from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const OperationButton = ({
  label,
  className,
  onClick
}: {
  label: string;
  className?: string;
  onClick: () => void;
}) => {
  return (
    <Button
      onClick={onClick}
      size="lg"
      type="submit"
      className={cn(
        'w-full bg-black text-white py-6 rounded-full font-medium hover:bg-gray-800 transition-colors',
        className
      )}
    >
      {label}
    </Button>
  );
};
