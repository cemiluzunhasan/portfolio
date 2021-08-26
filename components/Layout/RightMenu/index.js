import styles from './styles.module.scss';

const RightMenu = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export default RightMenu;
