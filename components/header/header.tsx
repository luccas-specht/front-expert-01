import Link from 'next/link';
import Image from 'next/image';

import { HomeIcon, BookmarkIcon } from '@/icons';

import styles from './style.module.css';

export function Header() {
  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.brand}>
          <Link href="/">
            <a>
              <Image
                src="/images/logo.png"
                width={45}
                height={36}
                alt="OnFood"
              />
              <span> OnFood</span>
            </a>
          </Link>
        </div>
        <ul>
          <li>
            <Link href="/">
              <a>
                <HomeIcon />
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/favorites">
              <a>
                <BookmarkIcon />
                Favorites
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
