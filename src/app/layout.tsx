import type { ReactNode } from 'react'
import { Footer, Header } from '@/core/components/shared'

type RootLayoutProps = {
  children: ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="App">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}

export default RootLayout
