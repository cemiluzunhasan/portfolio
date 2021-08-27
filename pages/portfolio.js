import styles from 'styles/pages/Portfolio.module.scss';
import { PORTFOLIO } from 'helpers/constants';
import PortfolioItem from 'components/Pages/Portfolio/PortfolioItem';

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