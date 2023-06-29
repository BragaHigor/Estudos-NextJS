"use client";

import Link from "next/link"
import styles from '../globals.css'

import { usePathname, useRouter } from 'next/navigation'

const Navigation = ({ navLinks }) => {

    const pathaname = usePathname()
    console.log(pathaname)

    const router = useRouter()

  return (

        <nav className={styles.main}>
            <ul>
              {
                navLinks.map((link) =>{
                    const isActive = pathaname.endsWith(link.href)
                    return (
                        <li key={link.name}>
                            <Link href={link.href}>{link.name} - {isActive ? "Ativo" : ""}</Link>

                        <button type="button" onClick={() => router.push(link.href)}>
                            {link.name}
                        </button>
                        
                        </li>
                    )
                })
              }
            </ul>
        </nav>
    
  )
}

export default Navigation