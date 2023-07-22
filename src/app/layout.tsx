import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'

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
        <div className='h-screen bg-cyan-50 text-cyan-800 text-center font-mono'>
          {/* サイドバー */}
          {/* ログイン時のみ表示 */}
          <div className='bg-cyan-100 w-screen sticky top-0 flex flex-row z-50 px-5'>
            <div className='basis-3/4 flex items-center'>
              <Link href="/">
                <Image
                src="/service_logo.png"
                width={80}
                height={80}
                alt="Picture of the logo"
                />
              </Link>
            </div>
            <div className='basis-1/4 flex items-center'>
              <Link href="/Account">
                <Image
                src="/accounts.png"
                width={65}
                height={65}
                alt="Picture of the logo"
                />
              </Link>
            </div>
          </div>
          {/* コンテンツ */}
          <div className='p-5'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
