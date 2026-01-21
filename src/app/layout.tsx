import type { Metadata } from 'next'
import ClientLayout from '@/components/ClientLayout'
import '../style/global.css'

export const metadata: Metadata = {
  title: 'The Design Hub Management | Where Design Meets Innovation',
  description:
    'Engineering digital legacies through intentional design and innovative code.',
  icons: { icon: '/favicon.ico' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
