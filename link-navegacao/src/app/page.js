import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
   <>
   <div className={styles.main}>
    <Link href='/dashboard'>Página inicial</Link>
   </div>
   </>
  )
}
