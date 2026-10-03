import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Hamza Elshennawy - Portfolio',
  description: 'Full-Stack Developer & Data Engineer | Web, Mobile, AI and Industrial IoT',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
