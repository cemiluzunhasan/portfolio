import { memo } from 'react';
import styles from './styles.module.scss';

const TechItem = ({ name }) => {
  return (
    <div className={styles.container}>{name}</div>
  );
};

export default memo(TechItem);