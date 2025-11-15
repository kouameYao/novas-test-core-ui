'use client';

import React from 'react';

interface InfoMessageProps {
  message: string;
  className?: string;
}

export function InfoMessage({ message, className = '' }: InfoMessageProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <p className="text-sm text-black">{message}</p>
    </div>
  );
}
