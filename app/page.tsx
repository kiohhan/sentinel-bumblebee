import styles from '@/app/ui/styles/styles.module.css'

export default function Home() {
  return (
    <main>
      <h1 className="text-blue-500">I'm blue!</h1>
      <div
        className={styles.shape}
      />
    </main>
  );
}
