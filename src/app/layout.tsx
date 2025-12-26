import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '24 Hour Club Flyers - Rush Printing Services',
  description: 'Fast turnaround club flyers, postcards, and promotional printing. Same day and next day delivery available.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
