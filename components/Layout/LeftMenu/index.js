import styles from './styles.module.scss';
import Link from 'next/link';

const LeftMenu = () => {
  return (
    <div className={styles.container}>
      <h1>Cemil Uzunhasan</h1>
      <nav className={styles.nav}>
        <Link href="/">
          Home
        </Link>
        <Link href="/about">
          About
        </Link>
        <Link href="/portfolio">
          Portfolio
        </Link>
      </nav>
    </div>
  );
};

export default LeftMenu;
