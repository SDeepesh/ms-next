import MobileGuidesMenu from './MobileGuidesMenu';
import SelfhelpMenu from '../Menus/SelfhelpMenu';

const MobileMenu = ({ menu, menuData }) => {
  switch (menu) {
    case 'Guides':
      return <MobileGuidesMenu data={menuData} />;
    case 'Tools':
      return <SelfhelpMenu />;
    case 'About':
      return <p>About</p>;

    default:
      return null;
  }
};

export default MobileMenu;
