import Link from "next/link";
import Router from "next/router";
import { memo, useEffect } from "react";
import styles from './styles.module.scss';

const Menu = ({ onChangeRoute }) => {

  useEffect(() => {
    Router.events.on('routeChangeComplete', onChangeRoute);
    return () => {
      Router.events.off('routeChangeComplete', onChangeRoute);
    }
  }, []);

  return (
    <div className={`${styles.hamburger_menu}`}>
      <Link href="/" >HOME</Link>
      <Link href="/about">ABOUT</Link>
      <Link href="/portfolio">PORTFOLIO</Link>
    </div>
  );
};

export default memo(Menu);