import { memo } from 'react';
import styles from './styles.module.scss';

const Button = ({ open, onClick }) => {
  return (
    <div className={`${styles.hamburger_button} ${open ? styles.hamburger_button_open : ''}`} onClick={onClick}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default memo(Button);
