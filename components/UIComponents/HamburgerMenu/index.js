import { memo, useCallback, useState } from "react";
import Button from "./Button";
import Menu from "./Menu";

import styles from './styles.module.scss';

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