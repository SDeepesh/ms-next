import Head from '../Head';
import Header from '../Header';
import HeaderMobile from '../HeaderMobile';
import Footer from '../Footer';
import PreFooter from '../PreFooter';

const PageLayout = ({ menuData, yoastSeo, schema, seo, classNames = '', children }) => {
  return (
    <>
      <Head yoastSeo={yoastSeo} schema={schema} seo={seo} />
      <HeaderMobile menuData={menuData} />
      <Header menuData={menuData} />
      <main className={`page-layout ${classNames}`}>{children}</main>
      <PreFooter />
      <Footer />
    </>
  );
};

export default PageLayout;
