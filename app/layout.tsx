import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Album Automation UI',
  description: 'Album processing and automation tool',
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
