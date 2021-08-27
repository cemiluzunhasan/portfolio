import dynamic from 'next/dynamic';
import styles from 'styles/pages/Portfolio.module.scss';
import { PORTFOLIO } from 'helpers/constants';

const PortfolioItem = dynamic(() => import('components/Pages/Portfolio/PortfolioItem'));

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.portfolio}>
        {PORTFOLIO.map(item => (
          <PortfolioItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;