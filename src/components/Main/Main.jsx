import React, { useEffect } from 'react';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Main = ({
  loggedIn,
  setLoggedIn,
  isShowNavigation,
  setIsShowNavigation,
}) => {
  setIsShowNavigation(true);
  const isMainPage = true;

  return (
    <>
      <Header
        loggedIn={loggedIn}
        setloggedIn={setLoggedIn}
        isShowNavigation={isShowNavigation}
        setIsShowNavigation={isShowNavigation}
        isMainPage={isMainPage}
      />
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
};

export default Main;
