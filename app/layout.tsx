import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/ui/Header'
import { ThemeProvider } from '@/components/ThemeProvider'
import Layout from '@/components/layout/Layout'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Disney Clone',
  description: 'For Educational Purpose',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  

  return (
    <html lang="en">
      <body className="bg-white dark:bg-[#1A1C29]">
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        {/* <Header/> */}
        <Layout>
        {children}
        </Layout>

      </ThemeProvider>  
        </body>
    </html>
  )
}
