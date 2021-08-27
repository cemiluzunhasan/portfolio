import Head from 'next/head';
import styles from 'styles/pages/Portfolio.module.scss';
import { PORTFOLIO } from 'helpers/constants';
import PortfolioItem from 'components/Pages/Portfolio/PortfolioItem';

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Portfolio - Cemil Uzunhasan</title>
        <meta name="description" content="Portfolio of my frontend projects" />
        <meta property="og:title" content="Portfolio - Cemil Uzunhasan" />
        <meta property="og:description" content="My frontend and computer engineering projects" />
        <meta property="og:url" content="https://cemiluzunhasan.com/portfolio" />
        <meta property="og:type" content="website" />
      </Head>
      <div className={styles.container}>
        <div className={styles.portfolio}>
          {PORTFOLIO.map(item => (
            <PortfolioItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;