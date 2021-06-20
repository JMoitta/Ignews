import Image from 'next/image'

import { SignInButton } from '../SignInButton'
import styles from './styles.module.scss'

import logoIgNews from '../../../public/images/logo.svg'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={logoIgNews} alt="ig.news" />
        <nav>
          <a className={styles.active} href="">Home</a>
          <a href="">Post</a>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
