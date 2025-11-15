import React from 'react';

interface LoginLayoutProps {
  children: React.ReactNode;
}

export default async function LoginLayout({ children }: LoginLayoutProps) {
  return (
    <div className="min-h-screen bg-[#E1E1E1] flex items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto">{children}</div>
    </div>
  );
}
