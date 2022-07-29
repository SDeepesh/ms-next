import { useEffect, useState } from 'react';
import clsx from 'clsx';

import createApolloClient from '../api/index';

import getAllPages from '../api/queries/pages/getAllPages';
import getAllArticles from '../api/queries/articles/getAllArticles';
import getAllTemplates from '../api/queries/template/getAllTemplates';
import getMenu from '../api/queries/menus/getMenu';
import getAllTopPages from '../api/queries/topPages/getAllTopPages';

import PageLayout from '../components/PageLayout';
import Sidebar from '../components/Sidebar';
import CtaBanner from '../components/CtaBanner';

import Article from '../postTypes/Article';
import Page from '../postTypes/Page';
import Template from '../postTypes/Template';

import getPostTypeBySlug from '../api/queries/getPostTypeBySlug';
import queryAllItems from '../api/utils/queryAllItems';

import getArticleSlug from '../utils/getArticleSlug';
import getPageSlug from '../utils/getPageSlug';
import getTemplateSlug from '../utils/getTemplateSlug';
import getStaticPropsByPostType from '../utils/getStaticPropsByPostType';
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

export const getStaticPaths = async () => {
  const pagesData = await queryAllItems(client.query, getAllPages);
  const articlesData = await queryAllItems(client.query, getAllArticles);
  const templatesData = await queryAllItems(client.query, getAllTemplates);
  const result = [
    ...pagesData.map(getPageSlug),
    ...articlesData.map(getArticleSlug),
    ...templatesData.map(getTemplateSlug),
  ];

  const paths = result.map((slug) => ({
    params: { slug: slug },
  }));

  return {
    paths,
    fallback: true,
  };
};

export async function getStaticProps({ params }) {
  const { slug } = params;
  const lastSlug = slug[slug.length - 1];
  const customPostTypeQuery = getPostTypeBySlug(lastSlug);
  const topPages = (await client.query(getAllTopPages()))?.data?.acfOptionsTopPages?.topPages
    ?.topPages;
  const {
    data: { getPostTypeBySlug: postType },
  } = await client.query(customPostTypeQuery);

  const getStaticPropsFromCustomPostType = getStaticPropsByPostType(postType);
  const postTypeData = await client.query(getStaticPropsFromCustomPostType(`/${lastSlug}`));
  const desktopHeaderData = await client.query(getMenu('dGVybToyNQ=='));

  return { props: { postTypeData, postType, desktopHeaderData, topPages }, revalidate: 10 };
}
