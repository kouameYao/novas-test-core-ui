'use client';

import React, { useState } from 'react';

import { ArrowBack } from '@/components/common/stepper-card/arrow-back';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

export interface SlidePanelProps {
  children: React.ReactNode;
  trigger?: React.ReactNode;
  title?: string;
  side?: 'top' | 'right' | 'bottom' | 'left';
  className?: string;
  contentClassName?: string;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
  open?: boolean;
  onBackClick?: () => void;
  trailingComponent?: React.ReactNode;
  showBackArrow?: boolean;
}

export interface SlidePanelHeaderProps {
  title?: string;
  onBackClick?: () => void;
  trailingComponent?: React.ReactNode;
  showBackArrow?: boolean;
  className?: string;
}

export interface SlidePanelContentProps {
  children: React.ReactNode;
  className?: string;
}

export const SlidePanelHeader = ({
  title,
  onBackClick,
  trailingComponent,
  showBackArrow = true,
  className
}: SlidePanelHeaderProps) => {
  return (
    <div
      className={cn('flex items-center justify-between p-6 pb-0', className)}
    >
      {showBackArrow && (
        <div className="w-12">
          <ArrowBack handleOnClick={onBackClick} />
        </div>
      )}

      {title && (
        <h1
          className={cn(
            'text-2xl font-bold',
            showBackArrow ? 'flex-1 mx-4' : 'flex-1'
          )}
        >
          {title}
        </h1>
      )}

      {trailingComponent && <div className="w-auto">{trailingComponent}</div>}
    </div>
  );
};

export function SlidePanel({
  children,
  trigger,
  title,
  side = 'right',
  className,
  contentClassName,
  onOpenChange,
  defaultOpen = false,
  open,
  onBackClick,
  trailingComponent,
  showBackArrow = true
}: SlidePanelProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internalOpen;

  const handleOpenChange = (newOpen: boolean) => {
    if (!isControlled) {
      setInternalOpen(newOpen);
    }
    onOpenChange?.(newOpen);
  };

  const handleBack = () => {
    handleOpenChange(false);
    onBackClick?.();
  };

  return (
    <Sheet open={isOpen} onOpenChange={handleOpenChange}>
      {trigger && <SheetTrigger asChild>{trigger}</SheetTrigger>}

      <SheetContent
        side={side}
        className={cn(
          'w-[400px] rounded-l-3xl sm:w-md sm:max-w-lg bg-[#EBEBEB] p-0',
          className
        )}
      >
        {(title || trailingComponent || showBackArrow) && (
          <SlidePanelHeader
            title={title}
            onBackClick={handleBack}
            trailingComponent={trailingComponent}
            showBackArrow={showBackArrow}
          />
        )}

        <div className={cn('px-6 py-4', contentClassName)}>{children}</div>
      </SheetContent>
    </Sheet>
  );
}

export function SlidePanelContent({
  children,
  className
}: SlidePanelContentProps) {
  return <div className={cn('space-y-4', className)}>{children}</div>;
}

export function SlidePanelSection({
  children,
  title,
  className
}: SlidePanelProps) {
  return (
    <div className={cn('space-y-3', className)}>
      {title && (
        <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
      )}
      {children}
    </div>
  );
}
