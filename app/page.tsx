import styles from '@/app/ui/styles/styles.module.css'
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <h1 className="text-blue-500">Bumblebee</h1>
      <div
        className={styles.shape}
      />
      <div>
        <Image
          src="/images/bb_icon.svg"
          alt="bumblebee"
          width={300}
          height={300}
        />
      </div>
    </main>
  );
}
