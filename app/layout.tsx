import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import CustomCursor from './components/CustomCursor'
import BackgroundElements from './components/BackgroundElements'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kirlosker - Video Editor Portfolio',
  description: 'Portfolio of Kirlosker, a passionate Video Editor, Designer, and Director',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black cursor-none`}>
        <CustomCursor />
        <BackgroundElements />
        <Header />
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  )
}

