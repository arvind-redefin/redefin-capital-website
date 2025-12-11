import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RedeFin Capital - Investment Banking & Transaction Advisory',
  description: 'Boutique investment banking firm specializing in real estate fundraising, capital structuring, and M&A advisory. $800Cr+ closed deals.',
  keywords: 'Investment Banking, Real Estate, Fundraising, M&A, Capital Raising, Transaction Advisory',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'RedeFin Capital',
    description: 'Investment Banking & Transaction Advisory Platform',
    url: 'https://redefincapital.com',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-primary-light text-primary-dark font-sans">
        {children}
      </body>
    </html>
  )
}
