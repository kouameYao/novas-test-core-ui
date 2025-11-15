'use client';

import { usePathname } from 'next/navigation';

export function usePageTitle() {
  const pathname = usePathname();

  const segments = pathname.split('/').filter(Boolean);

  console.log('segments', segments);

  if (segments[0] === 'dashboard' || segments[1] === 'dashboard') {
    if (segments.length === 1) {
      return { title: 'Novspace', pathname };
    }

    const page = segments.length > 2 ? segments[2] : segments[1];

    const titles: Record<string, string> = {
      dashboard: 'Novspace',
      transactions: 'Transactions'
    };

    return {
      title: titles[page] ?? '',
      pathname
    };
  }

  return { title: 'Novspace', pathname };
}
