'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { cn } from '@/lib/utils';

interface SegmentedControlProps {
  options: Array<{
    value: string;
    label: string;
  }>;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function SegmentedControl({
  options,
  value,
  onChange,
  className = ''
}: SegmentedControlProps) {
  return (
    <div
      className={cn('relative flex bg-gray-300 rounded-full p-1', className)}
    >
      <div className="absolute inset-0 p-1 flex">
        {options.map((option) => (
          <div key={option.value} className="flex-1 relative">
            {value === option.value && (
              <motion.div
                layoutId="activeSegment"
                className="absolute inset-0 bg-white rounded-full"
                transition={{
                  type: 'spring',
                  stiffness: 500,
                  damping: 30
                }}
              />
            )}
          </div>
        ))}
      </div>

      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          className={cn(
            'relative z-10 flex-1 py-2 text-center text-sm font-medium transition-colors',
            value === option.value
              ? 'text-black'
              : 'text-gray-600 hover:text-gray-800'
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
