import dynamic from "next/dynamic";

const LeftMenu = dynamic(() => import("components/Layout/LeftMenu"));
const RightMenu = dynamic(() => import("components/Layout/RightMenu"));
const HamburgerMenu = dynamic(() => import("components/UIComponents/HamburgerMenu"));

import "styles/main.scss";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className="App">
      <HamburgerMenu />
      <LeftMenu />
      <RightMenu>
        <Component {...pageProps} />
      </RightMenu>
    </div>
  );
}

export default MyApp;
