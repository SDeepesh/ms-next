import PageLayout from '../components/PageLayout';
import CDF from '../components/Sections/CDF';
import Schema from '../components/Schema';

import createApolloClient from '../api';
import getMenu from '../api/queries/menus/getMenu';

import sanitizeHTML from '../utils/sanitiseHTML';
import getFAQPageSchema from '../utils/getFAQPageSchema';
import getAllFaqs from '../api/queries/faqs/getAllFaqs';
import getPageBySlug from '../api/queries/pages/getPageBySlug';

const client = createApolloClient();

const Faqs = ({ faqs, desktopHeaderData, yoastSeo }) => {
  const faqsSchema = JSON.stringify(getFAQPageSchema(faqs.nodes));

  return (
    <PageLayout menuData={desktopHeaderData} yoastSeo={yoastSeo}>
      <div className="faqs">
        <h1>Most common questions</h1>
        <p>Ranging from how we conduct business to how to use some of the tools on our website.</p>
        <p>
          For questions relating to typical workplace problem scenarios see{' '}
          <a href="/do-i-have-a-case">do I have a case</a>
        </p>
        <div>
          {faqs.nodes.map((faq) => {
            return (
              <div key={faq.title} id={faq.title.toLowerCase()}>
                <h3>{faq.title}</h3>
                <div dangerouslySetInnerHTML={{ __html: sanitizeHTML(faq.content) }} />
              </div>
            );
          })}
        </div>
        <CDF />
      </div>
      <Schema schemaRaw={faqsSchema} />
    </PageLayout>
  );
};

export default Faqs;

export async function getStaticProps() {
  const { data: pageData } = await client.query(getPageBySlug('/faq/'));
  const yoastSeo = pageData?.pageBy?.seo;
  const { data: allFaqData } = await client.query(getAllFaqs());
  const { faqs } = allFaqData;
  const desktopHeaderData = await client.query(getMenu('dGVybToyNQ=='));

  return { props: { faqs, desktopHeaderData, yoastSeo }, revalidate: 10 };
}
