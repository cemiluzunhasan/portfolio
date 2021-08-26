import { memo } from 'react';

import styles from './styles.module.scss';

const Arrows = ({ prevSlide, nextSlide }) => {

  return (
    <>
      <div className={styles.arrow_left_container} onClick={prevSlide}>
        <img src="/arrow.svg" width={20} layout="fill" className={styles.arrow_left} />
      </div>
      <div className={styles.arrow_right_container} onClick={nextSlide}>
        <img src="/arrow.svg" width={20} layout="fill" className={styles.arrow_right} />
      </div>
    </>
  );
};

export default memo(Arrows);
