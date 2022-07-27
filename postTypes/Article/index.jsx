import React from 'react';
import DynamicSections from '../../components/DynamicSections';
import TOC from '../../components/TOC';
import StickyCta from '../../components/StickyCta';

const Article = ({ data, headings }) => {
  const articleData = data.articleBy;
  const { sections } = articleData.sections;
  const { title } = articleData;

  return (
    <div className="article">
      <h1>{title}</h1>
      <TOC headings={headings} />
      <DynamicSections sections={sections} />
      <StickyCta />
    </div>
  );
};

export default Article;
