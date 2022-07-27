import GuidesMenu from './GuidesMenu';
import SelfhelpMenu from './SelfhelpMenu';
import AboutMenu from './AboutMenu';

const Menus = ({ menu, menuData }) => {
  switch (menu) {
    case 'Guides':
      return <GuidesMenu data={menuData} />;
    case 'Tools':
      return <SelfhelpMenu />;
    case 'About':
      return <AboutMenu />;

    default:
      return null;
  }
};

export default Menus;
