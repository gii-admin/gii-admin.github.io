import type { Metadata } from 'next'
import { LanguageProvider } from '@/lib/language-context'
import Navigation from '@/components/Navigation'
import './globals.css'

export const metadata: Metadata = {
  title: 'Global Impact Innovators',
  description: 'Empowering young learners through technology and innovation',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Navigation />
          <main>
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  )
}