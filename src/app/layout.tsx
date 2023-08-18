import './globals.css'
import type { Metadata } from 'next'
import { Cinzel } from 'next/font/google'

const cinzel = Cinzel({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Apex Watch Club',
  description: 'The Future of Luxury Watch Ownership and Trading',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cinzel.className}>{children}</body>
    </html>
  )
}
