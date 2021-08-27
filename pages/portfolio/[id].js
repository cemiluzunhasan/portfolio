import { useMemo } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { PORTFOLIO } from 'helpers/constants';
import Slider from 'components/UIComponents/Slider';

import styles from 'styles/pages/PortfolioDetail.module.scss';
import TechItem from 'components/Pages/Portfolio/TechItem';

const PortfolioDetail = () => {
  const { query: { id } } = useRouter();

  const project = useMemo(() => {
    return PORTFOLIO.find(x => x.id === parseInt(id));
  }, [id]);

  return (
    project ? <>
      <Head>
        <title>{title} - Cemil Uzunhasan</title>
        <meta name="description" content={`Learn more about the frontend project of ${project.name}`} />
        <meta property="og:title" content={`${project.name} - Cemil Uzunhasan`} />
        <meta property="og:description" content={`Learn more about ${project.name}`} />
        <meta property="og:url" content={`https://cemiluzunhasan.com/portfolio/${project.id}`} />
        <meta property="og:type" content="website" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.project_name} style={{ color: project.color }}>{project.name}</h1>
        <div className={styles.project_technologies}>
          {project.technologies.map(item =>
            <TechItem name={item} key={item} />
          )}
        </div>
        <p className={styles.project_description}>{project.description}</p>
        <Slider images={project.images} />
      </div>
    </>
      :
      <div></div>
  );
};

export default PortfolioDetail;