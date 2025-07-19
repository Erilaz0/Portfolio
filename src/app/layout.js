import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Martín Alonso</title>
        <meta name="description" content="Bienvenido a mi portfolio" />
        <link rel="icon" href="/icon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
