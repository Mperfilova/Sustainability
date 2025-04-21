import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Sustainability',
  description: 'A platform for ocean conservation and sustainable fishing practices',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
} 