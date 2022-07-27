import clsx from 'clsx';

import { useState, useEffect } from 'react';
import Calculator from '../Sections/Calculator';
import TOC from '../TOC';

import { ReactComponent as ChevronDown } from './../../public/images/chevron-down.svg';
import { ReactComponent as ChevronUp } from './../../public/images/chevron-up.svg';

const Sidebar = ({ topPages, headings }) => {
  const [isTopPagesCollapsed, setIsTopPagesCollapsed] = useState(true);
  const classes = clsx('sidebar', {
    'sidebar--top-pages-collapsed': isTopPagesCollapsed,
  });

  const handleToggleCollapseTopPages = () => {
    setIsTopPagesCollapsed(!isTopPagesCollapsed);
  };

  return (
    <aside className={classes}>
      {!!headings?.length && <TOC headings={headings} isDefaultUncollapsed />}

      {!!topPages?.length && (
        <div className="sidebar__top-pages">
          <strong className="sidebar__top-pages__title" onClick={handleToggleCollapseTopPages}>
            <span>Popular pages</span>
            {isTopPagesCollapsed ? <ChevronDown /> : <ChevronUp />}
          </strong>
          {!isTopPagesCollapsed && (
            <ul>
              {topPages.map((page, index) => (
                <li key={index}>
                  <a href={page.url}>
                    <img src={page.image.sourceUrl} alt={page.text} />
                    {page.text}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      <div className="sidebar__calculator">
        <Calculator />
      </div>
    </aside>
  );
};

export default Sidebar;
