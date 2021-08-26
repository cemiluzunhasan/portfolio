import styles from 'styles/pages/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.Home}>
      <img src="/avatar.png" className={styles.avatar} />
      <div className={styles.info}>
        <h1 className={styles.name}>Cemil Uzunhasan</h1>
        <p>Software Engineer & Frontend Engineer</p>
        <div className={styles.social}>
          <a href="https://linkedin.com/in/cemiluzunhasan" target="_blank">
            <img src="/linkedin.svg" className={styles.social_item} />
          </a>
          <a href="https://github.com/cemiluzunhasan" target="_blank">
            <img src="/github.svg" className={styles.social_item} />
          </a>
          <a href="https://twitter.com/kivircikgitarci" target="_blank">
            <img src="/twitter.svg" className={styles.social_item} />
          </a>
          <a href="https://instagram.com/cemiluzunhasan" target="_blank">
            <img src="/instagram.svg" className={styles.social_item} />
          </a>
        </div>
      </div>
    </div>
  )
}
