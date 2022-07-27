import { useState } from 'react';

import TopicMenu from './TopicMenu';

const MobileGuidesMenu = ({ data }) => {
  const [menuTopic, setMenuTopic] = useState();
  const [isShown, setIsShown] = useState(false);

  const handleMenuVoiceOnClick = (topic) => {
    setMenuTopic(topic);
    setIsShown(true);
  };

  const menuData = data.data.menu.menuItems.nodes.filter(
    (menuItem) => menuItem.childItems.nodes.length > 0,
  );

  return (
    <div className="guides-menu">
      {isShown && (
        <div>
          <TopicMenu topic={menuTopic} />
        </div>
      )}
      <div className="guides-menu__container">
        {menuData.map((menuVoice) => (
          <div className="guides-menu__topic-container">
            {console.log(menuVoice)}
            <b
              onClick={() => {
                handleMenuVoiceOnClick(menuVoice);
              }}
            >
              {menuVoice.label}
            </b>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileGuidesMenu;
