import React from 'react';

export const ListTile = ({
  label,
  value
}: {
  label: string;
  value: string;
}) => {
  return (
    <div className="flex flex-row w-full justify-between items-center">
      <span className="text-sm text-gray-100">{label}</span>
      <span className="text-sm font-medium text-black">{value}</span>
    </div>
  );
};
