import Menus from '../Menus';

import { useState } from 'react';

const Header = ({ menuData }) => {
  const [open, setOpen] = useState(false);
  const [menuName, setMenuName] = useState();

  const handleMenuOnHover = (target) => {
    setOpen(true);
    setMenuName(target);
  };

  return (
    <header className="header">
      {open && (
        <div
          onMouseLeave={() => {
            setOpen(false);
          }}
        >
          <Menus menu={menuName} menuData={menuData} />
        </div>
      )}
      <div className="header__container">
        <div className="header__ms__wrapper">
          <a href="/">
            <div className="header__logo" />
          </a>
          <a className="header__phone__wrapper" href="tel: 020 7717 5259">
            <div class="header__phone" />
            <span>020 7717 5259</span>
          </a>
        </div>
        <nav className="header__nav">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <p
                onMouseOver={({ target }) => {
                  handleMenuOnHover(target.innerText);
                }}
              >
                Guides
              </p>
            </li>
            <li>
              <p
                onMouseOver={({ target }) => {
                  handleMenuOnHover(target.innerText);
                }}
              >
                Tools
              </p>
            </li>
            <li>
              <a href="/fees">Prices</a>
            </li>
            <li>
              <p
                onMouseOver={({ target }) => {
                  handleMenuOnHover(target.innerText);
                }}
              >
                About
              </p>
            </li>
          </ul>
        </nav>
        <div className="header__contact">
          <a href="/contact-us" className="button">
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
