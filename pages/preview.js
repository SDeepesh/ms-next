import { useEffect, useState } from 'react';
import clsx from 'clsx';

import createApolloClient from '../api/index';

import PageLayout from '../components/PageLayout';
import Sidebar from '../components/Sidebar';
import CtaBanner from '../components/CtaBanner';

import Article from '../postTypes/Article';
import Page from '../postTypes/Page';
import Template from '../postTypes/Template';

import postTypes from '../utils/postTypes';
import templates from '../utils/templates';
import getSEOFromPostype from '../utils/getSEOFromPostype';

const client = createApolloClient();

const DynamicPostypes = ({ postTypeData, postType, desktopHeaderData, topPages }) => {
  const [headings, setHeadings] = useState([]);
  const { data } = postTypeData;
  const { template } = data?.pageBy || {};
  const isPage = postType === postTypes.PAGE;
  const isTemplate = postType === postTypes.TEMPLATE;
  const yoastSeo = getSEOFromPostype(postType, data);
  const isNoSidebarTemplate = template?.templateName === templates.NO_SIDEBAR;
  const isSidebarHidden = isTemplate || (isPage && isNoSidebarTemplate);
  const noCtaBanner = isPage && !isNoSidebarTemplate;
  const classes = clsx({
    'page-layout--has-sidebar': !isSidebarHidden,
  });
  let DynamicPostType = null;

  useEffect(() => {
    const headingEls = Array.from(document.querySelectorAll('.ms-page h2, .page h2'));

    setHeadings(headingEls);
  }, []);

  const { node } = client.auth.usePreviewNode();

  if (client.useIsLoading() || node === undefined) {
    return <p>loading...</p>;
  }

  if (node === null) {
    return <p>Post not found</p>;
  }

  switch (postType) {
    case postTypes.ARTICLE:
      DynamicPostType = Article;
      break;

    case postTypes.PAGE:
      DynamicPostType = Page;
      break;

    case postTypes.TEMPLATE:
      DynamicPostType = Template;
      break;

    default:
      break;
  }

  return (
    <PageLayout menuData={desktopHeaderData} classNames={`${classes} ms-page`} yoastSeo={yoastSeo}>
      {noCtaBanner && <CtaBanner />}
      <DynamicPostType data={data} headings={headings} />
      {!isSidebarHidden && <Sidebar topPages={topPages} headings={headings} />}
      {/* <Html unsafeHtml={html} /> */}
    </PageLayout>
  );
};

export default DynamicPostypes;
