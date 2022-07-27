const GuidesMenu = ({ data }) => {
  const menuData = data.data.menu.menuItems.nodes.filter(
    (menuItem) => menuItem.childItems.nodes.length > 0,
  );

  return (
    <div className="guides-menu">
      <div className="guides-menu__container">
        {menuData.map((menuVoice) => (
          <div className="guides-menu__topic-container">
            <a href={menuVoice.path}>
              <b>{menuVoice.label}</b>
            </a>
            {menuVoice.childItems.nodes.map((childItem) => (
              <a href={childItem.path}>{childItem.label}</a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuidesMenu;
