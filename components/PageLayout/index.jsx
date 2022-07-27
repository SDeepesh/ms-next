import Head from '../Head';
import Header from '../Header';
import HeaderMobile from '../HeaderMobile';
import Footer from '../Footer';
import PreFooter from '../PreFooter';

const PageLayout = ({ menuData, yoastSeo, schema, seo, classNames = '', children }) => {
  return (
    <>
      <Head yoastSeo={yoastSeo} schema={schema} seo={seo} />
      <noscript
        dangerouslySetInnerHTML={{
          __html: `
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T5XNDHQ"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>
        `,
        }}
      ></noscript>
      <HeaderMobile menuData={menuData} />
      <Header menuData={menuData} />
      <main className={`page-layout ${classNames}`}>{children}</main>
      <PreFooter />
      <Footer />
    </>
  );
};

export default PageLayout;
