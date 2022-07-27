const TopicMenu = ({ topic }) => {
  return (
    <div className="topic-menu">
      <div className="topic-menu__navigation">
        <ul>
          <li>
            {' '}
            <a href={topic.path}>{topic.label}</a>
          </li>
          {topic.childItems.nodes.map((childItem) => (
            <li>
              <a href={childItem.path}>{childItem.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopicMenu;
