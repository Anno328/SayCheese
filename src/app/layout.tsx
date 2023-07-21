import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SayCheese',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* サイドバー */}
        {/* ログイン時のみ表示 */}
        <div className='bg-yellow-100 h-screen w-1/5 float-left	static overflow-auto text-black	'>
          <p>side bar</p>
          <Link href="/">
            <h1>SayCheese!</h1>
            <p>logo</p>
          </Link>
          <Link href="/Account">
            <p>to account</p>
          </Link>
        </div>
        {/* コンテンツ */}
        {children}
      </body>
    </html>
  )
}
