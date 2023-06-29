import './globals.css'

import Navigation from './components/Navigation'

export default function layout({children}) {

  const navLinks = [

    {
      name: "Home",
      href: "/"
    },
    {
      name: "Dashboard",
      href: "/dashboard"
    },

    {
      name: "Blog",
      href: "/blog"
    }
  ]

  return (
    <html lang="en">
      <body>
        <Navigation navLinks={navLinks}/>
        {children}
      </body>
    </html>
  )
}

