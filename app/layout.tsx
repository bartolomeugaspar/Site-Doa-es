import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Doar com Propósito - Transforme Vidas com Sua Contribuição',
  description: 'Plataforma de doações para instituições sociais, orfanatos, escolas comunitárias e ONGs. Transparência total e impacto real nas comunidades.',
  keywords: 'doação, caridade, instituições sociais, orfanatos, ONGs, impacto social',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
