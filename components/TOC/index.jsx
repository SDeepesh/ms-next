import { useEffect, useState } from 'react';

import { ReactComponent as ChevronDown } from './../../public/images/chevron-down.svg';
import { ReactComponent as ChevronUp } from './../../public/images/chevron-up.svg';

const TOC = ({ headings, isDefaultUncollapsed = false }) => {
  const [collapsed, setCollapsed] = useState(true);

  const handleJumpToHeading = (headingText) => {
    const heading = headings.find((heading) => heading.innerText === headingText);

    if (heading) {
      heading.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    if (isDefaultUncollapsed) {
      setCollapsed(false);
    }
  }, [isDefaultUncollapsed]);

  return (
    <div className="toc">
      <button onClick={handleToggle} className="toc__title">
        <strong>In this guide</strong>
        {collapsed ? <ChevronDown /> : <ChevronUp />}
      </button>

      {!collapsed && (
        <ul>
          {headings.map((heading, index) => (
            <li>
              <button key={index} onClick={() => handleJumpToHeading(heading.innerText)}>
                {heading.innerText}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TOC;
