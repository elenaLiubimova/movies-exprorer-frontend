import React, { useEffect, useState } from 'react';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Popup from '../Popup/Popup';

const Main = ({
  loggedIn,
  setLoggedIn,
  isShowNavigation,
  setIsShowNavigation,
  isPopupOpen,
  openPopup,
  closePopup
}) => {
  const [isMainPage, setIsMainPage] = useState(true);
  
  useEffect(() => {
    !loggedIn && setIsShowNavigation(true);
  }, [loggedIn]);

  useEffect(() => {
    loggedIn && setIsShowNavigation(false);
  }, [loggedIn]);

  return (
    <>
      <Header
        loggedIn={loggedIn}
        setloggedIn={setLoggedIn}
        isShowNavigation={isShowNavigation}
        setIsShowNavigation={setIsShowNavigation}
        isMainPage={isMainPage}
        isPopupOpen={isPopupOpen}
        openPopup={openPopup}
        closePopup={closePopup}
      />
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
      <Popup isPopupOpen={isPopupOpen} closePopup={closePopup} isMainPage={isMainPage} />
    </>
  );
};

export default Main;
