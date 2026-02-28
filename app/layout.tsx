import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono, Poppins } from 'next/font/google'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })
const _poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400'] })

export const metadata: Metadata = {
  title: 'Outrev - AI-Powered Communication for Mechanic Shops',
  description: 'Transform your mechanic shop with AI-powered booking, customer communication, and voice answering services. Never miss a call or appointment again.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_poppins.className} font-sans antialiased`}>{children}</body>
    </html>
  )
}
