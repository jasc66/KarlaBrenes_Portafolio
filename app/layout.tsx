import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portafolio Karla Brenes',
  description: 'Created with jasc',
  generator: 'Alonso Salguero C',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
