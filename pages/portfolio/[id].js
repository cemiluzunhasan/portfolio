import { useMemo } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { PORTFOLIO } from 'helpers/constants';

const Slider = dynamic(() => import('components/UIComponents/Slider'));
const TechItem = dynamic(() => import('components/Pages/Portfolio/TechItem'));

import styles from 'styles/pages/PortfolioDetail.module.scss';

const PortfolioDetail = () => {
  const { query: { id } } = useRouter();

  const project = useMemo(() => {
    return PORTFOLIO.find(x => x.id === parseInt(id));
  }, [id]);

  return (
    <div className={styles.container}>
      {
        project &&
        <>
          <h1 className={styles.project_name} style={{ color: project.color }}>{project.name}</h1>
          <div className={styles.project_technologies}>
            {project.technologies.map(item =>
              <TechItem name={item} key={item} />
            )}
          </div>
          <p className={styles.project_description}>{project.description}</p>
          <Slider images={project.images} />
        </>
      }
    </div>
  );
};

export default PortfolioDetail;