import '@/styles/main.css'
import type { Metadata } from 'next'
import type { IRootLayout } from './types'

export const metadata: Metadata = {
  title: 'CNF to DNF',
  description: 'Introduction to Digitial',
}

export default function RootLayout({ children }: IRootLayout) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
