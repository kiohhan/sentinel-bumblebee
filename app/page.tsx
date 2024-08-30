import styles from '@/app/ui/styles/styles.module.css'
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className='p-3'>
        <Link className='underline text-sky-500 hover:text-sky-600' href='/app'>Apps</Link>
      </div>
    </main>
  );
}
