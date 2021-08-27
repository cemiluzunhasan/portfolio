import { memo, useCallback, useState } from "react";
import dynamic from 'next/dynamic';

import styles from './styles.module.scss';

const Button = dynamic(() => import('./Button'));
const Menu = dynamic(() => import('./Menu'));


const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  const _setOpen = useCallback(() => setOpen((v) => !v), []);

  return (
    <div className={styles.container}>
      <Button open={open} onClick={_setOpen} />
      {
        open &&
        <Menu onChangeRoute={_setOpen} />
      }
    </div>
  );
};

export default memo(HamburgerMenu);