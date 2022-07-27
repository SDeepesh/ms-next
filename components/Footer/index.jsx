import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { ReactComponent as MsLogo } from './../../public/images/ms-logo-white.svg';
import { ReactComponent as Twitter } from './../../public/images/twitter-icon.svg';
import { ReactComponent as Facebook } from './../../public/images/facebook-icon.svg';
import { ReactComponent as Instagram } from './../../public/images/instagram-icon.svg';
import { ReactComponent as Youtube } from './../../public/images/youtube-icon.svg';

import createApolloClient from '../../api';
import getMenu from '../../api/queries/menus/getMenu';

import resourcesChildren from '../../utils/data/resourcesChilden';
import companyChildren from '../../utils/data/companyChildren';
import setTrackingParams from '../../utils/setTrackingParams';

const client = createApolloClient();

const Footer = () => {
  const [footerVoices, setFooterVoices] = useState([]);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      setTrackingParams(router.asPath);
      const { data } = await client.query(getMenu('dGVybTo0'));
      setFooterVoices(data.menu.menuItems.nodes);
    })();
  }, []);

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__upper">
          <a href="/">
            <div className="footer__logo" />
          </a>
          <div className="footer__upper__guides">
            <p className="footer__upper__guides__title">GUIDES</p>
            <ul>
              {footerVoices.map((item, i) => (
                <li>
                  <a key={i} href={item.path}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__upper__resources">
            <p className="footer__upper__guides__title">RESOURCES</p>
            <ul>
              {resourcesChildren.map((resource, i) => (
                <li>
                  <a key={i} href={resource.path}>
                    {resource.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__upper__last-row">
            <div className="footer__upper__company">
              <p className="footer__upper__guides__title">COMPANY</p>
              <ul>
                {companyChildren.map((child, i) => (
                  <li>
                    <a key={i} href={child.path}>
                      {child.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer__upper__socials">
              <p className="footer__upper__guides__title">FOLLOW US</p>
              <div className="footer__socials__links">
                <a href="https://www.instagram.com/monacosolicitors/">
                  <Instagram />
                </a>
                <a href="https://www.facebook.com/MonacoSolicitors/">
                  <Facebook />
                </a>
                <a href="https://twitter.com/monacosolicitor">
                  <Twitter />
                </a>
                <a href="https://www.youtube.com/c/MonacoSolicitors">
                  <Youtube />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__lower">
          <div className="footer__lower__legal-advice">
            <small>
              Monaco Solicitors make every attempt to ensure the factual accuracy of website content
              at the time of publication. Any guidance or tips given is for information only.
              Nothing should be construed as being legal advice or relied upon as such or perceived
              as creating a lawyer-client relationship.
            </small>
          </div>
          <div className="footer__lower__copyright">
            <p>
              © 2022 Monaco Solicitors Ltd, Registered company no. 08487857
              <br />
              Solicitors Regulation Authority ID no: 621671
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
