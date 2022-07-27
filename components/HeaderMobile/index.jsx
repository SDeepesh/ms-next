import clsx from 'clsx';
import { useState } from 'react';

import Calculator from '../Sections/Calculator';
import MobileMenu from '../MobileMenu';

import { ReactComponent as ChevronDown } from './../../public/images/chevron-down.svg';
import { ReactComponent as ChevronUp } from './../../public/images/chevron-up.svg';
import { ReactComponent as BurgerMenu } from './../../public/images/burger-mobile.svg';

const HeaderMobile = ({ menuData }) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuName, setMenuName] = useState(null);
  const [isAboutOpen, setAboutOpen] = useState(false);

  const classes = clsx('header-mobile', {
    'header-mobile--menu-open': isMenuOpen,
  });

  const handleMenuVoiceOnClick = (target) => {
    setMenuName(target.innerText);
    setIsMenuOpen(true);
  };

  const handleChevronOnClick = () => {
    if (isAboutOpen) {
      setAboutOpen(false);
    } else {
      setAboutOpen(true);
    }
  };

  return (
    <div className={classes}>
      {isBurgerOpen && (
        <div className="header-mobile__navigation">
          <div className="header-mobile__navigaton__controls">
            {isMenuOpen && (
              <div
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                Back
              </div>
            )}

            <div
              className="header-mobile__navigation__close"
              onClick={() => {
                setIsBurgerOpen(false);
              }}
            >
              X
            </div>
          </div>

          {isMenuOpen && <MobileMenu menu={menuName} menuData={menuData} />}

          <div className="header-mobile__navigation__top">
            <ul>
              <li
                onClick={({ target }) => {
                  handleMenuVoiceOnClick(target);
                }}
              >
                Guides
              </li>
              <li
                onClick={({ target }) => {
                  handleMenuVoiceOnClick(target);
                }}
              >
                Tools
              </li>
              <li>
                <a href="/fees">Prices</a>
              </li>
            </ul>
          </div>
          <div className="header-mobile__navigation__bottom">
            <ul>
              <li>
                <div className="header-mobile__navigation__about-us" onClick={handleChevronOnClick}>
                  <p>About</p>
                  {isAboutOpen ? <ChevronUp /> : <ChevronDown />}
                </div>
              </li>
              {isAboutOpen && (
                <li>
                  <div className="header-mobile__navigation__us">
                    <a href="/about-us">About us</a>
                    <a href="/team">Our Team</a>
                    <a href="/fees">Prices</a>
                    <a href="/media-coverage">Media</a>
                    <a href="/careers">Careers</a>
                  </div>
                </li>
              )}
              <li>
                <a href="/contact-us">Contact Us</a>
              </li>
            </ul>
          </div>
          <Calculator classNames={'calculator--dark'} />
        </div>
      )}

      <div className="header-mobile__wrapper">
        <a href="/">
          <div className="header-mobile__logo" />
        </a>
        <div className="header-mobile__right">
          <a href="tel: 020 7717 5259">
            <div className="header-mobile_right__phone" />
          </a>
          <BurgerMenu
            onClick={() => {
              setIsBurgerOpen(true);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;
