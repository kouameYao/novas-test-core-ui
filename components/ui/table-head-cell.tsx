import { cn } from '@/lib/utils';

interface TableHeadCellProps {
  children: React.ReactNode;
  className?: string;
  align?: 'left' | 'center' | 'right';
  rounded?: 'first' | 'last' | 'both' | 'none';
}

export function TableHeadCell({
  children,
  className,
  align = 'left',
  rounded = 'none'
}: TableHeadCellProps) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  const roundedClasses = {
    first: 'rounded-l-2xl',
    last: 'rounded-r-2xl',
    both: 'rounded-2xl',
    none: ''
  };

  return (
    <th
      className={cn(
        'py-3 px-4 text-sm font-medium text-gray-600',
        alignmentClasses[align],
        roundedClasses[rounded],
        className
      )}
    >
      {children}
    </th>
  );
}
