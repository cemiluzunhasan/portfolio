import styles from 'styles/pages/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.Home}>
      <picture>
        <source srcset="/avatar.webp" type="image/webp" className={styles.avatar} />
        <img src="/avatar.png" className={styles.avatar} />
      </picture>
      <div className={styles.info}>
        <h1 className={styles.name}>Cemil Uzunhasan</h1>
        <p>Software Engineer & Frontend Engineer</p>
        <div className={styles.social}>
          <a href="https://linkedin.com/in/cemiluzunhasan" target="_blank" rel="noreferrer">
            <img src="/linkedin.svg" className={styles.social_item} width={25} height={25} />
          </a>
          <a href="https://github.com/cemiluzunhasan" target="_blank" rel="noreferrer">
            <img src="/github.svg" className={styles.social_item} width={25} height={25} />
          </a>
          <a href="https://twitter.com/kivircikgitarci" target="_blank" rel="noreferrer">
            <img src="/twitter.svg" className={styles.social_item} width={25} height={25} />
          </a>
          <a href="https://instagram.com/cemiluzunhasan" target="_blank" rel="noreferrer">
            <img src="/instagram.svg" className={styles.social_item} width={25} height={25} />
          </a>
        </div>
      </div>
    </div>
  )
}
