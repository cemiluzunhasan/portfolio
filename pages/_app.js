import LeftMenu from "components/Layout/LeftMenu";
import RightMenu from "components/Layout/RightMenu";
import HamburgerMenu from "components/UIComponents/HamburgerMenu";

import "../styles/main.scss";

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
