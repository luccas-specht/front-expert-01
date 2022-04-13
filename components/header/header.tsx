import Image from 'next/image';
import Link from 'next/link';

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
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/favorites">
              <a>Favorites</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
