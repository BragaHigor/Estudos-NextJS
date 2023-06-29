import Link from "next/link"
import styles from '../page.module.css'

import BackButton from '../components/BackButton'

const Dashboard = () => {
  return (
    <div className={styles.main}>
        <Link href='/'>home</Link>
        <h1>DASHBOARD - <BackButton/> </h1>
    </div>
  )
}

export default Dashboard