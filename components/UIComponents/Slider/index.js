import { useCallback, useMemo, useState } from 'react';
import Arrows from './Arrows';

import styles from './styles.module.scss';

const Slider = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const length = useMemo(() => images.length, [images]);

  const nextSlide = () => {
    setCurrent((c) => c === length - 1 ? 0 : c + 1);
  }
  const prevSlide = () => {
    setCurrent((c) => c === 0 ? length - 1 : c - 1);
  }

  const _nextSlide = useCallback(nextSlide, []);
  const _prevSlide = useCallback(prevSlide, []);


  return (
    <div className={styles.slider}>
      <Arrows prevSlide={_prevSlide} nextSlide={_nextSlide} />
      {images.map((x, i) => (
        <div className={current === i ? styles.slide_active : styles.slide} key={i}>
          {current === i &&
            <img
              key={i}
              src={x}
              className={`${styles.slide_image} ${current === i ? styles.slider_image_active : ''}`}
              alt="cemiluzunhasan-project"
            />
          }
        </div>
      ))}
    </div>
  );
};

export default Slider;
