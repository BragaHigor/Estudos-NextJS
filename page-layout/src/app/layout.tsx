import Link from 'next/link';
import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const valor = Math.floor(Math.random() * 20);

  return (
    <html lang="en">
      <body>
        <nav>
          <ul>
            <li>{valor}</li>
           <li><Link href='/'>Home</Link></li>
           <li><Link href='/dashboard'>Dashboard</Link></li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
