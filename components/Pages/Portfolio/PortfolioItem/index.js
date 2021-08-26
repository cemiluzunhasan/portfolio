import Link from 'next/link';
import styles from './styles.module.scss';

const PortfolioItem = ({ item }) => {
  return (
    <Link href={`/portfolio/${item.id}`}>
      <div className={styles.container}>
        <img className={styles.portfolio_item_image} src={item.images[0]} />
        <div className={styles.portfolio_item_overlay}>
          <p className={styles.portfolio_item_name}>{item.name}</p>
        </div>
      </div>
    </Link>
  );
};

export default PortfolioItem;