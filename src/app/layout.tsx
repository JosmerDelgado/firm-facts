import './main.scss'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="global">{children}</body>
    </html>
  )
}
