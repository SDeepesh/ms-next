import React from 'react';
import DynamicSections from '../../components/DynamicSections';
import TOC from '../../components/TOC';
import StickyCta from '../../components/StickyCta';

const Page = ({ data, headings }) => {
  const pageData = data.pageBy;
  const noSideMenuTemplate = pageData.template.templateName === 'No Side Menu';
  const { sections } = pageData.sections;
  const { title } = pageData;

  return (
    <div className="page">
      <h1>{title}</h1>
      {!noSideMenuTemplate && <TOC headings={headings} />}
      <DynamicSections sections={sections} />
      {!noSideMenuTemplate && <StickyCta />}
    </div>
  );
};

export default Page;
