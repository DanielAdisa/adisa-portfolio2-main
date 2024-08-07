export const metadata = {
  title: 'Daniels Portfolio CMS',
  description: 'CMS for Daniels Porfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
