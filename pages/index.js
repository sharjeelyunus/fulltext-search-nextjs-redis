import CarForm from "../lib/CarForm";
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Create a Car</h1>
      <CarForm />
    </div>
  )
}
