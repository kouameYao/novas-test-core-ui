import React from 'react';

import { cn } from '@/lib/utils';

import { Card } from '../ui/card';

export const CustomCard = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Card className={cn('p-5 md:p-6 md:px-8 rounded-3xl', className)}>
      {children}
    </Card>
  );
};
