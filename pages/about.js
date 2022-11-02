import { Navbar } from '../components/Navbar'
import styles from '../styles/Home.module.css'

export async function getServerSideProps() {
  console.log('About Page gSSProps')
  return {
    props: {},
  }
}

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main>
        <h1>This is About page</h1>
      </main>
    </div>
  )
}
