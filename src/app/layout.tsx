import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hamza Elshennawy - Portfolio',
  description: 'Data Architect | Full-Stack Developer | IoT Enthusiast | Mobile Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}