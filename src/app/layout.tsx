import type { ReactNode } from 'react'
import { Footer, Header } from '@/core/components/shared'
import './globals.css'
import { ParallaxProvider } from 'react-scroll-parallax'

type RootLayoutProps = {
  children: ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="app">
          <Header />
          <main className="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

export default RootLayout
