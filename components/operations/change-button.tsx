import React from 'react';

import { cn } from '@/lib/utils';

export const ChangeButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        'flex items-center justify-center p-1 px-3 cursor-pointer bg-[#DEDCDC] hover:bg-[#DEDCDC]/50 transition-colors rounded-full'
      )}
    >
      <span className="text-xs font-normal text-black">Changer</span>
    </div>
  );
};
