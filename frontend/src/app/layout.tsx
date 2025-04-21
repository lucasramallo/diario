'use client';

import { usePathname } from 'next/navigation'
import './globals.css';
import { PrimeReactProvider } from 'primereact/api';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const bodyClass = pathname === "/post" ? "custom-background" : "";

  return (
    <html lang="en">
      <head />
      <body className={bodyClass}>
        <PrimeReactProvider>
          {children}
        </PrimeReactProvider>
      </body>
    </html>
  );
}
